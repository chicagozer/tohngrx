/**
 * VDMS
 * vDMS Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
import * as models from './models';

export interface Customer {
    

    /**
     * Customer address maxLength = 255
     */
    address1?: string;

    /**
     * Customer address maxLength = 255
     */
    address2?: string;

    /**
     * List of allowed contact methods for customer
     */
    allowedContactMethods?: Array<models.ContactMethod>;

    /**
     * Alternate DMS customer ID maxLength = 128
     */
    altExtId?: string;

    /**
     * Cellphone number maxLength = 32
     */
    cellPhone?: string;

    /**
     * Customer city maxLength = 128
     */
    city?: string;

    /**
     * List of comments related to customer or customer's vehicles
     */
    comments?: Array<models.Comment>;

    /**
     * Country of customer maxLength = 128
     */
    country?: string;

    /**
     * Xtime dealer ID maxLength = 128
     */
    dealerCode?: string;

    /**
     * Xtime internal dealership identifier maxLength = 64
     */
    dealerId?: number;

    /**
     * Customer email address maxLength = 128
     */
    email?: string;

    /**
     * DMS customer ID maxLength = 128
     */
    extId?: string;

    /**
     * Customer first name maxLength = 255
     */
    firstName?: string;

    /**
     * Full name of customer maxLength = 512
     */
    fullName?: string;

    /**
     * Home phone number maxLength = 32
     */
    homePhone?: string;

    /**
     * Customer last name maxLength = 255
     */
    lastName?: string;

    /**
     * Xtime identifier for state of customer (i.e. active/disabled) maxLength = 128
     */
    lifeCycle?: string;

    /**
     * Customer middle name maxLength = 255
     */
    middleName?: string;

    organization?: boolean;

    /**
     * Other name for customer maxLength = 255
     */
    otherName?: string;

    /**
     * Xtime customer ID maxLength = 64
     */
    personId?: number;

    /**
     * First available phone number of customer maxLength = 32
     */
    phone?: string;

    /**
     * Customer address zip/postal code maxLength = 32
     */
    postalCode?: string;

    /**
     * Customer's preferred method of being contacted
     */
    preferredContactMethod?: models.ContactMethod;

    /**
     * Customer's preferred language maxLength = 128
     */
    preferredLanguage?: string;

    /**
     * Authorization Id of record that last updated privacy flags maxLength = 64
     */
    privacyAuthId?: number;

    /**
     * Customer privacy flags maxLength = 512
     */
    privacyFlags?: string;

    /**
     * Xtime internal schema identifier maxLength = 128
     */
    schemaName?: string;

    /**
     * State/state code of customer maxLength = 128
     */
    state?: string;

    /**
     * List of vehicles owned by customer
     */
    vehicles?: Array<models.Vehicle>;

    /**
     * Work phone number maxLength = 32
     */
    workPhone?: string;
}
