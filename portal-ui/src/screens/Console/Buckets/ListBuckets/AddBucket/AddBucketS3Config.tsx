// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { useState } from "react";
import {
  InputAdornment,
  IconButton,
  Button,
  Tabs,
  Tab,
  Box,
  TextField,
  styled,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { setS3Tabs } from "./addBucketsSlice";
import { AppState, useAppDispatch } from "../../../../../store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import ShowTextIcon from "../../../../../icons/ShowTextIcon";
import HideTextIcon from "../../../../../icons/HideTextIcon";
import { setErrorSnackMessage } from "../../../../../systemSlice";
import { ErrorResponseHandler } from "../../../../../common/types";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export interface TabData {
  name: string;
  url: string;
  accessKey: string;
  secretKey: string;
  api: string;
  path: string;
  secure?: boolean;
}

const AddBucketS3Config = ({
  hasS3Errors,
  showPasswords,
}: {
  hasS3Errors: (errors: boolean[]) => void;
  showPasswords: (value: { [key: number]: boolean }) => void;
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState("0");
  const [showTabs, setShowTabs] = useState(true);
  const tabs = useSelector((state: AppState) => state.addBucket.s3Tabs);

  const [showPassword, setShowPassword] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [s3Errors, setS3Errors] = useState<boolean[]>([]);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  //toggle to see the secret key
  const toggleShowPassword = (index: number) => {
    setShowPassword((prev) => {
      const next = { ...prev, [index]: !prev[index] };
      showPasswords(next);
      return next;
    });
  };

  //New tab
  const handleAddTab = () => {
    const newTabNumber = tabs.length;
    const newTab: TabData = {
      name: `storage${newTabNumber + 1}`,
      url: "",
      accessKey: "",
      secretKey: "",
      api: "s3v4",
      path: "auto",
      secure: true,
    };
    const newTabs = [...tabs, newTab];
    setCurrentTab(newTabNumber.toString());
    dispatch(setS3Tabs(newTabs));

    //new tab start with a error
    const newS3Errors = [...s3Errors, false];
    hasS3Errors(newS3Errors);
    setS3Errors(newS3Errors);
  };

  //Changing tabs
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  //when a input is changed
  const handleInputChange = (
    index: number,
    field: keyof TabData,
    value: any
  ) => {
    const newTabs = tabs.map((tab, i) => {
      if (i !== index) return tab;

      //Add or remove the secure key in JSON for the tab
      if (field === "secure") {
        if (value) {
          return { ...tab, secure: true };
        } else {
          const { secure, ...rest } = tab;
          return rest;
        }
      }

      return { ...tab, [field]: value };
    });
    dispatch(setS3Tabs(newTabs));

    const s3Errors = newTabs.map((tab) => {
      const url = tab.url.trim();
      const hostPort = url.split("/")[0];
      //number of ':' to see if port is good
      const colonMatches = hostPort.match(/:/g);
      const hasSingleColon = colonMatches ? colonMatches.length === 1 : false;
      //looking for good format of port
      const hasPort = hasSingleColon
        ? /^\d+$/.test(hostPort.split(":")[1])
        : false;
      return hasPort;
    });
    hasS3Errors(s3Errors);
    setS3Errors(s3Errors);
  };

  //config file upload
  const handleUploadConfig = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    //read the file
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const parsed = JSON.parse(text);

        let newTabs: TabData[] = [];

        if (
          Object.keys(parsed).some((key) =>
            key.toLowerCase().startsWith("storage")
          )
        ) {
          //Only filtre the storage keys and map the json
          newTabs = Object.entries(parsed)
            .filter(([key]) => key.toLowerCase().startsWith("storage"))
            .map(([key, value], i) => {
              const cfg = value as Partial<TabData>;
              return {
                name: `storage${i + 1}`,
                url: cfg.url || "",
                accessKey: cfg.accessKey || "",
                secretKey: cfg.secretKey || "",
                api: cfg.api || "s3v4",
                path: cfg.path || "auto",
                ...(cfg.secure === true && { secure: true }),
              };
            });
        } else {
          const cfg = parsed as Partial<TabData>;
          newTabs = [
            {
              name: "storage1",
              url: cfg.url || "",
              accessKey: cfg.accessKey || "",
              secretKey: cfg.secretKey || "",
              api: cfg.api || "s3v4",
              path: cfg.path || "auto",
              ...(cfg.secure === true && { secure: true }),
            },
          ];
        }
        dispatch(setS3Tabs(newTabs));
        setCurrentTab("0");

        //Check for the URL validation when we upload a S3 config file
        const s3ErrorsUpload = newTabs.map((tab) => {
          const url = tab.url.trim();
          const hostPort = url.split("/")[0];
          //number of ':' to see if port is good
          const colonMatches = hostPort.match(/:/g);
          const hasSingleColon = colonMatches
            ? colonMatches.length === 1
            : false;
          //looking for good format of port
          const hasPort = hasSingleColon
            ? /^\d+$/.test(hostPort.split(":")[1])
            : false;
          return hasPort;
        });
        hasS3Errors(s3ErrorsUpload);
        setS3Errors(s3ErrorsUpload);
      } catch (err: any) {
        const error: ErrorResponseHandler = {
          errorMessage:
            err instanceof SyntaxError
              ? t("file_notJSON")
              : err.message,
          detailedError: "",
        };

        dispatch(setErrorSnackMessage(error));
      }
    };
    //Call the reader.onload
    reader.readAsText(file);
  };

  //Delete a tab
  const handleDeleteTab = (index: number) => {
    let newTabs = tabs.filter((_, i) => i !== index);

    newTabs = newTabs.map((tab, i) => ({
      ...tab,
      name: `storage${i + 1}`,
    }));

    setShowPassword((prev) => {
      const newState: typeof prev = {};
      newTabs.forEach((_, i) => {
        if (prev[i < index ? i : i + 1] !== undefined) {
          newState[i] = prev[i < index ? i : i + 1];
        }
      });
      showPasswords(newState);
      return newState;
    });

    const newS3Errors = s3Errors.filter((_, i) => i !== index);
    hasS3Errors(newS3Errors);
    setS3Errors(newS3Errors);

    dispatch(setS3Tabs(newTabs));

    if (newTabs.length === 0) {
      setCurrentTab("0");
    } else if (parseInt(currentTab) >= newTabs.length) {
      setCurrentTab((newTabs.length - 1).toString());
    } else {
      setCurrentTab(currentTab);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      {tabs.length <= 0 && (
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            onClick={handleAddTab}
          >
            {t("add_a_S3_provider")}
          </Button>

          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
          >
            {t("upload_s3_file")}
            <VisuallyHiddenInput
              type="file"
              id="fileInput"
              onChange={handleUploadConfig}
            />
          </Button>
        </Box>
      )}

      {tabs.length > 0 && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              variant="text"
              size="small"
              onClick={() => setShowTabs(!showTabs)}
              sx={{
                minWidth: 0,
                padding: "0 !important",
                margin: 0,
                "& .min-icon": {
                  maxHeight: "none",
                },
              }}
            >
              {showTabs ? <HideTextIcon /> : <ShowTextIcon />}
            </Button>
            {showTabs && (
              <TabContext value={currentTab}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    maxWidth: { xs: 270, sm: 700 },
                  }}
                >
                  <Tabs
                    value={currentTab}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                  >
                    {tabs.map((tab, index) => (
                      <Tab
                        key={index}
                        value={index.toString()}
                        label={
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            {tab.name}
                            <CloseIcon
                              sx={{
                                fontSize: 16,
                                cursor: "pointer",
                                ml: 1,
                                "&:hover": {
                                  backgroundColor: "rgba(0,0,0,0.1)",
                                  color: "red",
                                },
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteTab(index);
                              }}
                            />
                          </Box>
                        }
                      />
                    ))}
                    <Tab
                      key="add"
                      value="add"
                      onClick={handleAddTab}
                      icon={
                        <AddIcon
                          sx={{
                            fontSize: 20,
                            fontWeight: "bold",
                            "&:hover": { color: "green" },
                          }}
                        />
                      }
                      sx={{ minWidth: 10 }}
                    />
                  </Tabs>
                </Box>
              </TabContext>
            )}
          </Box>

          {showTabs &&
            tabs.map((tab, index) => (
              <TabContext key={index} value={currentTab}>
                <TabPanel key={index} value={index.toString()} sx={{ p: 2 }}>
                  <TextField
                    label="URL"
                    value={tab.url}
                    onChange={(e) =>
                      handleInputChange(index, "url", e.target.value)
                    }
                    error={s3Errors[index] === false}
                    fullWidth
                    margin="normal"
                    helperText={
                      s3Errors[index] === false
                        ? t("url_error_prefix_port")
                        : ""
                    }
                  />
                  <TextField
                    label={t("accesskey")}
                    value={tab.accessKey}
                    onChange={(e) =>
                      handleInputChange(index, "accessKey", e.target.value)
                    }
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label={t("secretkey")}
                    value={tab.secretKey}
                    onChange={(e) =>
                      handleInputChange(index, "secretKey", e.target.value)
                    }
                    fullWidth
                    margin="normal"
                    type={showPassword[index] ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => toggleShowPassword(index)}
                            edge="end"
                          >
                            {showPassword[index] ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <FormControlLabel
                    label={t("secure")}
                    labelPlacement="start"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "1.15rem",
                        marginLeft: 0,
                      },
                      "& .css-266sx": {
                        marginLeft: "5px",
                      },
                    }}
                    control={
                      <Checkbox
                        checked={tab.secure}
                        onChange={(e) =>
                          handleInputChange(index, "secure", e.target.checked)
                        }
                      />
                    }
                  />
                </TabPanel>
              </TabContext>
            ))}
        </Box>
      )}
    </Box>
  );
};

export default AddBucketS3Config;
