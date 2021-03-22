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

export type Mutation = {|
  __typename?: 'Mutation',
  createTodo: Checklist,
  updateTodo: Checklist,
  toggleTodo: Checklist,
  deleteTodo: Checklist,
  reorderTodos: Checklist,
  createChecklist: Checklist,
  updateChecklist: Checklist,
  deleteChecklist: Checklist,
  reorderChecklists: Checklist,
  createUser: AuthPayload,
  loginUser: AuthPayload,
  updateUser: User,
  deleteUser: User,
|};


export type MutationCreateTodoArgs = {|
  input: CreateTodoInput,
|};


export type MutationUpdateTodoArgs = {|
  input: UpdateTodoInput,
|};


export type MutationToggleTodoArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};


export type MutationDeleteTodoArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};


export type MutationReorderTodosArgs = {|
  input: ReorderTodoInput,
|};


export type MutationCreateChecklistArgs = {|
  input: CreateChecklistInput,
|};


export type MutationUpdateChecklistArgs = {|
  input: UpdateChecklistInput,
|};


export type MutationDeleteChecklistArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};


export type MutationReorderChecklistsArgs = {|
  input: ReorderChecklistsInput,
|};


export type MutationCreateUserArgs = {|
  input: CreateUserInput,
|};


export type MutationLoginUserArgs = {|
  input: LoginUserInput,
|};


export type MutationUpdateUserArgs = {|
  input: UpdateUserInput,
|};


export type MutationDeleteUserArgs = {|
  email: $ElementType<Scalars, 'String'>,
|};

export const PriorityValues = Object.freeze({
  Low: 'LOW',
  Normal: 'NORMAL',
  High: 'HIGH'
});


export type Priority = $Values<typeof PriorityValues>;

/** Todo type */
export type Todo = {|
  __typename?: 'Todo',
  id: $ElementType<Scalars, 'ID'>,
  order: $ElementType<Scalars, 'Int'>,
  title: $ElementType<Scalars, 'String'>,
  description?: ?$ElementType<Scalars, 'String'>,
  priority: Priority,
  completed: $ElementType<Scalars, 'Boolean'>,
  created: $ElementType<Scalars, 'DateTime'>,
  expires?: ?$ElementType<Scalars, 'DateTime'>,
|};

export type CreateTodoInput = {|
  checklist?: ?$ElementType<Scalars, 'ID'>,
  title: $ElementType<Scalars, 'String'>,
  description?: ?$ElementType<Scalars, 'String'>,
  priority?: ?Priority,
  completed?: ?$ElementType<Scalars, 'Boolean'>,
|};

export type UpdateTodoInput = {|
  id: $ElementType<Scalars, 'ID'>,
  title?: ?$ElementType<Scalars, 'String'>,
  description?: ?$ElementType<Scalars, 'String'>,
  priority?: ?Priority,
  completed?: ?$ElementType<Scalars, 'Boolean'>,
  expires?: ?$ElementType<Scalars, 'DateTime'>,
|};

export type ReorderTodoInput = {|
  checklist: $ElementType<Scalars, 'ID'>,
  id: $ElementType<Scalars, 'ID'>,
  order: $ElementType<Scalars, 'Int'>,
|};

/** Checklist Type */
export type Checklist = {|
  __typename?: 'Checklist',
  id: $ElementType<Scalars, 'ID'>,
  owner: $ElementType<Scalars, 'ID'>,
  order: $ElementType<Scalars, 'Int'>,
  title: $ElementType<Scalars, 'String'>,
  description?: ?$ElementType<Scalars, 'String'>,
  priority: Priority,
  completed: $ElementType<Scalars, 'Boolean'>,
  created: $ElementType<Scalars, 'DateTime'>,
  expires: $ElementType<Scalars, 'DateTime'>,
  todos: Array<Todo>,
|};

export type CreateChecklistInput = {|
  title: $ElementType<Scalars, 'String'>,
  description?: ?$ElementType<Scalars, 'String'>,
  priority?: ?Priority,
  completed?: ?$ElementType<Scalars, 'Boolean'>,
  todos?: ?Array<CreateTodoInput>,
|};

export type UpdateChecklistInput = {|
  id: $ElementType<Scalars, 'ID'>,
  title: $ElementType<Scalars, 'String'>,
  description: $ElementType<Scalars, 'String'>,
  priority: Priority,
  completed: $ElementType<Scalars, 'Boolean'>,
  expires?: ?$ElementType<Scalars, 'DateTime'>,
|};

export type ReorderChecklistsInput = {|
  id: $ElementType<Scalars, 'ID'>,
  order: $ElementType<Scalars, 'Int'>,
|};

/** User Type */
export type User = {|
  __typename?: 'User',
  id: $ElementType<Scalars, 'ID'>,
  isAdmin: $ElementType<Scalars, 'Boolean'>,
  name?: ?$ElementType<Scalars, 'String'>,
  email: $ElementType<Scalars, 'String'>,
  password: $ElementType<Scalars, 'String'>,
  created: $ElementType<Scalars, 'DateTime'>,
|};

