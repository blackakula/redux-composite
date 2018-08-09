# Composite

For low-level system the expression `Composite({reducer})` is the same as just `reducer`,
because high-level composite resolves low-level reducers to `Composite` objects.

High-level composite object is also `Composite` object,
because `Structure(data)` is identical to `Composite({structure: data})`.

Either `reducer` or `structure` should be provided to `Composite` constructor, otherwise you'll receive an exception.

## Injections

There are 2 ways to initialize `Composite` object: providing structure of sub-systems or giving "primitives" (at least reducer) for a low-level system.
If neither structure is provided nor reducer (for low-level system), the exception would be thrown.

The list of injectable "terms":
* reducer
* middleware
* equality
* subscribe
* redux
* memoize

The complete injection syntax: `Composite({structure, reducer, middleware, equality, subscribe, redux, memoize})`

> **Note:** By default Redux strictly checks, that the `action` parameter [is plain object](https://github.com/reactjs/redux/blob/master/src/createStore.js#L166) and has `type` property: `action: {type: string}`.
> If you're not using Redux or having custom middleware, dealing with you custom actions (like [Redux Thunk](https://github.com/gaearon/redux-thunk)), the type could be any.
> So, let's say `type Action = action: {type: string} | any`

### Low-level injections

The low-level composite initialization happens, when `structure` parameter is not provided to `Composite` constructor.
For low-level system at least reducer **_is required_**.

#### Reducer

There is no default implementation for reducer.
The reducer should accept `state` and `action` and return new state: `type Reducer = (state: State, action: Action): State`
Keep your reducers immutable! Do not mutate original state - return new object, if state change.
Otherwise, equality check may fail - and other features (memoize, subscribe) may not work.

#### Middleware

Default: `() => next => action => next(action)`

You can inject any middleware, that follows interface:
```javascript
type Middleware = ({dispatch: (action: Action) => Action, getState: () => State}): ((action: Action) => Action).
```

#### Equality

Default: `(prev, next) => prev === next` - let's call it "default equality"

If you have more complex equality check between previous and next state, inject your own implementation:
`type Equality = (prev: State, next: State): boolean`

#### Subscribe

Default: `Wrappers.Subscribe((dispatch, getState) => listener => () => listener({dispatch, getState}), equality)`

If you want additional custom behavior on all subscribed listeners to you low-level state changes, inject it using this interface:
```javascript
type Subscribe = (dispatch: (action: Action) => Action, getState: () => State): (Function => () => any)
```

`Wrappers.Subscribe` (based on given equality) checks the state changes and execute listener only in case, when state was changed.
So, you may also want to wrap your subscribe injection with `Wrappers.Subscribe`
> If equality is not provided, default equality will be used

#### Redux

Default:
```javascript
(dispatch, getState, subscribe) => ({
    redux: {dispatch, getState, subscribe}
})
```

By default the library provides in `redux` property the same low-level methods, as it was transformed from the high-level ones.
You can implement your own wrappers on transformed methods using the interface:
```javascript
type Redux = (
    dispatch: (action: Action) => Action,
    getState: () => State,
    subscribe: (Function => any)): {redux: {
        dispatch: (action: Action) => Action,
        getState: () => State,
        subscribe: (Function => any)
    }, structure?: mixed}
```

#### Memoize

Default: `Wrappers.Memoize(getState => ({memoize: callback => callback}), equality)`

You're free to implement your own, using the interface:
`memoize(getState: () => State): {memoize: Function => Function}`

`Wrappers.Memoize` (based on given equality) checks the stage changes and caches result of the callback.
So, you may also want to wrap your memoize injection with `Wrappers.Memoize`
> If equality is not provided, default equality will be used

### Composite injections

If `structure` is provided, library assumes that this is not low-level component, therefore all the injections receive the transformed `structure`.
The transformation converts all the low-system reducers to `Composite` objects.
If low-system already provided as `Composite` object, no transformation happens.
If you have nothing to inject, except `structure`, you can use short syntax to create `Composite` object:
`Structure(highLevelSystemStructure)`, which is alias for `Composite({structure: highLevelSystemStructure})`.

All the default implementations for high-level "terms" could be imported in `Defaults` object.

#### Reducer

Default: `Defaults.Reducer`

Interface: `(structure: mixed): Reducer`

#### Middleware

Default: `Defaults.Middleware`

Interface: `(structure: mixed): Middleware`


#### Equality

Default: `Defaults.Equality`

Interface: `(structure: mixed): Equality`

#### Subscribe

Default: `structure => Wrappers.Subscribe(Defaults.Subscribe(structure), equality)`

`Wrappers.Subscribe` (based on given equality) checks the state changes and execute listener only in case, when state was changed.
So, you may also want to wrap your subscribe injection with `Wrappers.Subscribe` the same way as `Defaults.Subscribe`
> If equality is not provided, default equality will be used

Interface: `(structure: mixed): Subscribe`

#### Redux

Default: `Defaults.Redux`

Interface: `(structure: mixed): Redux`

#### Memoize

Default: `structure => Wrappers.Memoize(Defaults.Memoize(structure), equality)`

`Wrappers.Memoize` (based on given equality) checks the stage changes and caches result of the callback.
So, you may also want to wrap your memoize injection with `Wrappers.Memoize` the same way as `Defaults.Memoize`
> If equality is not provided, default equality will be used

Interface: `(structure: mixed): Memoize`
