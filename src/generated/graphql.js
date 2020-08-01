/* eslint-disable no-use-before-define */
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
  id?: ?$ElementType<Scalars, "ID">,
  title: $ElementType<Scalars, "String">,
  description: $ElementType<Scalars, "String">,
  priority?: ?TodoPriority,
  status?: ?TodoStatus,
  created?: ?$ElementType<Scalars, "DateTime">,
|};

export type TodoInput = {|
  title: $ElementType<Scalars, "String">,
  description: $ElementType<Scalars, "String">,
  priority: TodoPriority,
  status: TodoStatus,
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
  input: TodoInput,
|};

export type MutationUpdateTodoArgs = {|
  id: $ElementType<Scalars, "ID">,
  input: TodoInput,
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

type $Pick<Origin: Object, Keys: Object> = $ObjMapi<
  Keys,
  <Key>(k: Key) => $ElementType<Origin, Key>
>;

export type GetTodosQueryVariables = {};

export type GetTodosQuery = {
  ...{ __typename?: "Query" },
  ...{|
    todos?: ?Array<?{
      ...{ __typename?: "Todo" },
      ...$Pick<Todo, {| id?: *, title: * |}>,
    }>,
  |},
};
