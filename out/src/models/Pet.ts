/* tslint:disable */
/* eslint-disable */
/**
 * Swagger Petstore
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Pet
 */
export interface Pet {
    /**
     * 
     * @type {number}
     * @memberof Pet
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Pet
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Pet
     */
    tag?: string;
}

export function PetFromJSON(json: any): Pet {
    return PetFromJSONTyped(json, false);
}

export function PetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
    };
}

export function PetToJSON(value?: Pet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'tag': value.tag,
    };
}
