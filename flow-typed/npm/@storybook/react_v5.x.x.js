// flow-typed signature: cd8148a02cb2b4f54cd2c85ad3f74030
// flow-typed version: 9d326d4ede/@storybook/react_v5.x.x/flow_>=v0.142.x

type NodeModule = typeof module;

declare module '@storybook/react' {
  declare type Context = {
    kind: string,
    story: string,
    ...
  };
  declare type Renderable =
    | string
    | number
    | React$Element<any>
    | Iterable<?Renderable>;
  declare type RenderCallback = (
    context: Context
  ) => Renderable;
  declare type RenderFunction = () => Renderable;

  declare type StoryDecorator = (
    story: RenderFunction,
    context: Context
  ) => Renderable;

  declare type DecoratorParameters = { [key: string]: any, ... };

  declare interface Story {
    +kind: string;
    add(
      storyName: string,
      callback: RenderCallback,
      parameters?: DecoratorParameters
    ): Story;
    addDecorator(decorator: StoryDecorator): Story;
    addParameters(parameters: DecoratorParameters): Story;
  }

  declare interface StoryObject {
    name: string;
    render: RenderFunction;
  }

  declare interface StoryBucket {
    kind: string;
    filename: string;
    stories: Array<StoryObject>;
  }

  declare function addDecorator(decorator: StoryDecorator): void;
  declare function addParameters(parameters: DecoratorParameters): void;
  declare function clearDecorators(): void;
  declare function configure(fn: () => void, module: NodeModule): void;
  declare function setAddon(addon: Object): void;
  declare function storiesOf(name: string, module: NodeModule): Story;
  declare function storiesOf<T>(name: string, module: NodeModule): Story & T;
  declare function forceReRender(): void;

  declare function getStorybook(): Array<StoryBucket>;
}
