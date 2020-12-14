// @flow

import { type GraphQLResolveInfo } from "graphql";

export type $RequireFields<Origin, Keys> = $Diff<Origin, Keys> &
  $ObjMapi<Keys, <Key>(k: Key) => $NonMaybeType<$ElementType<Origin, Key>>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {|
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** Date/Time type */
  DateTime: any,
|};

export type AdditionalEntityFields = {|
  path?: ?$ElementType<Scalars, "String">,
  type?: ?$ElementType<Scalars, "String">,
|};

export type Query = {|
  __typename?: "Query",
  todo?: ?Todo,
  todos: Array<Todo>,
  checklist?: ?Checklist,
  checklists: Array<Checklist>,
|};

export type QueryTodoArgs = {|
  id: $ElementType<Scalars, "ID">,
|};

export type QueryTodosArgs = {|
  checklist?: ?$ElementType<Scalars, "ID">,
|};

export type QueryChecklistArgs = {|
  id: $ElementType<Scalars, "ID">,
|};

export type Mutation = {|
  __typename?: "Mutation",
  createTodo: Todo,
  updateTodo: Todo,
  toggleTodo: Todo,
  deleteTodo: Todo,
  reorderTodos: Todo,
  createChecklist: Checklist,
  updateChecklist: Checklist,
  deleteChecklist: Checklist,
  reorderChecklists: Checklist,
|};

export type MutationCreateTodoArgs = {|
  input: CreateTodoInput,
|};

export type MutationUpdateTodoArgs = {|
  input: UpdateTodoInput,
|};

export type MutationToggleTodoArgs = {|
  id: $ElementType<Scalars, "ID">,
|};

export type MutationDeleteTodoArgs = {|
  id: $ElementType<Scalars, "ID">,
|};

export type MutationReorderTodosArgs = {|
  id: $ElementType<Scalars, "ID">,
  order: $ElementType<Scalars, "Int">,
|};

export type MutationCreateChecklistArgs = {|
  input: CreateChecklistInput,
|};

export type MutationUpdateChecklistArgs = {|
  input: UpdateChecklistInput,
|};

export type MutationDeleteChecklistArgs = {|
  id: $ElementType<Scalars, "ID">,
|};

export type MutationReorderChecklistsArgs = {|
  id: $ElementType<Scalars, "ID">,
  order: $ElementType<Scalars, "Int">,
|};

export const PriorityValues = Object.freeze({
  Low: "LOW",
  Normal: "NORMAL",
  High: "HIGH",
});

export type Priority = $Values<typeof PriorityValues>;

/** Todo type */
export type Todo = {|
  __typename?: "Todo",
  id: $ElementType<Scalars, "ID">,
  order: $ElementType<Scalars, "Int">,
  title: $ElementType<Scalars, "String">,
  description?: ?$ElementType<Scalars, "String">,
  priority: Priority,
  completed: $ElementType<Scalars, "Boolean">,
  created: $ElementType<Scalars, "DateTime">,
  expires?: ?$ElementType<Scalars, "DateTime">,
  checklist?: ?$ElementType<Scalars, "ID">,
|};

export type CreateTodoInput = {|
  title: $ElementType<Scalars, "String">,
  description?: ?$ElementType<Scalars, "String">,
  priority?: ?Priority,
  completed?: ?$ElementType<Scalars, "Boolean">,
  checklist?: ?$ElementType<Scalars, "ID">,
|};

export type UpdateTodoInput = {|
  id: $ElementType<Scalars, "ID">,
  title?: ?$ElementType<Scalars, "String">,
  description?: ?$ElementType<Scalars, "String">,
  priority?: ?Priority,
  completed?: ?$ElementType<Scalars, "Boolean">,
  expires?: ?$ElementType<Scalars, "DateTime">,
  checklist?: ?$ElementType<Scalars, "ID">,
|};

export type ReorderTodoInput = {|
  id: $ElementType<Scalars, "ID">,
  order: $ElementType<Scalars, "Int">,
|};

/** Checklist Type */
export type Checklist = {|
  __typename?: "Checklist",
  id: $ElementType<Scalars, "ID">,
  order: $ElementType<Scalars, "Int">,
  title: $ElementType<Scalars, "String">,
  description?: ?$ElementType<Scalars, "String">,
  priority: Priority,
  completed: $ElementType<Scalars, "Boolean">,
  created: $ElementType<Scalars, "DateTime">,
  expires: $ElementType<Scalars, "DateTime">,
  todos: Array<Todo>,
|};

export type CreateChecklistInput = {|
  title: $ElementType<Scalars, "String">,
  description?: ?$ElementType<Scalars, "String">,
  priority?: ?Priority,
  completed?: ?$ElementType<Scalars, "Boolean">,
|};

