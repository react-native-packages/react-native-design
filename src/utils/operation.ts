function mergeObjects(...data: Array<any>) {
  return Object.assign({}, ...data);
}

function isEmpty(str: any): boolean {
  return !str || /^\s*$/.test(str);
}

function isNotEmpty(str: any): boolean {
  return !isEmpty(str);
}

export { mergeObjects, isEmpty, isNotEmpty };
