interface Field {
  name: string
  type: string
}

export function convertJsonToInterface(json: object, typeName: string, parentTypeName = ''): string {
  let fields: Field[] = []

  // For each key in the JSON object, create a field with the key name and type
  // eslint-disable-next-line no-restricted-syntax
  for (let property in json) {
    // eslint-disable-next-line no-prototype-builtins
    if (json.hasOwnProperty(property)) {
      // @ts-ignore
      let value = json[property]
      let type = typeof value
      if (type === 'object') {
        if (Array.isArray(value)) {
          // If the value is an array, create an array type
          let elementType = typeof value[0]
          fields.push({ name: property, type: `${elementType}[]` })
        } else {
          // If the value is an object, create an interface
          let childTypeName = parentTypeName ? `${parentTypeName}_${property}` : property
          let childInterface = convertJsonToInterface(value, typeName, childTypeName)
          fields.push({ name: property, type: childTypeName })
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          fields.push(...parseFields(childInterface))
        }
      } else {
        // If the value is a primitive, create a field with the key name and type
        fields.push({ name: property, type })
      }
    }
  }

  // Create the interface string
  let interfaceFields = fields
    .map(field => `${field.name}: ${field.type};`)
    .join('\n  ')
  let result = `interface ${parentTypeName ? `${parentTypeName}_` : ''}${typeName} {\n  ${interfaceFields}\n}\n\n`

  return result
}

function parseFields(interfaceString: string): Field[] {
  // eslint-disable-next-line no-useless-escape
  let re = /([\w]+): ([\w\[\]]+);/g
  let match
  let fields: Field[] = []
  // eslint-disable-next-line no-cond-assign
  while ((match = re.exec(interfaceString))) {
    fields.push({ name: match[1], type: match[2] })
  }
  return fields
}