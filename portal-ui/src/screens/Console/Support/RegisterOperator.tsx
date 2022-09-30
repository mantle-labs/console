// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public APIKey as published by
// the Free Software Foundation, either version 3 of the APIKey, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public APIKey for more details.
//
// You should have received a copy of the GNU Affero General Public APIKey
// along with this program.  If not, see <http://www.gnu.org/APIKeys/>.

import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import {
  actionsTray,
  containerForHeader,
  searchField,
  spacingUtils,
} from "../Common/FormComponents/common/styleLibrary";
import withStyles from "@mui/styles/withStyles";
import { Box } from "@mui/material";
import PageHeader from "../Common/PageHeader/PageHeader";
import PageLayout from "../Common/Layout/PageLayout";
import api from "../../../common/api";

import { ErrorResponseHandler } from "../../../common/types";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPanel } from "../../shared/tabs";
import { ClusterRegistered } from "./utils";
import ApiKeyRegister from "./ApiKeyRegister";

interface IRegister {
  classes: any;
}

const styles = (theme: Theme) =>
  createStyles({
    registerActivationIcon: {
      color: theme.palette.primary.main,
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 20,
      "& .min-icon": {
        width: 32.12,
        height: 25,
        marginRight: 10,
        verticalAlign: "middle",
      },
    },
    registerActivationMode: {
      textAlign: "right",
      "& a": {
        cursor: "pointer",
      },
    },
    subnetDescription: {
      textAlign: "left",
      Font: "normal normal normal 14px/17px Lato",
      letterSpacing: 0,
      color: "#000000",
      "& span": {
        fontWeight: "bold",
      },
    },
    registeredStatus: {
      border: "1px solid #E2E2E2",
      padding: "24px 24px 24px 24px",
      borderRadius: 2,
      marginBottom: 25,
      backgroundColor: "#FBFAFA",
      "& .min-icon": {
        width: 20,
        height: 20,
        marginLeft: 48,
        marginRight: 13,
        verticalAlign: "middle",
        marginTop: -3,
      },
      "& span": {
        fontWeight: "bold",
      },
    },
    copyInputBox: {
      "& button": {
        border: "1px solid #5E5E5E",
        borderRadius: 2,
      },
    },
    link: {
      color: "#2781B0",
      cursor: "pointer",
    },
    sizedLabel: {
      minWidth: "75px",
    },
    ...actionsTray,
    ...searchField,
    ...spacingUtils,
    ...containerForHeader(theme.spacing(4)),
  });

const RegisterOperator = ({ classes }: IRegister) => {
  const [apiKeyRegistered, setAPIKeyRegistered] = useState<boolean>(false);
  const [curTab, setCurTab] = useState<number>(0);

  const fetchAPIKeyInfo = useCallback(() => {
    api
      .invoke("GET", `/api/v1/subnet/apikey/info`)
      .then((res: any) => {
        setAPIKeyRegistered(true);
      })
      .catch((err: ErrorResponseHandler) => {
        setAPIKeyRegistered(false);
      });
  }, []);

  useEffect(() => {
    fetchAPIKeyInfo();
  }, [fetchAPIKeyInfo]);

  const apiKeyRegistration = (
    <Fragment>
      <Box
        sx={{
          border: "1px solid #eaeaea",
          borderRadius: "2px",
          display: "flex",
          flexFlow: "column",
          padding: "43px",
        }}
      >
        {apiKeyRegistered ? (
          <ClusterRegistered email={"Operator"} linkClass={classes.link} />
        ) : (
          <ApiKeyRegister
            registerEndpoint={"/api/v1/subnet/apikey/register"}
            afterRegister={fetchAPIKeyInfo}
          />
        )}
      </Box>
    </Fragment>
  );

  return (
    <Fragment>
      <PageHeader
        label="Register to MinIO Subscription Network"
        actions={<React.Fragment />}
      />

      <PageLayout>
        <Tabs
          value={curTab}
          onChange={(e: React.ChangeEvent<{}>, newValue: number) => {
            setCurTab(newValue);
          }}
          indicatorColor="primary"
          textColor="primary"
          aria-label="cluster-tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab
            label="API Key"
            id="simple-tab-0"
            aria-controls="simple-tabpanel-1"
          />
        </Tabs>
        <TabPanel index={0} value={curTab}>
          {apiKeyRegistration}
        </TabPanel>
      </PageLayout>
    </Fragment>
  );
};

export default withStyles(styles)(RegisterOperator);
