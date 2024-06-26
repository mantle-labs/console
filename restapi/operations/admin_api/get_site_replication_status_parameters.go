// Code generated by go-swagger; DO NOT EDIT.

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
//

package admin_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	"github.com/go-openapi/runtime/middleware"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// NewGetSiteReplicationStatusParams creates a new GetSiteReplicationStatusParams object
// with the default values initialized.
func NewGetSiteReplicationStatusParams() GetSiteReplicationStatusParams {

	var (
		// initialize parameters with default values

		bucketsDefault = bool(true)

		groupsDefault   = bool(true)
		policiesDefault = bool(true)
		usersDefault    = bool(true)
	)

	return GetSiteReplicationStatusParams{
		Buckets: &bucketsDefault,

		Groups: &groupsDefault,

		Policies: &policiesDefault,

		Users: &usersDefault,
	}
}

// GetSiteReplicationStatusParams contains all the bound params for the get site replication status operation
// typically these are obtained from a http.Request
//
// swagger:parameters GetSiteReplicationStatus
type GetSiteReplicationStatusParams struct {

	// HTTP Request Object
	HTTPRequest *http.Request `json:"-"`

	/*Include Bucket stats
	  In: query
	  Default: true
	*/
	Buckets *bool
	/*Entity Type to lookup
	  In: query
	*/
	EntityType *string
	/*Entity Value to lookup
	  In: query
	*/
	EntityValue *string
	/*Include Group stats
	  In: query
	  Default: true
	*/
	Groups *bool
	/*Include Policies stats
	  In: query
	  Default: true
	*/
	Policies *bool
	/*Include Policies stats
	  In: query
	  Default: true
	*/
	Users *bool
}

// BindRequest both binds and validates a request, it assumes that complex things implement a Validatable(strfmt.Registry) error interface
// for simple values it will use straight method calls.
//
// To ensure default values, the struct must have been initialized with NewGetSiteReplicationStatusParams() beforehand.
func (o *GetSiteReplicationStatusParams) BindRequest(r *http.Request, route *middleware.MatchedRoute) error {
	var res []error

	o.HTTPRequest = r

	qs := runtime.Values(r.URL.Query())

	qBuckets, qhkBuckets, _ := qs.GetOK("buckets")
	if err := o.bindBuckets(qBuckets, qhkBuckets, route.Formats); err != nil {
		res = append(res, err)
	}

	qEntityType, qhkEntityType, _ := qs.GetOK("entityType")
	if err := o.bindEntityType(qEntityType, qhkEntityType, route.Formats); err != nil {
		res = append(res, err)
	}

	qEntityValue, qhkEntityValue, _ := qs.GetOK("entityValue")
	if err := o.bindEntityValue(qEntityValue, qhkEntityValue, route.Formats); err != nil {
		res = append(res, err)
	}

	qGroups, qhkGroups, _ := qs.GetOK("groups")
	if err := o.bindGroups(qGroups, qhkGroups, route.Formats); err != nil {
		res = append(res, err)
	}

	qPolicies, qhkPolicies, _ := qs.GetOK("policies")
	if err := o.bindPolicies(qPolicies, qhkPolicies, route.Formats); err != nil {
		res = append(res, err)
	}

	qUsers, qhkUsers, _ := qs.GetOK("users")
	if err := o.bindUsers(qUsers, qhkUsers, route.Formats); err != nil {
		res = append(res, err)
	}
	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// bindBuckets binds and validates parameter Buckets from query.
func (o *GetSiteReplicationStatusParams) bindBuckets(rawData []string, hasKey bool, formats strfmt.Registry) error {
	var raw string
	if len(rawData) > 0 {
		raw = rawData[len(rawData)-1]
	}

	// Required: false
	// AllowEmptyValue: false

	if raw == "" { // empty values pass all other validations
		// Default values have been previously initialized by NewGetSiteReplicationStatusParams()
		return nil
	}

	value, err := swag.ConvertBool(raw)
	if err != nil {
		return errors.InvalidType("buckets", "query", "bool", raw)
	}
	o.Buckets = &value

	return nil
}

// bindEntityType binds and validates parameter EntityType from query.
func (o *GetSiteReplicationStatusParams) bindEntityType(rawData []string, hasKey bool, formats strfmt.Registry) error {
	var raw string
	if len(rawData) > 0 {
		raw = rawData[len(rawData)-1]
	}

	// Required: false
	// AllowEmptyValue: false

	if raw == "" { // empty values pass all other validations
		return nil
	}
	o.EntityType = &raw

	return nil
}

// bindEntityValue binds and validates parameter EntityValue from query.
func (o *GetSiteReplicationStatusParams) bindEntityValue(rawData []string, hasKey bool, formats strfmt.Registry) error {
	var raw string
	if len(rawData) > 0 {
		raw = rawData[len(rawData)-1]
	}

	// Required: false
	// AllowEmptyValue: false

	if raw == "" { // empty values pass all other validations
		return nil
	}
	o.EntityValue = &raw

	return nil
}

// bindGroups binds and validates parameter Groups from query.
func (o *GetSiteReplicationStatusParams) bindGroups(rawData []string, hasKey bool, formats strfmt.Registry) error {
	var raw string
	if len(rawData) > 0 {
		raw = rawData[len(rawData)-1]
	}

	// Required: false
	// AllowEmptyValue: false

	if raw == "" { // empty values pass all other validations
		// Default values have been previously initialized by NewGetSiteReplicationStatusParams()
		return nil
	}

	value, err := swag.ConvertBool(raw)
	if err != nil {
		return errors.InvalidType("groups", "query", "bool", raw)
	}
	o.Groups = &value

	return nil
}

// bindPolicies binds and validates parameter Policies from query.
func (o *GetSiteReplicationStatusParams) bindPolicies(rawData []string, hasKey bool, formats strfmt.Registry) error {
	var raw string
	if len(rawData) > 0 {
		raw = rawData[len(rawData)-1]
	}

	// Required: false
	// AllowEmptyValue: false

	if raw == "" { // empty values pass all other validations
		// Default values have been previously initialized by NewGetSiteReplicationStatusParams()
		return nil
	}

	value, err := swag.ConvertBool(raw)
	if err != nil {
		return errors.InvalidType("policies", "query", "bool", raw)
	}
	o.Policies = &value

	return nil
}

// bindUsers binds and validates parameter Users from query.
func (o *GetSiteReplicationStatusParams) bindUsers(rawData []string, hasKey bool, formats strfmt.Registry) error {
	var raw string
	if len(rawData) > 0 {
		raw = rawData[len(rawData)-1]
	}

	// Required: false
	// AllowEmptyValue: false

	if raw == "" { // empty values pass all other validations
		// Default values have been previously initialized by NewGetSiteReplicationStatusParams()
		return nil
	}

	value, err := swag.ConvertBool(raw)
	if err != nil {
		return errors.InvalidType("users", "query", "bool", raw)
	}
	o.Users = &value

	return nil
}
