// import { ReactiveVar } from "@apollo/client";

export default function createMockReactiveVar<T>(defaultValue?: T): any {
  let currentValue: T | undefined = defaultValue;

  return function mockReactiveVar(newValue?: T): T {
    if (newValue) {
      currentValue = newValue;
    }
    return (currentValue: T);
  };
}
