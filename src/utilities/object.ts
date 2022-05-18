interface LooseTypeObject<T> {
  [key: string]: T
}

export const isEmpty = (obj: LooseTypeObject<any> | undefined | null) => {
  return !obj || Object.keys(obj).length == 0
}
