export function removeEmptyKeys<T>(obj: T): T {
  const newObj = {} as T

  for (const key in obj) {
    if (['page', 'pageSize'].includes(key)) {
      continue
    }
    if (
      obj[key] !== null &&
      typeof obj[key] === 'object' &&
      Object.keys(obj[key] as object).length > 0
    ) {
      newObj[key] = removeEmptyKeys(obj[key])
    } else if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
      newObj[key] = obj[key]
    }
  }

  return newObj
}
