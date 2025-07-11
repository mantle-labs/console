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

// TenantEncryptionInfoOKCode is the HTTP code returned for type TenantEncryptionInfoOK
const TenantEncryptionInfoOKCode int = 200

/*TenantEncryptionInfoOK A successful response.

swagger:response tenantEncryptionInfoOK
*/
type TenantEncryptionInfoOK struct {

	/*
	  In: Body
	*/
	Payload *models.EncryptionConfigurationResponse `json:"body,omitempty"`
}

// NewTenantEncryptionInfoOK creates TenantEncryptionInfoOK with default headers values
func NewTenantEncryptionInfoOK() *TenantEncryptionInfoOK {

	return &TenantEncryptionInfoOK{}
}

// WithPayload adds the payload to the tenant encryption info o k response
func (o *TenantEncryptionInfoOK) WithPayload(payload *models.EncryptionConfigurationResponse) *TenantEncryptionInfoOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the tenant encryption info o k response
func (o *TenantEncryptionInfoOK) SetPayload(payload *models.EncryptionConfigurationResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *TenantEncryptionInfoOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*TenantEncryptionInfoDefault Generic error response.

swagger:response tenantEncryptionInfoDefault
*/
type TenantEncryptionInfoDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewTenantEncryptionInfoDefault creates TenantEncryptionInfoDefault with default headers values
func NewTenantEncryptionInfoDefault(code int) *TenantEncryptionInfoDefault {
	if code <= 0 {
		code = 500
	}

	return &TenantEncryptionInfoDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the tenant encryption info default response
func (o *TenantEncryptionInfoDefault) WithStatusCode(code int) *TenantEncryptionInfoDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the tenant encryption info default response
func (o *TenantEncryptionInfoDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the tenant encryption info default response
func (o *TenantEncryptionInfoDefault) WithPayload(payload *models.Error) *TenantEncryptionInfoDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the tenant encryption info default response
func (o *TenantEncryptionInfoDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *TenantEncryptionInfoDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
