React Feature Flipper
=====================

[![Build Status](https://travis-ci.com/erhangundogan/react-feature-flipper.svg?branch=master)](https://travis-ci.com/erhangundogan/react-feature-flipper)

React Feature Flipper HOC.

> Feature Toggles (often also refered to as Feature Flags) are a powerful technique, allowing teams to modify system behavior without changing code.
>
> -- <cite>Martin Fowler</cite>

If you don't know about **feature flippers** (**feature toggles/flags**) please read [here](https://martinfowler.com/articles/feature-toggles.html) from Martin Fowler and [here](https://en.wikipedia.org/wiki/Feature_toggle) from wikipedia.

TL:DR; this technique allows you to activate/de-active your feature without changing code while your application is running. And this can be done on certain criteria and time. It can be applied to certain individuals (users) or you can use it for A/B testing.

This library offers you a React HOC (high order component) to add your project. 

Installation
============

This module is distributed via npm which is bundled with node and should be installed as one of your project's dependencies:

```bash
yarn add react-feature-flipper
```

Usage
=====

There are 2 HOCs:

### featureFlipper (or alternatively featureFlipperStatic with named import)

This component is the default export of a library.

* Import `featureFlipper` into your React project with default import.

```js
import featureFlipper from 'react-feature-flipper';
```

Code below enables `<HelloWorld />` component wherever used. Second item in array param enables/disables your component. 

```js
export default featureFlipper([HelloWorld, true])

```


### featureFlipperPromise

* Import `featureFlipperPromise` into your React project.

```js
import { featureFlipperPromise } from 'react-feature-flipper';
```

And use it as shown below.

* Pass required parameters to featureFlipperPromise method call with an array items:
  * First (required): Your Component
  * Second (required): Promise to return all feature flippers. It should be an object with a property `features` having feature flippers (array of string).
  * Third (optional): The name of the feature flipper (string) you want to bind to a Component. If you omit this param then HOC uses the name of the component to find required feature flipper. eg. It would be `HelloWorld` for the example below.

```js
export default featureFlipper([
  HelloWorld,
  new Promise(resolve => 
    resolve({
      features: ['hello_world', 'blabla']
    })),
  'hello_world'
])
```

Usage with other HOCs
=====================

You can pass wrapped component directly into featureFlipper. for example with redux `connect`

```js
export default featureFlipper([
  connect(mapStateToProps, mapDispatchToProps)(HelloWorld),
  true
]);
```

I recommend you to create another file if you would like to enable feature flippers for multiple components. It would be easier to track down feature flipped components.

```js
import featureFlipper from 'react-feature-flipper';
import { default as FooBase } from './Foo';
import { default as BarBase } from './Bar';

export const Foo = featureFlipper([FooBase, true]);
export const Bar = featureFlipper([BarBase, false]);
```


Tools
===== 

If you would like to see the example (example is located in `examples/FeatureFlipper` folder) running on your local machine then:

```bash
git clone git@github.com:erhangundogan/react-feature-flipper.git
cd react-feature-flipper
yarn
yarn dev
```
browse http://localhost:9000
  

Other commands:

```bash
yarn build
```

```bash
yarn test
```

```bash
yarn lint
```

## LICENSE

MIT
