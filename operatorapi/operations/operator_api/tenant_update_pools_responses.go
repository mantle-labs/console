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

package operator_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/mantle-labs/console/models"
)

// TenantUpdatePoolsOKCode is the HTTP code returned for type TenantUpdatePoolsOK
const TenantUpdatePoolsOKCode int = 200

/*TenantUpdatePoolsOK A successful response.

swagger:response tenantUpdatePoolsOK
*/
type TenantUpdatePoolsOK struct {

	/*
	  In: Body
	*/
	Payload *models.Tenant `json:"body,omitempty"`
}

// NewTenantUpdatePoolsOK creates TenantUpdatePoolsOK with default headers values
func NewTenantUpdatePoolsOK() *TenantUpdatePoolsOK {

	return &TenantUpdatePoolsOK{}
}

// WithPayload adds the payload to the tenant update pools o k response
func (o *TenantUpdatePoolsOK) WithPayload(payload *models.Tenant) *TenantUpdatePoolsOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the tenant update pools o k response
func (o *TenantUpdatePoolsOK) SetPayload(payload *models.Tenant) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *TenantUpdatePoolsOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*TenantUpdatePoolsDefault Generic error response.

swagger:response tenantUpdatePoolsDefault
*/
type TenantUpdatePoolsDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewTenantUpdatePoolsDefault creates TenantUpdatePoolsDefault with default headers values
func NewTenantUpdatePoolsDefault(code int) *TenantUpdatePoolsDefault {
	if code <= 0 {
		code = 500
	}

	return &TenantUpdatePoolsDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the tenant update pools default response
func (o *TenantUpdatePoolsDefault) WithStatusCode(code int) *TenantUpdatePoolsDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the tenant update pools default response
func (o *TenantUpdatePoolsDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the tenant update pools default response
func (o *TenantUpdatePoolsDefault) WithPayload(payload *models.Error) *TenantUpdatePoolsDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the tenant update pools default response
func (o *TenantUpdatePoolsDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *TenantUpdatePoolsDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
