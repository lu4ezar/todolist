import { InMemoryCache, makeVar } from "@apollo/client";
import { initialState } from "../redux/reducers/filter";
import type { Filter } from "../types/filter";
import type { Mode } from "../types/mode";

const filterVar: Filter = makeVar(initialState);
const modeVar: Mode = makeVar("list");

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
