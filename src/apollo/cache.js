import { InMemoryCache, makeVar } from "@apollo/client";
import type { Filter } from "../types/filter";
import type { Mode } from "../types/mode";
import { PriorityValues } from "../generated/graphql";

export const initialValue: Filter = {
  master: {
    status: false,
  },
  priority: {
    status: false,
    value: [PriorityValues.Normal],
  },
  completed: {
    status: false,
    value: false,
  },
  expired: { status: false, value: false },
};

export const filterVar: Filter = makeVar(initialValue);
export const modeVar: Mode = makeVar("list");

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        filter: {
          read() {
            return filterVar();
          },
        },
        mode: {
          read() {
            return modeVar();
          },
        },
      },
    },
  },
});
