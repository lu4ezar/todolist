// @flow

import { type GraphQLResolveInfo } from 'graphql';
export type $RequireFields<Origin, Keys> = $Diff<Origin, Keys> & $ObjMapi<Keys, <Key>(k: Key) => $NonMaybeType<$ElementType<Origin, Key>>>;
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
  path?: ?$ElementType<Scalars, 'String'>,
  type?: ?$ElementType<Scalars, 'String'>,
|};

export type AuthPayload = {|
  __typename?: 'AuthPayload',
  token: $ElementType<Scalars, 'String'>,
|};

/** Checklist Type */
export type Checklist = {|
  __typename?: 'Checklist',
  completed: $ElementType<Scalars, 'Boolean'>,
  created: $ElementType<Scalars, 'DateTime'>,
  description?: ?$ElementType<Scalars, 'String'>,
  expires: $ElementType<Scalars, 'DateTime'>,
  id: $ElementType<Scalars, 'ID'>,
  order: $ElementType<Scalars, 'Int'>,
  owner: $ElementType<Scalars, 'ID'>,
  priority: Priority,
  title: $ElementType<Scalars, 'String'>,
  todos: Array<Todo>,
|};

export type CreateChecklistInput = {|
  completed?: ?$ElementType<Scalars, 'Boolean'>,
  description?: ?$ElementType<Scalars, 'String'>,
  priority?: ?Priority,
  title: $ElementType<Scalars, 'String'>,
  todos?: ?Array<CreateTodoInput>,
|};

export type CreateTodoInput = {|
  checklist?: ?$ElementType<Scalars, 'ID'>,
  completed?: ?$ElementType<Scalars, 'Boolean'>,
  description?: ?$ElementType<Scalars, 'String'>,
  priority?: ?Priority,
  title: $ElementType<Scalars, 'String'>,
|};

export type CreateUserInput = {|
  email: $ElementType<Scalars, 'String'>,
  name?: ?$ElementType<Scalars, 'String'>,
  password: $ElementType<Scalars, 'String'>,
|};


export type LoginUserInput = {|
  email: $ElementType<Scalars, 'String'>,
  password: $ElementType<Scalars, 'String'>,
|};

export type Mutation = {|
  __typename?: 'Mutation',
  createChecklist: Checklist,
  createTodo: Checklist,
  createUser: AuthPayload,
  deleteChecklist: Checklist,
  deleteTodo: Checklist,
  deleteUser: User,
  loginUser: AuthPayload,
  reorderChecklists: Checklist,
  reorderTodos: Checklist,
  toggleTodo: Checklist,
  updateChecklist: Checklist,
  updateTodo: Checklist,
  updateUser: User,
|};


export type MutationCreateChecklistArgs = {|
  input: CreateChecklistInput,
|};


export type MutationCreateTodoArgs = {|
  input: CreateTodoInput,
|};


export type MutationCreateUserArgs = {|
  input: CreateUserInput,
|};


export type MutationDeleteChecklistArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};


export type MutationDeleteTodoArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};


export type MutationDeleteUserArgs = {|
  email: $ElementType<Scalars, 'String'>,
|};


export type MutationLoginUserArgs = {|
  input: LoginUserInput,
|};


export type MutationReorderChecklistsArgs = {|
  input: ReorderChecklistsInput,
|};


export type MutationReorderTodosArgs = {|
  input: ReorderTodoInput,
|};


export type MutationToggleTodoArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};


export type MutationUpdateChecklistArgs = {|
  input: UpdateChecklistInput,
|};


export type MutationUpdateTodoArgs = {|
  input: UpdateTodoInput,
|};


export type MutationUpdateUserArgs = {|
  input: UpdateUserInput,
|};

export const PriorityValues = Object.freeze({
  High: 'HIGH',
  Low: 'LOW',
  Normal: 'NORMAL'
});


export type Priority = $Values<typeof PriorityValues>;

export type Query = {|
  __typename?: 'Query',
  checklist?: ?Checklist,
  checklists: Array<Checklist>,
  me: User,
  user: User,
  users: Array<User>,
|};


export type QueryChecklistArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};


export type QueryUserArgs = {|
  email: $ElementType<Scalars, 'String'>,
|};

