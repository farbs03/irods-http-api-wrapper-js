/* Create */
import type { IrodsResponse, ModifyPermissionsOperation, Permission, AVUOperation } from "./general_types.js"

export type CollectionCreateParams = {
    lpath: string
    'create-intermediates'?: 0 | 1
}

export type CollectionCreateResponse = {
    irods_response: IrodsResponse
    created?: boolean
}

/* Remove */

export type CollectionRemoveParams = {
    lpath: string
    recurse?: 0 | 1
    'no-trash'?: 0 | 1
}

export type CollectionRemoveResponse = {
    irods_response: IrodsResponse
}

/* Stat */

// GET request
export type CollectionStatParams = {
    lpath: string
    ticket?: string
}

export type CollectionStatResponse = {
    irods_response: IrodsResponse
    type: string
    inheritance_enabled: boolean
    permissions: [Permission]
    registered: boolean
    modified_at: number
}

/* List */

// GET request
export type CollectionListParams = {
    lpath: string
    recurse?: 0 | 1
    ticket?: string
}

export type CollectionListResponse = {
    irods_response: IrodsResponse
    entries: [string]
}

/* Set Permission */

export type CollectionSetPermissionParams = {
    lpath: string
    'entity-name': string
    permission: 'null' | 'read' | 'write' | 'own'
    admin?: 0 | 1
}

export type CollectionSetPermissionResponse = {
    irods_response: IrodsResponse
}

/* Set Inheritance */

export type CollectionSetInheritanceParams = {
    lpath: string
    enable: 0 | 1
    admin?: 0 | 1
}

export type CollectionSetInheritanceResponse = {
    irods_response: IrodsResponse
}

/* Modify Permissions */

export type CollectionModifyPermissionsParams = {
    lpath: string
    operations: [ModifyPermissionsOperation]
    admin?: 0 | 1
}

export type CollectionModifyPermissionsResponse = {
    irods_response: IrodsResponse
}

/* Modify Metadata */

export type CollectionModifyMetadataParams = {
    lpath: string
    operations: [AVUOperation]
    admin?: 0 | 1
}

export type CollectionModifyMetadataResponse = {
    irods_response: IrodsResponse
}

/* Rename */

export type CollectionRenameParams = {
    'old-lpath': string
    'new-lpath': string
}

export type CollectionRenameResponse = {
    irods_response: IrodsResponse
}

/* Touch */

export type CollectionTouchParams = {
    lpath: string
    'seconds-since-epoch'?: number
    reference?: string
}

export type CollectionTouchResponse = {
    irods_response: IrodsResponse
}
