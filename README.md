React Feature Flipper
=====================

React Feature Flipper HOC.

> Feature Toggles (often also refered to as Feature Flags) are a powerful technique, allowing teams to modify system behavior without changing code.
>
> -- <cite>Martin Fowler</cite>

You can read about **feature flippers** (**feature toggles/flags**) [here](https://martinfowler.com/articles/feature-toggles.html) from Martin Fowler and [here](https://en.wikipedia.org/wiki/Feature_toggle) from wikipedia.

Basically this mechanism allows you to activate/de-active your in the production feature while your application is running. This activation could be done on certain criteria and it could be applied to certain individuals (customers, users).

TL:DR;

* It's quite easy and useful technique to test your feature in the production.
* A/B testing.
* Activate/de-activate feature anytime for anyone based on criteria.

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

* Pass your component into `featureFlipper` HOC as a first item in the array.
* Second item should be a promise to return feature flags.
* And third item should be the name of the feature flag you want to bind component.

```js
export default featureFlipper([
  HelloWorld, // your component
  new Promise(resolve => 
    resolve({
      features: ['hello_world', 'blabla']
    })), // features flippers list promise
  'hello_world', // feature name to enable/disable <HelloWorld />
])
```

If you would like to see the example running on your local machine then:

* Clone the project `git clone git@github.com:erhangundogan/react-feature-flipper.git`
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
