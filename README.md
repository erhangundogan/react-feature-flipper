React Feature Flipper
=====================

React Feature Flipper HOC.

> Feature Toggles (often also refered to as Feature Flags) are a powerful technique, allowing teams to modify system behavior without changing code.
>
> -- <cite>Martin Fowler</cite>

If you don't know about **feature flippers** (**feature toggles/flags**) please read [here](https://martinfowler.com/articles/feature-toggles.html) from Martin Fowler and [here](https://en.wikipedia.org/wiki/Feature_toggle) from wikipedia.

TL:DR; this technique allows you to activate/de-active your feature without changing code while your application is running. And this can be done on certain criteria and time. It can be applied to certain individuals (users) or you can use it for A/B testing.

This library offers you a React HOC (high order component) to add your component into feature flipper. Currently feature flippers should be received through a Promise object. And feature can be activated/de-activated for everyone. There is no other criteria. 

We are working on a middleware add-on. This will allow you to plug-in the feature flipper delivery and criteria methods.

Installation
============

This module is distributed via npm which is bundled with node and should be installed as one of your project's dependencies:

```bash
yarn add react-feature-flipper
```

Usage
=====

* Import `featureFlipper` HOC (high order component) from your React project.

  ```
  import featureFlipper from 'react-feature-flipper';
  ```

* Pass required parameters into featureFlipper method call with an array (eg. `[Component, features, featureName]`)
  1. Your Component
  2. Promise to return feature flippers. It should be an object with a property `features` having type of a string array.
  3. The name of the feature flipper (string) you want to bind to a Component (optional).

```js
export default featureFlipper([
  HelloWorld,
  new Promise(resolve => 
    resolve({
      features: ['hello_world', 'blabla']
    })),
  'hello_world',
])
```

If you omit 3rd parameter (feature flipper name) HOC uses then name of the component to find required feature flipper. It would be `HelloWorld` if you consider the previous example.

Tools
===== 

If you would like to see the example running on your local machine then:

* Clone the project

  `git clone git@github.com:erhangundogan/react-feature-flipper.git`

* Run `yarn`

* And then run `yarn dev`

Example is located in `examples/FeatureFlipper` folder.

Some other commands:

```bash
yarn test
```

```bash
yarn lint
```

```bash
yarn build
```

## LICENSE

MIT