export type UpdateChecklistInput = {|
  id: $ElementType<Scalars, "ID">,
  title?: ?$ElementType<Scalars, "String">,
  description?: ?$ElementType<Scalars, "String">,
  priority?: ?Priority,
  completed?: ?$ElementType<Scalars, "Boolean">,
  expires: $ElementType<Scalars, "DateTime">,
|};

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export type SubscriptionSubscribeFn<Result, Parent, Context, Args> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => AsyncIterator<Result> | Promise<AsyncIterator<Result>>;

export type SubscriptionResolveFn<Result, Parent, Context, Args> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Result | Promise<Result>;

export interface SubscriptionSubscriberObject<
  Result,
  Key: string,
  Parent,
  Context,
  Args
> {
  subscribe: SubscriptionSubscribeFn<
    { [key: Key]: Result },
    Parent,
    Context,
    Args
  >;
  resolve?: SubscriptionResolveFn<
    Result,
    { [key: Key]: Result },
    Context,
    Args
  >;
}

export interface SubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe: SubscriptionSubscribeFn<mixed, Parent, Context, Args>;
  resolve: SubscriptionResolveFn<Result, mixed, Context, Args>;
}

export type SubscriptionObject<Result, Key: string, Parent, Context, Args> =
  | SubscriptionSubscriberObject<Result, Key, Parent, Context, Args>
  | SubscriptionResolverObject<Result, Parent, Context, Args>;

export type SubscriptionResolver<
  Result,
  Key: string,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: Array<any>
    ) => SubscriptionObject<Result, Key, Parent, Context, Args>)
  | SubscriptionObject<Result, Key, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => ?Types | Promise<?Types>;