export type ReorderChecklistsInput = {|
  id: $ElementType<Scalars, 'ID'>,
  order: $ElementType<Scalars, 'Int'>,
|};

export type ReorderTodoInput = {|
  checklist: $ElementType<Scalars, 'ID'>,
  id: $ElementType<Scalars, 'ID'>,
  order: $ElementType<Scalars, 'Int'>,
|};

/** Todo type */
export type Todo = {|
  __typename?: 'Todo',
  completed: $ElementType<Scalars, 'Boolean'>,
  created: $ElementType<Scalars, 'DateTime'>,
  description?: ?$ElementType<Scalars, 'String'>,
  expires?: ?$ElementType<Scalars, 'DateTime'>,
  id: $ElementType<Scalars, 'ID'>,
  order: $ElementType<Scalars, 'Int'>,
  priority: Priority,
  title: $ElementType<Scalars, 'String'>,
|};

export type UpdateChecklistInput = {|
  completed: $ElementType<Scalars, 'Boolean'>,
  description: $ElementType<Scalars, 'String'>,
  expires?: ?$ElementType<Scalars, 'DateTime'>,
  id: $ElementType<Scalars, 'ID'>,
  priority: Priority,
  title: $ElementType<Scalars, 'String'>,
|};

export type UpdateTodoInput = {|
  completed?: ?$ElementType<Scalars, 'Boolean'>,
  description?: ?$ElementType<Scalars, 'String'>,
  expires?: ?$ElementType<Scalars, 'DateTime'>,
  id: $ElementType<Scalars, 'ID'>,
  priority?: ?Priority,
  title?: ?$ElementType<Scalars, 'String'>,
|};

export type UpdateUserInput = {|
  email: $ElementType<Scalars, 'String'>,
  name?: ?$ElementType<Scalars, 'String'>,
  password: $ElementType<Scalars, 'String'>,
|};

/** User Type */
export type User = {|
  __typename?: 'User',
  created: $ElementType<Scalars, 'DateTime'>,
  email: $ElementType<Scalars, 'String'>,
  id: $ElementType<Scalars, 'ID'>,
  isAdmin: $ElementType<Scalars, 'Boolean'>,
  name?: ?$ElementType<Scalars, 'String'>,
  password: $ElementType<Scalars, 'String'>,
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

export interface SubscriptionSubscriberObject<Result, Key: string, Parent, Context, Args> {
  subscribe: SubscriptionSubscribeFn<{ [key: Key]: Result }, Parent, Context, Args>;
  resolve?: SubscriptionResolveFn<Result, { [key: Key]: Result }, Context, Args>;
}

export interface SubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe: SubscriptionSubscribeFn<mixed, Parent, Context, Args>;
  resolve: SubscriptionResolveFn<Result, mixed, Context, Args>;
}

export type SubscriptionObject<Result, Key: string, Parent, Context, Args> =
  | SubscriptionSubscriberObject<Result, Key, Parent, Context, Args>
  | SubscriptionResolverObject<Result, Parent, Context, Args>;

export type SubscriptionResolver<Result, Key: string, Parent = {}, Context = {}, Args = {}> =
  | ((...args: Array<any>) => SubscriptionObject<Result, Key, Parent, Context, Args>)
  | SubscriptionObject<Result, Key, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => ?Types | Promise<?Types>;

