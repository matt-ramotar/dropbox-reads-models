export interface Schema {
  [key: string]: Models
}

export interface Models {
  [key: string]: Model
}

export interface Model {
  properties?: Properties
  enum?: any[]
  required?: string[]
  type?: string
  additionalProperties?: boolean
  anyOf?: any[]
  description?: string
}

export interface Properties {
  [key: string]: Property
}

export interface Property {
  type: string;
  $ref?: string;
  items?: Item[]
}

export interface Item {
  type: string
}