export type AuthPayload = {|
  __typename?: 'AuthPayload',
  token: $ElementType<Scalars, 'String'>,
|};

export type CreateUserInput = {|
  name?: ?$ElementType<Scalars, 'String'>,
  email: $ElementType<Scalars, 'String'>,
  password: $ElementType<Scalars, 'String'>,
|};

export type UpdateUserInput = {|
  name?: ?$ElementType<Scalars, 'String'>,
  email: $ElementType<Scalars, 'String'>,
  password: $ElementType<Scalars, 'String'>,
|};

export type LoginUserInput = {|
  email: $ElementType<Scalars, 'String'>,
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
  String: ResolverTypeWrapper<$ElementType<Scalars, 'String'>>,
  DateTime: ResolverTypeWrapper<$ElementType<Scalars, 'DateTime'>>,
  Query: ResolverTypeWrapper<{}>,
  ID: ResolverTypeWrapper<$ElementType<Scalars, 'ID'>>,
  Mutation: ResolverTypeWrapper<{}>,
  Priority: Priority,
  Todo: ResolverTypeWrapper<Todo>,
  Int: ResolverTypeWrapper<$ElementType<Scalars, 'Int'>>,
  Boolean: ResolverTypeWrapper<$ElementType<Scalars, 'Boolean'>>,
  CreateTodoInput: CreateTodoInput,
  UpdateTodoInput: UpdateTodoInput,
  ReorderTodoInput: ReorderTodoInput,
  Checklist: ResolverTypeWrapper<Checklist>,
  CreateChecklistInput: CreateChecklistInput,
  UpdateChecklistInput: UpdateChecklistInput,
  ReorderChecklistsInput: ReorderChecklistsInput,
  User: ResolverTypeWrapper<User>,
  AuthPayload: ResolverTypeWrapper<AuthPayload>,
  CreateUserInput: CreateUserInput,
  UpdateUserInput: UpdateUserInput,
  LoginUserInput: LoginUserInput,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AdditionalEntityFields: AdditionalEntityFields,
  String: $ElementType<Scalars, 'String'>,
  DateTime: $ElementType<Scalars, 'DateTime'>,
  Query: {},
  ID: $ElementType<Scalars, 'ID'>,
  Mutation: {},
  Todo: Todo,
  Int: $ElementType<Scalars, 'Int'>,
  Boolean: $ElementType<Scalars, 'Boolean'>,
  CreateTodoInput: CreateTodoInput,
  UpdateTodoInput: UpdateTodoInput,
  ReorderTodoInput: ReorderTodoInput,
  Checklist: Checklist,
  CreateChecklistInput: CreateChecklistInput,
  UpdateChecklistInput: UpdateChecklistInput,
  ReorderChecklistsInput: ReorderChecklistsInput,
  User: User,
  AuthPayload: AuthPayload,
  CreateUserInput: CreateUserInput,
  UpdateUserInput: UpdateUserInput,
  LoginUserInput: LoginUserInput,
};

export type UnionDirectiveArgs = {   discriminatorField?: ?$ElementType<Scalars, 'String'>,
  additionalFields?: ?Array<?AdditionalEntityFields>, };

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {   discriminatorField: $ElementType<Scalars, 'String'>,
  additionalFields?: ?Array<?AdditionalEntityFields>, };

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {   embedded?: ?$ElementType<Scalars, 'Boolean'>,
  additionalFields?: ?Array<?AdditionalEntityFields>, };

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {   overrideType?: ?$ElementType<Scalars, 'String'>, };

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = {  };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {   overrideType?: ?$ElementType<Scalars, 'String'>, };

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = {  };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {   path: $ElementType<Scalars, 'String'>, };

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type DateTimeScalarConfig = {
  ...GraphQLScalarTypeConfig<$ElementType<ResolversTypes, 'DateTime'>, any>,
  name: 'DateTime'
};

