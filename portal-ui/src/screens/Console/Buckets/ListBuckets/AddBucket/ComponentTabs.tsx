import React, { useState } from "react";
import { Box, Tabs, Tab, Button } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import ShowTextIcon from "../../../../../icons/ShowTextIcon";
import HideTextIcon from "../../../../../icons/HideTextIcon";
import { AppState, useAppDispatch } from "../../../../../store";
import { s3ConfigObject } from "./AddBucketS3Config";
import SelectedS3Config from "./SelectedS3Config";
import { current } from "@reduxjs/toolkit";

interface ComponentTabsProps {
  listS3Config: s3ConfigObject[];
  errors: boolean[];
  handleS3ConfigChange: (newTabs: s3ConfigObject[]) => void;
  handleErrorChange: (errors: boolean[]) => void;
}

const ComponentTabs: React.FC<ComponentTabsProps> = ({
  listS3Config,
  errors,
  handleS3ConfigChange,
  handleErrorChange,
}) => {
  const [currentTab, setCurrentTab] = useState("0");
  const [showTabs, setShowTabs] = useState(true);

  //Handle to change Tab
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  //Add a new tab
  const handleAddTab = () => {
    const newCurrentTabNumber = listS3Config.length;
    const newConfigAdded: s3ConfigObject = {
      url: "",
      accessKey: "",
      secretKey: "",
      api: "s3v4",
      path: "auto",
      secure: true,
    };
    const newListConfig = [...listS3Config, newConfigAdded];
    setCurrentTab(newCurrentTabNumber.toString());
    handleS3ConfigChange(newListConfig);

    //new tab start with a error
    const newS3Errors = [...errors, false];
    handleErrorChange(newS3Errors);
  };

  //Delete a tab
  const handleDeleteTab = (index: number) => {
    let newListConfig = listS3Config.filter((_, i) => i !== index);
    handleS3ConfigChange(newListConfig);

    const newS3Errors = errors.filter((_, i) => i !== index);
    handleErrorChange(newS3Errors);

    if (parseInt(currentTab) >= newListConfig.length) {
      setCurrentTab((newListConfig.length - 1).toString());
    } else {
      setCurrentTab(currentTab);
    }
  };

  //when a input is changed
  const handleInputChange = (
    index: number,
    field: keyof s3ConfigObject,
    value: any
  ) => {
    const newListConfig = listS3Config.map((config, i) => {
      if (i !== index) return config;

      //Add or remove the secure key for the config
      if (field === "secure") {
        if (value) {
          return { ...config, secure: true };
        } else {
          const { secure, ...rest } = config;
          return rest;
        }
      }

      return { ...config, [field]: value };
    });
    handleS3ConfigChange(newListConfig);

    const s3Errors = newListConfig.map((config) => {
      const url = config.url.trim();
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
    handleErrorChange(s3Errors);
  };

  return (
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
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
              >
                {listS3Config.map((tab, index) => (
                  <Tab
                    key={index}
                    value={index.toString()}
                    label={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        {"storage" + (index + 1)}
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

      {showTabs && (
        <SelectedS3Config
          config={listS3Config[parseInt(currentTab)]}
          index={parseInt(currentTab)}
          handleInputChange={handleInputChange}
          validInput={errors[parseInt(currentTab)]}
        />
      )}
    </Box>
  );
};

export default ComponentTabs;
