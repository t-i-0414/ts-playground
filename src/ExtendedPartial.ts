type PickOptional<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};

type ExtendedPartial<T> = T | PickOptional<T>;

type Fuga = ExtendedPartial<{
  a: number;
  b?: string;
}>;

const fuga: Fuga = { a: 1 };
const fuga2: Fuga = { a: 1, b: "b" };
const fuga3: Fuga = { b: "b" };
const fuga4: Fuga = {};

// @ts-expect-error Type 'undefined' is not assignable to type 'number'.
const fuga5: Fuga = { a: undefined };
