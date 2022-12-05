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

import React from "react";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import { IDriveInfo } from "../types";
import {
  capacityColors,
  niceBytes,
  niceBytesInt,
} from "../../../../common/utils";
import { Box } from "@mui/material";
import { Cell, Pie, PieChart } from "recharts";
import { CircleIcon } from "../../../../icons";
import { commonDashboardInfocard } from "../../Common/FormComponents/common/styleLibrary";
import { STATUS_COLORS } from "./Utils";
import { useTranslation } from 'react-i18next';
import { CA } from 'country-flag-icons/react/3x2';

const styles = (theme: Theme) =>
  createStyles({
    ...commonDashboardInfocard,
  });

interface ICardProps {
  classes?: any;
  drive: IDriveInfo;
}

const driveStatusColor = (health_status: string) => {
  switch (health_status) {
    case "offline":
      return STATUS_COLORS.RED;
    case "ok":
      return STATUS_COLORS.GREEN;
    default:
      return STATUS_COLORS.YELLOW;
  }
};

const DriveInfoItem = ({ drive }: ICardProps) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        paddingBottom: "10px",
        padding: "20px",
        border: "1px solid #eaeaea",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexFlow: "column",
          marginLeft: "10px",
          flex: 1,
        }}
      >
        <Box
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            display: "flex",
            alignItems: "center",

            "& .min-icon": {
              marginRight: "10px",
              height: "10px",
              width: "10px",
              fill: driveStatusColor(drive.state),
              flexShrink: 0,
            },

            "& .drive-endpoint": {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
              wordBreak: "break-all",
              marginRight: "8px",
              fontWeight: 600,
              fontSize: {
                md: "16px",
                xs: "10px",
              },
            },
          }}
        >
          <div className="drive-endpoint">{drive.endpoint || ""}</div>
          {drive.state && <CircleIcon />}
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
            marginTop: "10px",
            flexFlow: {
              sm: "row",
              xs: "column",
            },
            "& .info-label": {
              color: "#5E5E5E",
              fontSize: "12px",
              textAlign: "center",
            },
            "& .info-value": {
              fontSize: "18px",
              color: "#07193E",
              display: "flex",
              fontWeight: 500,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <div style={{ position: "relative", width: 110, height: 110 }}>
              <div>
                Drive Name
              </div>
              <div className="info-label">
                Drive Location
              </div>
            </div>
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: 2,
              flexGrow: 1,
            }}
          >
            <CA title="Canada" style={{width: 50, height: 50}}></CA>

          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "5%",
              alignItems: "center",
              flex: 2,
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexFlow: "column",
              }}
            >
              <div className="info-value">
                OK
              </div>
              <label className="info-label">Status</label>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default withStyles(styles)(DriveInfoItem);
