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

export interface Comment {
    

    /**
     * person/record who created this comment maxLength = 255
     */
    commentAuthor?: string;

    /**
     * Date of comment in milliseconds
     */
    commentDate?: models.Timestamp;

    /**
     * Description of comment maxLength = 4000
     */
    commentText?: string;

    /**
     * Type of comment
     */
    commentType?: Comment.CommentTypeEnum;

    /**
     * ID refrencing where comment came from maxLength = 255
     */
    refId?: string;

    /**
     * VIN which comment relates to maxLength = 17
     */
    vin?: string;
}
export namespace Comment {

    export enum CommentTypeEnum { 
        CUSTOMER = <any> 'CUSTOMER',
        VEHICLE = <any> 'VEHICLE',
    }
}
