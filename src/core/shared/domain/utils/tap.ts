/**
 * Runs the given function with the supplied object, then returns the object.
 */
export const tap = <T>(fn: (value: T) => any) => (value: T) => {
  fn(value);
  return value;
}