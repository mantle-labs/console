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
import { Button, Box, styled } from "@mui/material";
import { useAppDispatch } from "../../../../../store";
import { useTranslation } from "react-i18next";
import { setErrorSnackMessage } from "../../../../../systemSlice";
import { ErrorResponseHandler } from "../../../../../common/types";
import S3ConfigTabs from "./S3ConfigTabs";

export interface s3ConfigObject {
  url: string;
  accessKey: string;
  secretKey: string;
  api: string;
  path: string;
  secure?: boolean;
}

const AddBucketS3Config = ({
  listS3Config,
  handleS3Errors,
  handleS3ConfigChange,
}: {
  listS3Config: s3ConfigObject[];
  handleS3Errors: (errors: boolean[]) => void;
  handleS3ConfigChange: (configs: s3ConfigObject[]) => void;
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [s3Errors, setS3Errors] = useState<boolean[]>([]);
  const [showAllTabs, setShowAllTabs] = useState(false);

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

  //function to validate the Json
  function validationS3ConfigShape(json: any) {
    const storageKeyRegex = new RegExp(/^storage\d+$/);
    const requiredFields = ["url", "accessKey", "secretKey", "api", "path"];

    for(const key of Object.keys(json)) {
      if(!storageKeyRegex.test(key)){
        throw new Error(`Expected keys like "storage1", "storage2", ...`);
      }

      //Validate that every key as the right fields
      const obj = json[key];
      for (const field of requiredFields) {
      if (!(field in obj)) {
        throw new Error(`Missing required field "${field}" in "${key}"`);
      }
    }

    //Make sure that if there is a secure field, that the field is a boolean
    if ("secure" in obj && typeof obj.secure !== "boolean") {
          throw new Error(`Field "secure" in "${key}" must be a boolean`);
        }
    }
  }

  //config file upload
  const handleUploadConfig = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const parsed = JSON.parse(text) as s3ConfigObject[]

        validationS3ConfigShape(parsed);

        const result = Object.values(parsed).map((s3Object) => s3Object);
        handleS3ConfigChange(result)

        const s3ErrorsUpload = result.map((config) => {
          const url = config.url.trim();
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
        handleS3Errors(s3ErrorsUpload);
        setS3Errors(s3ErrorsUpload);
      } catch (err: any) {
        const error: ErrorResponseHandler = {
          errorMessage:
            err instanceof SyntaxError ? t("file_notJSON") : err.message,
          detailedError: "",
        };

        dispatch(setErrorSnackMessage(error));
      }
    };
    //Call the reader.onload on top
    reader.readAsText(file);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {(listS3Config.length <= 0 || !showAllTabs) && (
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            onClick={() => {
              setShowAllTabs(true);
            }}
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

      {(listS3Config.length > 0 || showAllTabs) && (
        <S3ConfigTabs
          listS3Config={listS3Config}
          errors={s3Errors}
          handleS3ConfigChange={handleS3ConfigChange}
          handleErrorChange={(errors: boolean[]) => {
            setS3Errors(errors);
            handleS3Errors(errors);
          }}
          onAllTabsDeleted={() => setShowAllTabs(false)}
        />
      )}
    </Box>
  );
};

export default AddBucketS3Config;