export type IsTypeOfResolverFn<T = {}, Context = {}> = (obj: T, context: Context, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<Result = {}, Parent = {}, Args = {}, Context = {}> = (
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
  AuthPayload: ResolverTypeWrapper<AuthPayload>,
  Boolean: ResolverTypeWrapper<$ElementType<Scalars, 'Boolean'>>,
  Checklist: ResolverTypeWrapper<Checklist>,
  CreateChecklistInput: CreateChecklistInput,
  CreateTodoInput: CreateTodoInput,
  CreateUserInput: CreateUserInput,
  DateTime: ResolverTypeWrapper<$ElementType<Scalars, 'DateTime'>>,
  ID: ResolverTypeWrapper<$ElementType<Scalars, 'ID'>>,
  Int: ResolverTypeWrapper<$ElementType<Scalars, 'Int'>>,
  LoginUserInput: LoginUserInput,
  Mutation: ResolverTypeWrapper<{}>,
  Priority: Priority,
  Query: ResolverTypeWrapper<{}>,
  ReorderChecklistsInput: ReorderChecklistsInput,
  ReorderTodoInput: ReorderTodoInput,
  String: ResolverTypeWrapper<$ElementType<Scalars, 'String'>>,
  Todo: ResolverTypeWrapper<Todo>,
  UpdateChecklistInput: UpdateChecklistInput,
  UpdateTodoInput: UpdateTodoInput,
  UpdateUserInput: UpdateUserInput,
  User: ResolverTypeWrapper<User>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AdditionalEntityFields: AdditionalEntityFields,
  AuthPayload: AuthPayload,
  Boolean: $ElementType<Scalars, 'Boolean'>,
  Checklist: Checklist,
  CreateChecklistInput: CreateChecklistInput,
  CreateTodoInput: CreateTodoInput,
  CreateUserInput: CreateUserInput,
  DateTime: $ElementType<Scalars, 'DateTime'>,
  ID: $ElementType<Scalars, 'ID'>,
  Int: $ElementType<Scalars, 'Int'>,
  LoginUserInput: LoginUserInput,
  Mutation: {},
  Query: {},
  ReorderChecklistsInput: ReorderChecklistsInput,
  ReorderTodoInput: ReorderTodoInput,
  String: $ElementType<Scalars, 'String'>,
  Todo: Todo,
  UpdateChecklistInput: UpdateChecklistInput,
  UpdateTodoInput: UpdateTodoInput,
  UpdateUserInput: UpdateUserInput,
  User: User,
};

export type AbstractEntityDirectiveArgs = {
  additionalFields?: ?Array<?AdditionalEntityFields>,
  discriminatorField: $ElementType<Scalars, 'String'>,
};

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {
  overrideType?: ?$ElementType<Scalars, 'String'>,
};

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = { };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  additionalFields?: ?Array<?AdditionalEntityFields>,
  embedded?: ?$ElementType<Scalars, 'Boolean'>,
};

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = { };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  overrideType?: ?$ElementType<Scalars, 'String'>,
};

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {
  path: $ElementType<Scalars, 'String'>,
};

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type UnionDirectiveArgs = {
  additionalFields?: ?Array<?AdditionalEntityFields>,
  discriminatorField?: ?$ElementType<Scalars, 'String'>,
};

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthPayloadResolvers<ContextType = any, ParentType = $ElementType<ResolversParentTypes, 'AuthPayload'>> = {
  token?: Resolver<$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>,
};

export type ChecklistResolvers<ContextType = any, ParentType = $ElementType<ResolversParentTypes, 'Checklist'>> = {
  completed?: Resolver<$ElementType<ResolversTypes, 'Boolean'>, ParentType, ContextType>,
  created?: Resolver<$ElementType<ResolversTypes, 'DateTime'>, ParentType, ContextType>,
  description?: Resolver<?$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  expires?: Resolver<$ElementType<ResolversTypes, 'DateTime'>, ParentType, ContextType>,
  id?: Resolver<$ElementType<ResolversTypes, 'ID'>, ParentType, ContextType>,
  order?: Resolver<$ElementType<ResolversTypes, 'Int'>, ParentType, ContextType>,
  owner?: Resolver<$ElementType<ResolversTypes, 'ID'>, ParentType, ContextType>,
  priority?: Resolver<$ElementType<ResolversTypes, 'Priority'>, ParentType, ContextType>,
  title?: Resolver<$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  todos?: Resolver<Array<$ElementType<ResolversTypes, 'Todo'>>, ParentType, ContextType>,
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>,
};

export type DateTimeScalarConfig = {
  ...GraphQLScalarTypeConfig<$ElementType<ResolversTypes, 'DateTime'>, any>,
  name: 'DateTime'
};

