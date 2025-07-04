// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
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
import get from "lodash/get";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import { NewServiceAccount } from "./types";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import Grid from "@mui/material/Grid";
import CredentialItem from "./CredentialItem";
import WarnIcon from "../../../../icons/WarnIcon";
import { DownloadIcon, ServiceAccountCredentialsIcon } from "../../../../icons";
import { useTranslation } from 'react-i18next';

import RBIconButton from "../../Buckets/BucketDetails/SummaryItems/RBIconButton";

const styles = (theme: Theme) =>
  createStyles({
    warningBlock: {
      color: "red",
      fontSize: ".85rem",
      margin: ".5rem 0 .5rem 0",
      display: "flex",
      alignItems: "center",
      "& svg ": {
        marginRight: ".3rem",
        height: 16,
        width: 16,
      },
    },
    credentialTitle: {
      padding: ".8rem 0 0 0",
      fontWeight: 600,
      fontSize: ".9rem",
    },
    buttonContainer: {
      textAlign: "right",
      marginTop: "1rem",
    },
    credentialsPanel: {
      overflowY: "auto",
      maxHeight: 350,
    },
    promptTitle: {
      display: "flex",
      alignItems: "center",
    },
    buttonSpacer: {
      marginRight: ".9rem",
    },
  });

interface ICredentialsPromptProps {
  classes: any;
  newServiceAccount: NewServiceAccount | null;
  open: boolean;
  entity: string;
  closeModal: () => void;
}

const download = (filename: string, text: string) => {
  let element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + text);
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
};

const CredentialsPrompt = ({
  classes,
  newServiceAccount,
  open,
  closeModal,
  entity,
}: ICredentialsPromptProps) => {
  const { t } = useTranslation();

  if (!newServiceAccount) {
    return null;
  }
  const consoleCreds = get(newServiceAccount, "console", null);
  const idp = get(newServiceAccount, "idp", false);

  return (
    <ModalWrapper
      modalOpen={open}
      onClose={() => {
        closeModal();
      }}
      title={
        <div className={classes.promptTitle}>
          <div>{t("new")} {entity} {t("created")}</div>
        </div>
      }
      titleIcon={<ServiceAccountCredentialsIcon />}
    >
      <Grid container>
        <Grid item xs={12} className={classes.formScrollable}>
          {t("a_new")} {entity} {t("following_details")}:
          {!idp && consoleCreds && (
            <React.Fragment>
              <Grid item xs={12} className={classes.credentialsPanel}>
                <div className={classes.credentialTitle}>
                 {t("console_credentials")}
                </div>
                {Array.isArray(consoleCreds) &&
                  consoleCreds.map((credentialsPair, index) => {
                    return (
                      <>
                        <CredentialItem
                          label={t("acces_key")}
                          value={credentialsPair.accessKey}
                        />
                        <CredentialItem
                          label={t("secret_key")}
                          value={credentialsPair.secretKey}
                        />
                      </>
                    );
                  })}
                {!Array.isArray(consoleCreds) && (
                  <>
                    <CredentialItem
                      label={t("acces_key")}
                      value={consoleCreds.accessKey}
                    />
                    <CredentialItem
                      label={t("secret_key")}
                      value={consoleCreds.secretKey}
                    />
                  </>
                )}
              </Grid>
            </React.Fragment>
          )}
          {(consoleCreds === null || consoleCreds === undefined) && (
            <>
              <CredentialItem
                label={t("acces_key")}
                value={newServiceAccount.accessKey || ""}
              />
              <CredentialItem
                label={t("secret_key")}
                value={newServiceAccount.secretKey || ""}
              />
            </>
          )}
          {idp ? (
            <div className={classes.warningBlock}>
              {t("please_login_configured_identity_provider")}
            </div>
          ) : (
            <div className={classes.warningBlock}>
              <WarnIcon />
              <span>
                {t("write_these_down_only_time_displayed")}
              </span>
            </div>
          )}
        </Grid>
        <Grid item xs={12} className={classes.buttonContainer}>
          {!idp && (
            <>
              <RBIconButton
                id={"download-button"}
                tooltip={t("download_credentials_json_details")}
                text={t("download_for_import")}
                className={classes.buttonSpacer}
                onClick={() => {
                  let consoleExtras = {};

                  if (consoleCreds) {
                    if (!Array.isArray(consoleCreds)) {
                      consoleExtras = {
                        url: consoleCreds.url,
                        accessKey: consoleCreds.accessKey,
                        secretKey: consoleCreds.secretKey,
                        api: "s3v4",
                        path: "auto",
                      };
                    } else {
                      const cCreds = consoleCreds.map((itemMap) => {
                        return {
                          url: itemMap.url,
                          accessKey: itemMap.accessKey,
                          secretKey: itemMap.secretKey,
                          api: "s3v4",
                          path: "auto",
                        };
                      });
                      consoleExtras = cCreds[0];
                    }
                  } else {
                    consoleExtras = {
                      url: newServiceAccount.url,
                      accessKey: newServiceAccount.accessKey,
                      secretKey: newServiceAccount.secretKey,
                      api: "s3v4",
                      path: "auto",
                    };
                  }

                  download(
                    "credentials.json",
                    JSON.stringify({
                      ...consoleExtras,
                    })
                  );
                }}
                icon={<DownloadIcon />}
                variant="contained"
                color="primary"
              />

              {Array.isArray(consoleCreds) && consoleCreds.length > 1 && (
                <RBIconButton
                  id={"download-all-button"}
                  tooltip={t("download_all_access_credentials_to_json")}
                  text={t("download_all_access")}
                  className={classes.buttonSpacer}
                  onClick={() => {
                    let allCredentials = {};
                    if (consoleCreds) {
                      const cCreds = consoleCreds.map((itemMap) => {
                        return {
                          accessKey: itemMap.accessKey,
                          secretKey: itemMap.secretKey,
                        };
                      });
                      allCredentials = cCreds;
                    }
                    download(
                      "all_credentials.json",
                      JSON.stringify({
                        ...allCredentials,
                      })
                    );
                  }}
                  icon={<DownloadIcon />}
                  variant="contained"
                  color="primary"
                />
              )}
            </>
          )}
        </Grid>
      </Grid>
    </ModalWrapper>
  );
};

export default withStyles(styles)(CredentialsPrompt);