export type IsTypeOfResolverFn<T = {}, Context = {}> = (
  obj: T,
  context: Context,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  Result = {},
  Parent = {},
  Args = {},
  Context = {}
> = (
  next: NextResolverFn<Result>,
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Result | Promise<Result>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AdditionalEntityFields: AdditionalEntityFields,
  String: ResolverTypeWrapper<$ElementType<Scalars, "String">>,
  DateTime: ResolverTypeWrapper<$ElementType<Scalars, "DateTime">>,
  Query: ResolverTypeWrapper<{}>,
  ID: ResolverTypeWrapper<$ElementType<Scalars, "ID">>,
  Mutation: ResolverTypeWrapper<{}>,
  Int: ResolverTypeWrapper<$ElementType<Scalars, "Int">>,
  Priority: Priority,
  Todo: ResolverTypeWrapper<Todo>,
  Boolean: ResolverTypeWrapper<$ElementType<Scalars, "Boolean">>,
  CreateTodoInput: CreateTodoInput,
  UpdateTodoInput: UpdateTodoInput,
  ReorderTodoInput: ReorderTodoInput,
  Checklist: ResolverTypeWrapper<Checklist>,
  CreateChecklistInput: CreateChecklistInput,
  UpdateChecklistInput: UpdateChecklistInput,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AdditionalEntityFields: AdditionalEntityFields,
  String: $ElementType<Scalars, "String">,
  DateTime: $ElementType<Scalars, "DateTime">,
  Query: {},
  ID: $ElementType<Scalars, "ID">,
  Mutation: {},
  Int: $ElementType<Scalars, "Int">,
  Todo: Todo,
  Boolean: $ElementType<Scalars, "Boolean">,
  CreateTodoInput: CreateTodoInput,
  UpdateTodoInput: UpdateTodoInput,
  ReorderTodoInput: ReorderTodoInput,
  Checklist: Checklist,
  CreateChecklistInput: CreateChecklistInput,
  UpdateChecklistInput: UpdateChecklistInput,
};

export type DateTimeScalarConfig = {
  ...GraphQLScalarTypeConfig<$ElementType<ResolversTypes, "DateTime">, any>,
  name: "DateTime",
};

export type QueryResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, "Query">
> = {
  todo?: Resolver<
    ?$ElementType<ResolversTypes, "Todo">,
    ParentType,
    ContextType,
    $RequireFields<QueryTodoArgs, { id: * }>
  >,
  todos?: Resolver<
    Array<$ElementType<ResolversTypes, "Todo">>,
    ParentType,
    ContextType,
    QueryTodosArgs
  >,
  checklist?: Resolver<
    ?$ElementType<ResolversTypes, "Checklist">,
    ParentType,
    ContextType,
    $RequireFields<QueryChecklistArgs, { id: * }>
  >,
  checklists?: Resolver<
    Array<$ElementType<ResolversTypes, "Checklist">>,
    ParentType,
    ContextType
  >,
};

export type MutationResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, "Mutation">
> = {
  createTodo?: Resolver<
    $ElementType<ResolversTypes, "Todo">,
    ParentType,
    ContextType,
    $RequireFields<MutationCreateTodoArgs, { input: * }>
  >,
  updateTodo?: Resolver<
    $ElementType<ResolversTypes, "Todo">,
    ParentType,
    ContextType,
    $RequireFields<MutationUpdateTodoArgs, { input: * }>
  >,
  toggleTodo?: Resolver<
    $ElementType<ResolversTypes, "Todo">,
    ParentType,
    ContextType,
    $RequireFields<MutationToggleTodoArgs, { id: * }>
  >,
  deleteTodo?: Resolver<
    $ElementType<ResolversTypes, "Todo">,
    ParentType,
    ContextType,
    $RequireFields<MutationDeleteTodoArgs, { id: * }>
  >,
  reorderTodos?: Resolver<
    $ElementType<ResolversTypes, "Todo">,
    ParentType,
    ContextType,
    $RequireFields<MutationReorderTodosArgs, { id: *, order: * }>
  >,
  createChecklist?: Resolver<
    $ElementType<ResolversTypes, "Checklist">,
    ParentType,
    ContextType,
    $RequireFields<MutationCreateChecklistArgs, { input: * }>
  >,
  updateChecklist?: Resolver<
    $ElementType<ResolversTypes, "Checklist">,
    ParentType,
    ContextType,
    $RequireFields<MutationUpdateChecklistArgs, { input: * }>
  >,
  deleteChecklist?: Resolver<
    $ElementType<ResolversTypes, "Checklist">,
    ParentType,
    ContextType,
    $RequireFields<MutationDeleteChecklistArgs, { id: * }>
  >,
  reorderChecklists?: Resolver<
    $ElementType<ResolversTypes, "Checklist">,
    ParentType,
    ContextType,
    $RequireFields<MutationReorderChecklistsArgs, { id: *, order: * }>
  >,
};

export type TodoResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, "Todo">
> = {
  id?: Resolver<$ElementType<ResolversTypes, "ID">, ParentType, ContextType>,
  order?: Resolver<
    $ElementType<ResolversTypes, "Int">,
    ParentType,
    ContextType
  >,
  title?: Resolver<
    $ElementType<ResolversTypes, "String">,
    ParentType,
    ContextType
  >,
  description?: Resolver<
    ?$ElementType<ResolversTypes, "String">,
    ParentType,
    ContextType
  >,
  priority?: Resolver<
    $ElementType<ResolversTypes, "Priority">,
    ParentType,
    ContextType
  >,
  completed?: Resolver<
    $ElementType<ResolversTypes, "Boolean">,
    ParentType,
    ContextType
  >,
  created?: Resolver<
    $ElementType<ResolversTypes, "DateTime">,
    ParentType,
    ContextType
  >,
  expires?: Resolver<
    ?$ElementType<ResolversTypes, "DateTime">,
    ParentType,
    ContextType
  >,
  checklist?: Resolver<
    ?$ElementType<ResolversTypes, "ID">,
    ParentType,
    ContextType
  >,
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>,
};

export type ChecklistResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, "Checklist">
> = {
  id?: Resolver<$ElementType<ResolversTypes, "ID">, ParentType, ContextType>,
  order?: Resolver<
    $ElementType<ResolversTypes, "Int">,
    ParentType,
    ContextType
  >,
  title?: Resolver<
    $ElementType<ResolversTypes, "String">,
    ParentType,
    ContextType
  >,
  description?: Resolver<
    ?$ElementType<ResolversTypes, "String">,
    ParentType,
    ContextType
  >,
  priority?: Resolver<
    $ElementType<ResolversTypes, "Priority">,
    ParentType,
    ContextType
  >,
  completed?: Resolver<
    $ElementType<ResolversTypes, "Boolean">,
    ParentType,
    ContextType
  >,
  created?: Resolver<
    $ElementType<ResolversTypes, "DateTime">,
    ParentType,
    ContextType
  >,
  expires?: Resolver<
    $ElementType<ResolversTypes, "DateTime">,
    ParentType,
    ContextType
  >,
  todos?: Resolver<
    Array<$ElementType<ResolversTypes, "Todo">>,
    ParentType,
    ContextType
  >,
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType<>,
  Query?: QueryResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Todo?: TodoResolvers<ContextType>,
  Checklist?: ChecklistResolvers<ContextType>,
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

type $Pick<Origin: Object, Keys: Object> = $ObjMapi<
  Keys,
  <Key>(k: Key) => $ElementType<Origin, Key>
>;
