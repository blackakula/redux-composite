# createStore

Usually, creating composite store looks like this:
```js
const composite = Structure(structure);
composite.createStore()();
```

Let's see what could be injected in store creation.
As we saw in previous examples, our own `createStore` function could be injected.

The `createStore` should return `Redux` interface: `getState`, `dispatch`, `subscribe`.
By default, `Redux` `createStore` one would be used.

`prettify` - object with 2 properties: `reduce` and `expand`.
This injection allows you building your own pre- and post-processor of actions.

By default composite actions like `{type: 'COMPOSITE, composite: {inc: [, {type: 'INCREMENT'}]}}`
would be transformed to `{type: 'INCREMENT\{inc}\[1]'}` for readability.
There are `Defaults.Prettify.Reduce` and `Defaults.Prettify.Expand` used and you can inject your own.
To disable prettifying just set `prettify` as `false`

`init` - object with 2 properties: `store` and `memoize` to create `Redux` store
for each low-level state and create memoization function for each low-level state accordingly.

There are `Defaults.Init.Store` and `Defaults.Init.Memoize` used and you can inject your own.
Once the composite store is initialized, there is no way back - this store can't be used as
sub-state of another system. The application should have one single global initialized store.

Once injections are passed, the `createStore()` returns you the function, that creates store
with `Redux` interface and/or allows you modifying reducer, set preloaded state, apply middlewares.

So, the call may look like `composite.createStore()(reducer => reducer, middleware => applyMiddleware(middleware))` or
`composite.createStore()(reducer => reducer, preloadedState, middleware => applyMiddleware(middleware))`

First parameter is the function, that receives reducer created by the composite
and should return final reducer that would be used for the state transitions.

If third parameter is not missed, second parameter is preloaded state of the composite store.

Last parameter is the function, that receives middleware created by the composite
and should return `Redux` [enhancer](https://chariotsolutions.com/blog/post/redux-middleware-and-enhancers-getting-redux-to-log-debug-and-process-async-work/).

Finally, this call will return you usual redux store for the composite.
But probably, you'll not need it - the composite object itself has all needed functions:
`dispatch()`, `getState()`, `subscribe()`, `memoize()` and the `store` property to access internal sub-stores... and even sub-sub-stores and so on.

Check the [demo](https://github.com/blackakula/redux-composite-demo/) to see it in action.
