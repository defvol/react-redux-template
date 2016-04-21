A minimalist boilerplate for a react-redux frontend.

How it works:

`make start` watches index.js and builds a bundle.js, that is served by index.html through the ecstatic server.

Flow:

1. `index.js` is a react-redux app that inserts the App stateful container into index.html.
2. `src/containers/index.js` runs a [container component](http://redux.js.org/docs/basics/UsageWithReact.html#container-components) that will dispatch [actions](http://redux.js.org/docs/basics/Actions.html) based on any event, e.g. user interactions. This container component is hooked to the [store](http://redux.js.org/docs/basics/Store.html) by means of connect().
3. `src/reducers/index.js` holds reducers that update the state when actions are dispatched.
4. `src/components/Paragraph.js` is a simple [presentational component](http://redux.js.org/docs/basics/UsageWithReact.html) that will render when new properties are passed.

How to run:

```bash
% npm install
% make start
```

License: [WTFPL](http://www.wtfpl.net/txt/copying/)
