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

export interface Job {
    

    /**
     * Actual hours to complete the job maxLength = 64
     */
    actualHours?: number;

    /**
     * Cause for the job maxLength = 1024
     */
    cause?: string;

    /**
     * Complaint information maxLength = 1024
     */
    complaint?: string;

    /**
     * Correction for the job maxLength = 1024
     */
    correction?: string;

    /**
     * DispatchCode information maxLength = 128
     */
    dispatchCode?: string;

    /**
     * Duration to complete the job maxLength = 64
     */
    duration?: number;

    /**
     * Estimated hours for the job maxLength = 64
     */
    estimatedHours?: number;

    /**
     * Estimated price for the job maxLength = 64
     */
    estimatedPrice?: number;

    /**
     * Labor cost associated with job maxLength = 64
     */
    laborCost?: number;

    /**
     * Labor sale associated with job maxLength = 64
     */
    laborSale?: number;

    /**
     * Job labortype maxLength = 128
     */
    laborType?: string;

    menuType?: string;

    /**
     * Miscellaneous cost associated with job maxLength = 64
     */
    miscCost?: number;

    /**
     * Miscellaneous sale associated with job maxLength = 64
     */
    miscSale?: number;

    /**
     * Job operational code maxLength = 128
     */
    opCode?: string;

    /**
     * Op cost associated with job maxLength = 64
     */
    opCost?: number;

    /**
     * Job description maxLength = 1028
     */
    opDescription?: string;

    /**
     * Job priority maxLength = 128
     */
    opPriority?: string;

    /**
     * Op sale associated with job maxLength = 64
     */
    opSale?: number;

    /**
     * Parent ext id maxLength = 128
     */
    parentExtId?: string;

    /**
     * Parts cost associated with job maxLength = 64
     */
    partsCost?: number;

    /**
     * Parts sale associated with job maxLength = 64
     */
    partsSale?: number;

    /**
     * Recomended mileage information maxLength = 64
     */
    recommendedMileage?: number;

    /**
     * Job sequence number maxLength = 128
     */
    sequenceNumber?: string;

    /**
     * Job service kind
     */
    serviceKind?: Job.ServiceKindEnum;

    /**
     * Sold hours to complete the job maxLength = 64
     */
    soldHours?: number;

    /**
     * Technician information maxLength = 255
     */
    technicianId?: string;
}
export namespace Job {

    export enum ServiceKindEnum { 
        MAINTENANCE = <any> 'MAINTENANCE',
        REPAIR = <any> 'REPAIR',
        RECALL = <any> 'RECALL',
        AUTORECALL = <any> 'AUTORECALL',
    }
}