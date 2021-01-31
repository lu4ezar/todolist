// @flow
import type { Checklist, Todo } from "../generated/graphql";

// export type EntityType = "Todo" | "Checklist";

// export type EntityType = Checklist["__typename"] | Todo["__typename"];
export type EntityType = Checklist.__typename | Todo.__typename;

export type Entity = Checklist | Todo;

// export type Entities = $Values<Entity>;
