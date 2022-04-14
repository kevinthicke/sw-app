type UnitaryFn<T, K> = (value: T) => K;

export function compose<T1 = any, T2 = any, T3 = any>(
  fn1: UnitaryFn<T1, T2>,
  fn2: UnitaryFn<T2, T3>
): (value: T1) => T3;

export function compose<T1 = any, T2 = any, T3 = any, T4 = any>(
  fn1: UnitaryFn<T1, T2>,
  fn2: UnitaryFn<T2, T3>,
  fn3: UnitaryFn<T3, T4>
): (value: T1) => T4;


export function compose<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any>(
  fn1: UnitaryFn<T1, T2>,
  fn2: UnitaryFn<T2, T3>,
  fn3: UnitaryFn<T3, T4>,
  fn4: UnitaryFn<T4, T5>
): (value: T1) => T5;

export function compose<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any>(
  fn1: UnitaryFn<T1, T2>,
  fn2: UnitaryFn<T2, T3>,
  fn3: UnitaryFn<T3, T4>,
  fn4: UnitaryFn<T4, T5>,
  fn5: UnitaryFn<T5, T6>
): (value: T1) => T5;

export function compose<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any>(
  fn1: UnitaryFn<T1, T2>,
  fn2: UnitaryFn<T2, T3>,
  fn3: UnitaryFn<T3, T4>,
  fn4: UnitaryFn<T4, T5>,
  fn5: UnitaryFn<T5, T6>,
  fn6: UnitaryFn<T6, T7>
): (value: T1) => T7;

export function compose<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any>(
  fn1: UnitaryFn<T1, T2>,
  fn2: UnitaryFn<T2, T3>,
  fn3: UnitaryFn<T3, T4>,
  fn4: UnitaryFn<T4, T5>,
  fn5: UnitaryFn<T5, T6>,
  fn6: UnitaryFn<T6, T7>,
  fn7: UnitaryFn<T7, T8>
): (value: T1) => T8;


export function compose(...fns: any[]) {
  return function (value: any) {
    return fns.reduce((v, f) => f(v), value);
  }
};
