import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";
// import { Todos } from "./models/Todos";
// import { VisibilityFilter, VisibilityFilters } from "./models/VisibilityFilter";

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read () {
            return todosVar();
          }
        },
        visibilityFilter: {
          read () {
            return visibilityFilterVar();
          },
        }
      }
    }
  }
});

export const todosVar: ReactiveVar<Todos> = makeVar<Todos>(
  todosInitialValue
);

export const visibilityFilterVar = makeVar<VisibilityFilter>(
  VisibilityFilters.SHOW_ALL
)
