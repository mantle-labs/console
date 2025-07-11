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

import React, { Fragment, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import get from "lodash/get";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import Grid from "@mui/material/Grid";
import { Policy, PolicyList } from "./types";
import { AddIcon, IAMPoliciesIcon } from "../../../icons";

import {
  actionsTray,
  containerForHeader,
  searchField,
} from "../Common/FormComponents/common/styleLibrary";
import { ErrorResponseHandler } from "../../../common/types";

import TableWrapper from "../Common/TableWrapper/TableWrapper";
import PageHeader from "../Common/PageHeader/PageHeader";
import api from "../../../common/api";
import HelpBox from "../../../common/HelpBox";
import PageLayout from "../Common/Layout/PageLayout";
import {
  CONSOLE_UI_RESOURCE,
  IAM_PAGES,
  IAM_SCOPES,
} from "../../../common/SecureComponent/permissions";
import {
  hasPermission,
  SecureComponent,
} from "../../../common/SecureComponent";
import SearchBox from "../Common/SearchBox";

import withSuspense from "../Common/Components/withSuspense";
import RBIconButton from "../Buckets/BucketDetails/SummaryItems/RBIconButton";
import { encodeURLString } from "../../../common/utils";
import { setErrorSnackMessage } from "../../../systemSlice";
import { useAppDispatch } from "../../../store";
import { useTranslation } from 'react-i18next';

const DeletePolicy = withSuspense(React.lazy(() => import("./DeletePolicy")));

const styles = (theme: Theme) =>
  createStyles({
    ...actionsTray,
    ...searchField,
    searchField: {
      ...searchField.searchField,
      maxWidth: 380,
    },
    ...containerForHeader(theme.spacing(4)),
  });

interface IPoliciesProps {
  classes: any;
}

const ListPolicies = ({ classes }: IPoliciesProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [records, setRecords] = useState<Policy[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [selectedPolicy, setSelectedPolicy] = useState<string>("");
  const [filterPolicies, setFilterPolicies] = useState<string>("");
  const viewPolicy = hasPermission(CONSOLE_UI_RESOURCE, [
    IAM_SCOPES.ADMIN_GET_POLICY,
  ]);

  const deletePolicy = hasPermission(CONSOLE_UI_RESOURCE, [
    IAM_SCOPES.ADMIN_DELETE_POLICY,
  ]);

  const displayPolicies = hasPermission(CONSOLE_UI_RESOURCE, [
    IAM_SCOPES.ADMIN_LIST_USER_POLICIES,
  ]);

  useEffect(() => {
    fetchRecords();
  }, []);

  useEffect(() => {
    if (loading) {
      if (displayPolicies) {
        api
          .invoke("GET", `/api/v1/policies`)
          .then((res: PolicyList) => {
            const policies = get(res, "policies", []);

            policies.sort((pa, pb) => {
              if (pa.name > pb.name) {
                return 1;
              }

              if (pa.name < pb.name) {
                return -1;
              }

              return 0;
            });

            setLoading(false);
            setRecords(policies);
          })
          .catch((err: ErrorResponseHandler) => {
            setLoading(false);
            dispatch(setErrorSnackMessage(err));
          });
      } else {
        setLoading(false);
      }
    }
  }, [loading, setLoading, setRecords, dispatch, displayPolicies]);

  const fetchRecords = () => {
    setLoading(true);
  };

  const closeDeleteModalAndRefresh = (refresh: boolean) => {
    setDeleteOpen(false);

    if (refresh) {
      fetchRecords();
    }
  };

  const confirmDeletePolicy = (policy: string) => {
    setDeleteOpen(true);
    setSelectedPolicy(policy);
  };

  const viewAction = (policy: any) => {
    navigate(`${IAM_PAGES.POLICIES}/${encodeURLString(policy.name)}`);
  };

  const tableActions = [
    {
      type: "view",
      onClick: viewAction,
      disableButtonFunction: () => !viewPolicy,
    },
    {
      type: "delete",
      onClick: confirmDeletePolicy,
      sendOnlyId: true,
      disableButtonFunction: () => !deletePolicy,
    },
  ];

  const filteredRecords = records.filter((elementItem) =>
    elementItem.name.includes(filterPolicies)
  );

  return (
    <React.Fragment>
      {deleteOpen && (
        <DeletePolicy
          deleteOpen={deleteOpen}
          selectedPolicy={selectedPolicy}
          closeDeleteModalAndRefresh={closeDeleteModalAndRefresh}
        />
      )}
      <PageHeader label={t("IAM_policies")} />
      <PageLayout className={classes.pageContainer}>
        <Grid container spacing={1}>
          <Grid item xs={12} className={classes.actionsTray}>
            <SearchBox
              onChange={setFilterPolicies}
              placeholder={t('search_policies')}
              overrideClass={classes.searchField}
              value={filterPolicies}
            />

            <SecureComponent
              scopes={[IAM_SCOPES.ADMIN_CREATE_POLICY]}
              resource={CONSOLE_UI_RESOURCE}
              errorProps={{ disabled: true }}
            >
              <RBIconButton
                tooltip={t("create_policy")}
                text={t("create_policy")}
                variant="contained"
                color="primary"
                icon={<AddIcon />}
                onClick={() => {
                  navigate(`${IAM_PAGES.POLICY_ADD}`);
                }}
              />
            </SecureComponent>
          </Grid>
          <Grid item xs={12} className={classes.tableBlock}>
            <SecureComponent
              scopes={[IAM_SCOPES.ADMIN_LIST_USER_POLICIES]}
              resource={CONSOLE_UI_RESOURCE}
              errorProps={{ disabled: true }}
            >
              <TableWrapper
                itemActions={tableActions}
                columns={[{ label: t("name"), elementKey: "name" }]}
                isLoading={loading}
                records={filteredRecords}
                entityName="Policies"
                idField="name"
              />
            </SecureComponent>
          </Grid>
          <Grid item xs={12}>
            <HelpBox
              title={t("learn_more_IAM_polices")}
              iconComponent={<IAMPoliciesIcon />}
              help={
                <Fragment>
                  {t("PBAC_info")}
                  <br />
                  <br />
                    {t("AWS_IAM_compatibility")}
                  <br />
                  <br />
                </Fragment>
              }
            />
          </Grid>
        </Grid>
      </PageLayout>
    </React.Fragment>
  );
};

export default withStyles(styles)(ListPolicies);