export type QueryResolvers<ContextType = any, ParentType = $ElementType<ResolversParentTypes, 'Query'>> = {
  checklist?: Resolver<?$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<QueryChecklistArgs, { id: * }>>,
  checklists?: Resolver<Array<$ElementType<ResolversTypes, 'Checklist'>>, ParentType, ContextType>,
  me?: Resolver<$ElementType<ResolversTypes, 'User'>, ParentType, ContextType>,
  user?: Resolver<$ElementType<ResolversTypes, 'User'>, ParentType, ContextType, $RequireFields<QueryUserArgs, { email: * }>>,
  users?: Resolver<Array<$ElementType<ResolversTypes, 'User'>>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType = $ElementType<ResolversParentTypes, 'Mutation'>> = {
  createTodo?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationCreateTodoArgs, { input: * }>>,
  updateTodo?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationUpdateTodoArgs, { input: * }>>,
  toggleTodo?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationToggleTodoArgs, { id: * }>>,
  deleteTodo?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationDeleteTodoArgs, { id: * }>>,
  reorderTodos?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationReorderTodosArgs, { input: * }>>,
  createChecklist?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationCreateChecklistArgs, { input: * }>>,
  updateChecklist?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationUpdateChecklistArgs, { input: * }>>,
  deleteChecklist?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationDeleteChecklistArgs, { id: * }>>,
  reorderChecklists?: Resolver<$ElementType<ResolversTypes, 'Checklist'>, ParentType, ContextType, $RequireFields<MutationReorderChecklistsArgs, { input: * }>>,
  createUser?: Resolver<$ElementType<ResolversTypes, 'AuthPayload'>, ParentType, ContextType, $RequireFields<MutationCreateUserArgs, { input: * }>>,
  loginUser?: Resolver<$ElementType<ResolversTypes, 'AuthPayload'>, ParentType, ContextType, $RequireFields<MutationLoginUserArgs, { input: * }>>,
  updateUser?: Resolver<$ElementType<ResolversTypes, 'User'>, ParentType, ContextType, $RequireFields<MutationUpdateUserArgs, { input: * }>>,
  deleteUser?: Resolver<$ElementType<ResolversTypes, 'User'>, ParentType, ContextType, $RequireFields<MutationDeleteUserArgs, { email: * }>>,
};

export type TodoResolvers<ContextType = any, ParentType = $ElementType<ResolversParentTypes, 'Todo'>> = {
  id?: Resolver<$ElementType<ResolversTypes, 'ID'>, ParentType, ContextType>,
  order?: Resolver<$ElementType<ResolversTypes, 'Int'>, ParentType, ContextType>,
  title?: Resolver<$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  description?: Resolver<?$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  priority?: Resolver<$ElementType<ResolversTypes, 'Priority'>, ParentType, ContextType>,
  completed?: Resolver<$ElementType<ResolversTypes, 'Boolean'>, ParentType, ContextType>,
  created?: Resolver<$ElementType<ResolversTypes, 'DateTime'>, ParentType, ContextType>,
  expires?: Resolver<?$ElementType<ResolversTypes, 'DateTime'>, ParentType, ContextType>,
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>,
};

export type ChecklistResolvers<ContextType = any, ParentType = $ElementType<ResolversParentTypes, 'Checklist'>> = {
  id?: Resolver<$ElementType<ResolversTypes, 'ID'>, ParentType, ContextType>,
  owner?: Resolver<$ElementType<ResolversTypes, 'ID'>, ParentType, ContextType>,
  order?: Resolver<$ElementType<ResolversTypes, 'Int'>, ParentType, ContextType>,
  title?: Resolver<$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  description?: Resolver<?$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  priority?: Resolver<$ElementType<ResolversTypes, 'Priority'>, ParentType, ContextType>,
  completed?: Resolver<$ElementType<ResolversTypes, 'Boolean'>, ParentType, ContextType>,
  created?: Resolver<$ElementType<ResolversTypes, 'DateTime'>, ParentType, ContextType>,
  expires?: Resolver<$ElementType<ResolversTypes, 'DateTime'>, ParentType, ContextType>,
  todos?: Resolver<Array<$ElementType<ResolversTypes, 'Todo'>>, ParentType, ContextType>,
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>,
};

export type UserResolvers<ContextType = any, ParentType = $ElementType<ResolversParentTypes, 'User'>> = {
  id?: Resolver<$ElementType<ResolversTypes, 'ID'>, ParentType, ContextType>,
  isAdmin?: Resolver<$ElementType<ResolversTypes, 'Boolean'>, ParentType, ContextType>,
  name?: Resolver<?$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  email?: Resolver<$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  password?: Resolver<$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  created?: Resolver<$ElementType<ResolversTypes, 'DateTime'>, ParentType, ContextType>,
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>,
};

export type AuthPayloadResolvers<ContextType = any, ParentType = $ElementType<ResolversParentTypes, 'AuthPayload'>> = {
  token?: Resolver<$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType<>,
  Query?: QueryResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Todo?: TodoResolvers<ContextType>,
  Checklist?: ChecklistResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  AuthPayload?: AuthPayloadResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>,
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>,
  entity?: EntityDirectiveResolver<any, any, ContextType>,
  column?: ColumnDirectiveResolver<any, any, ContextType>,
  id?: IdDirectiveResolver<any, any, ContextType>,
  link?: LinkDirectiveResolver<any, any, ContextType>,
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>,
  map?: MapDirectiveResolver<any, any, ContextType>,
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
type $Pick<Origin: Object, Keys: Object> = $ObjMapi<Keys, <Key>(k: Key) => $ElementType<Origin, Key>>;
