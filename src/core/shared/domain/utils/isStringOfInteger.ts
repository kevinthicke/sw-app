export const isStringOfInteger = (value: string) => {
  return /^\d+$/.test(value);
}