export type MutationResolvers<ContextType = any, ParentType = $ElementType<ResolversParentTypes, 'Mutation'>> = {
  createChecklist?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationCreateChecklistArgs, { input: * }>>,
  createTodo?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationCreateTodoArgs, { input: * }>>,
  createUser?: Resolver<$ElementType<ResolversTypes, 'AuthPayload'>, ParentType, ContextType, $RequireFields<MutationCreateUserArgs, { input: * }>>,
  deleteChecklist?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationDeleteChecklistArgs, { id: * }>>,
  deleteTodo?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationDeleteTodoArgs, { id: * }>>,
  deleteUser?: Resolver<$ElementType<ResolversTypes, 'User'>, ParentType, ContextType, $RequireFields<MutationDeleteUserArgs, { email: * }>>,
  loginUser?: Resolver<$ElementType<ResolversTypes, 'AuthPayload'>, ParentType, ContextType, $RequireFields<MutationLoginUserArgs, { input: * }>>,
  reorderChecklists?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationReorderChecklistsArgs, { input: * }>>,
  reorderTodos?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationReorderTodosArgs, { input: * }>>,
  toggleTodo?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationToggleTodoArgs, { id: * }>>,
  updateChecklist?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationUpdateChecklistArgs, { input: * }>>,
  updateTodo?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationUpdateTodoArgs, { input: * }>>,
  updateUser?: Resolver<$ElementType<ResolversTypes, 'User'>, ParentType, ContextType, $RequireFields<MutationUpdateUserArgs, { input: * }>>,
};

export type QueryResolvers<ContextType = any, ParentType = $ElementType<ResolversParentTypes, 'Query'>> = {
  checklist?: Resolver<?$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<QueryChecklistArgs, { id: * }>>,
  checklists?: Resolver<Array<$ElementType<ResolversTypes, 'Checklist'>>, ParentType, ContextType>,
  me?: Resolver<$ElementType<ResolversTypes, 'User'>, ParentType, ContextType>,
  user?: Resolver<$ElementType<ResolversTypes, 'User'>, ParentType, ContextType, $RequireFields<QueryUserArgs, { email: * }>>,
  users?: Resolver<Array<$ElementType<ResolversTypes, 'User'>>, ParentType, ContextType>,
};

export type TodoResolvers<ContextType = any, ParentType = $ElementType<ResolversParentTypes, 'Todo'>> = {
  completed?: Resolver<$ElementType<ResolversTypes, 'Boolean'>, ParentType, ContextType>,
  created?: Resolver<$ElementType<ResolversTypes, 'DateTime'>, ParentType, ContextType>,
  description?: Resolver<?$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  expires?: Resolver<?$ElementType<ResolversTypes, 'DateTime'>, ParentType, ContextType>,
  id?: Resolver<$ElementType<ResolversTypes, 'ID'>, ParentType, ContextType>,
  order?: Resolver<$ElementType<ResolversTypes, 'Int'>, ParentType, ContextType>,
  priority?: Resolver<$ElementType<ResolversTypes, 'Priority'>, ParentType, ContextType>,
  title?: Resolver<$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>,
};

export type UserResolvers<ContextType = any, ParentType = $ElementType<ResolversParentTypes, 'User'>> = {
  created?: Resolver<$ElementType<ResolversTypes, 'DateTime'>, ParentType, ContextType>,
  email?: Resolver<$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  id?: Resolver<$ElementType<ResolversTypes, 'ID'>, ParentType, ContextType>,
  isAdmin?: Resolver<$ElementType<ResolversTypes, 'Boolean'>, ParentType, ContextType>,
  name?: Resolver<?$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  password?: Resolver<$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>,
  Checklist?: ChecklistResolvers<ContextType>,
  DateTime?: GraphQLScalarType<>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Todo?: TodoResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};

export type DirectiveResolvers<ContextType = any> = {
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>,
  column?: ColumnDirectiveResolver<any, any, ContextType>,
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>,
  entity?: EntityDirectiveResolver<any, any, ContextType>,
  id?: IdDirectiveResolver<any, any, ContextType>,
  link?: LinkDirectiveResolver<any, any, ContextType>,
  map?: MapDirectiveResolver<any, any, ContextType>,
  union?: UnionDirectiveResolver<any, any, ContextType>,
};

type $Pick<Origin: Object, Keys: Object> = $ObjMapi<Keys, <Key>(k: Key) => $ElementType<Origin, Key>>;
