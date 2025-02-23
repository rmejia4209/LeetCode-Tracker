

export function capitalize(arg: string): string {
  return arg.slice(0,1).toUpperCase() + arg.slice(1);
}

export function sortByProp<T, K extends keyof T, N extends keyof T>(
  arr: string[], prop: K, defaultProp?: N
) {
  return (a: T, b: T) => {
    const aVal = a[prop];
    const bVal = b[prop];
    if (arr.length && typeof aVal === 'string' && typeof bVal === 'string') {
      const orderDiff = arr.indexOf(aVal) - arr.indexOf(bVal);
      if (
        defaultProp
        && typeof a[defaultProp] === 'number'
        && typeof b[defaultProp] === 'number'
      ) {
        return (
          orderDiff !== 0
          ? orderDiff
          : (a[defaultProp] as number) - (b[defaultProp] as number)
        )
      }
      return orderDiff; 
    }
    else if (typeof aVal === 'number' && typeof bVal === 'number') {
      return (a[prop] as number) - (b[prop] as number)
    }
    throw new Error(`Unsupported property type for sorting: ${typeof aVal}`)
  }
}


