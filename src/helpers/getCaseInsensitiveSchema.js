export default function getCaseInsensitiveSchema(schema){
  const caseInsensitiveSchema = {}
  for (const [key, value] of Object.entries(schema)) {
    caseInsensitiveSchema[key.toLowerCase()] = {name: key, value}
  }
  return caseInsensitiveSchema
}
