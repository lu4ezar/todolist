/* eslint-disable no-use-before-define */
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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
|};

/** Todo type */
export type Todo = {|
  __typename?: "Todo",
  id: $ElementType<Scalars, "ID">,
  title: $ElementType<Scalars, "String">,
  description: $ElementType<Scalars, "String">,
  priority?: ?TodoPriority,
  status?: ?TodoStatus,
  created?: ?$ElementType<Scalars, "DateTime">,
|};

export type CreateTodoInput = {|
  title: $ElementType<Scalars, "String">,
  description?: ?$ElementType<Scalars, "String">,
  priority?: ?TodoPriority,
  status?: ?TodoStatus,
|};

export type UpdateTodoInput = {|
  title?: ?$ElementType<Scalars, "String">,
  description?: ?$ElementType<Scalars, "String">,
  priority?: ?TodoPriority,
  status?: ?TodoStatus,
|};

export type Query = {|
  __typename?: "Query",
  todo?: ?Todo,
  todos?: ?Array<?Todo>,
|};

export type QueryTodoArgs = {|
  id: $ElementType<Scalars, "ID">,
|};

export type Mutation = {|
  __typename?: "Mutation",
  createTodo: Todo,
  updateTodo: Todo,
  deleteTodo: Todo,
|};

export type MutationCreateTodoArgs = {|
  input: CreateTodoInput,
|};

export type MutationUpdateTodoArgs = {|
  id: $ElementType<Scalars, "ID">,
  input: UpdateTodoInput,
|};

export type MutationDeleteTodoArgs = {|
  id: $ElementType<Scalars, "ID">,
|};

export const TodoPriorityValues = Object.freeze({
  Low: "LOW",
  Normal: "NORMAL",
  High: "HIGH",
});

export type TodoPriority = $Values<typeof TodoPriorityValues>;

export const TodoStatusValues = Object.freeze({
  Active: "ACTIVE",
  Completed: "COMPLETED",
  Expired: "EXPIRED",
});

export type TodoStatus = $Values<typeof TodoStatusValues>;

export const CacheControlScopeValues = Object.freeze({
  Public: "PUBLIC",
  Private: "PRIVATE",
});

export type CacheControlScope = $Values<typeof CacheControlScopeValues>;

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
  DateTime: ResolverTypeWrapper<$ElementType<Scalars, "DateTime">>,
  Todo: ResolverTypeWrapper<Todo>,
  ID: ResolverTypeWrapper<$ElementType<Scalars, "ID">>,
  String: ResolverTypeWrapper<$ElementType<Scalars, "String">>,
  CreateTodoInput: CreateTodoInput,
  UpdateTodoInput: UpdateTodoInput,
  Query: ResolverTypeWrapper<{}>,
  Mutation: ResolverTypeWrapper<{}>,
  TodoPriority: TodoPriority,
  TodoStatus: TodoStatus,
  CacheControlScope: CacheControlScope,
  Upload: ResolverTypeWrapper<$ElementType<Scalars, "Upload">>,
  Boolean: ResolverTypeWrapper<$ElementType<Scalars, "Boolean">>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: $ElementType<Scalars, "DateTime">,
  Todo: Todo,
  ID: $ElementType<Scalars, "ID">,
  String: $ElementType<Scalars, "String">,
  CreateTodoInput: CreateTodoInput,
  UpdateTodoInput: UpdateTodoInput,
  Query: {},
  Mutation: {},
  Upload: $ElementType<Scalars, "Upload">,
  Boolean: $ElementType<Scalars, "Boolean">,
};

export type DateTimeScalarConfig = {
  // $FlowFixMe
  ...GraphQLScalarTypeConfig<$ElementType<ResolversTypes, "DateTime">, any>,
  name: "DateTime",
};

export type TodoResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, "Todo">
> = {
  id?: Resolver<$ElementType<ResolversTypes, "ID">, ParentType, ContextType>,
  title?: Resolver<
    $ElementType<ResolversTypes, "String">,
    ParentType,
    ContextType
  >,
  description?: Resolver<
    $ElementType<ResolversTypes, "String">,
    ParentType,
    ContextType
  >,
  priority?: Resolver<
    ?$ElementType<ResolversTypes, "TodoPriority">,
    ParentType,
    ContextType
  >,
  status?: Resolver<
    ?$ElementType<ResolversTypes, "TodoStatus">,
    ParentType,
    ContextType
  >,
  created?: Resolver<
    ?$ElementType<ResolversTypes, "DateTime">,
    ParentType,
    ContextType
  >,
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>,
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
    ?Array<?$ElementType<ResolversTypes, "Todo">>,
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
    $RequireFields<MutationUpdateTodoArgs, { id: *, input: * }>
  >,
  deleteTodo?: Resolver<
    $ElementType<ResolversTypes, "Todo">,
    ParentType,
    ContextType,
    $RequireFields<MutationDeleteTodoArgs, { id: * }>
  >,
};

export type UploadScalarConfig = {
  ...GraphQLScalarTypeConfig<$ElementType<ResolversTypes, "Upload">, any>,
  name: "Upload",
};

export type Resolvers<ContextType = any> = {
  // $FlowFixMe
  DateTime?: GraphQLScalarType<>,
  Todo?: TodoResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Upload?: GraphQLScalarType<>,
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

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  ...{ __typename?: "Mutation" },
  ...{|
    createTodo: {
      ...{ __typename?: "Todo" },
      ...$Pick<Todo, {| id: *, title: * |}>,
    },
  |},
};

export type UpdateTodoMutationVariables = {
  id: $ElementType<Scalars, "ID">,
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  ...{ __typename?: "Mutation" },
  ...{|
    updateTodo: {
      ...{ __typename?: "Todo" },
      ...$Pick<Todo, {| title: * |}>,
    },
  |},
};

export type DeleteTodoMutationVariables = {
  id: $ElementType<Scalars, "ID">,
};

export type DeleteTodoMutation = {
  ...{ __typename?: "Mutation" },
  ...{|
    deleteTodo: {
      ...{ __typename?: "Todo" },
      ...$Pick<Todo, {| title: * |}>,
    },
  |},
};

export type GetTodosQueryVariables = {};

export type GetTodosQuery = {
  ...{ __typename?: "Query" },
  ...{|
    todos?: ?Array<?{
      ...{ __typename?: "Todo" },
      ...$Pick<Todo, {| id: *, title: * |}>,
    }>,
  |},
};
