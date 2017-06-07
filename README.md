# Dope Docs
> :lipstick: :green_book: Storybook inspired Angular docs generator

<!-- TOC -->

- [Dope Docs](#dope-docs)
  - [What is this?](#what-is-this)
  - [Getting Starting](#getting-starting)
    - [Installing](#installing)
    - [Creating docs](#creating-docs)
    - [Bootstrapping](#bootstrapping)
    - [Setup build](#setup-build)
  - [Inspiration](#inspiration)
  - [Contributing](#contributing)

<!-- /TOC -->

## What is this?
Dope Docs is a CLI and Library that will create beautiful documentation, styleguides, and demos for your Angular UI bits (components, directives, pipes). Perfect your component libs, and styleguides for your team.

## Getting Starting
Dope docs supports Angular 2 and beyond only. Now, lets get your docs going so you can stop procrastinating :100:.

### Installing

* `yarn add @angularclass/dope-docs`

### Creating docs
For every UI element you want to add, you'll create a doc for it. We follow the convention of `[name].doc.ts`. And then for each doc, you'll add examples. Below we have a button, and it has multiple states, so we create an example for each state.

```typescript
// button.doc.ts
/* you have to import DopeDoc for now or TS will complain, even though you won't use it. */
import { docsFor, DopeDoc } from '@angularclass/dope-docs'

export default docsFor(
  // the title for the doc you're creating for the UI element. Unique to the dope docs app
  'Dope Button', 
  // The description for this doc
  'This button is so fire, yo have to use it. If you want the monies, use this button',
  // any @Inputs and or @Outputs for the UI element
  {inputs: [], outputs: []}
)
.example('primary', { // the name of this example, unique to this doc
  // the description of this example
  description: 'Default and primary button state',
  // show the source code in the docs?
  showSource: true,
  // props to pass the the template to use for data binding
  context: {
    type: 'primary'
  },
  // the template to render in the docs. Make sure it compliments the example name and description. Don't mislead people! 
  template: `
    <dope-button [buttonStyle]="type">
      click me
    </dope-button>
  `
})
.example('warning', {
  template: `
    <dope-button buttonStyle="warning">
      click me
    </dope-button>
  `,
  description: 'Warning button type'
})
.example(/* you can chain more examples */)
```

### Bootstrapping
Because DopeDocs is an Angular app, it must be bootstrapped with all your examples. So create a new entry file for it, like you would with an entry `NgModule`.

```typescript
import 'core-js'
import 'zone.js'

import { FormsModule } from '@angular/forms'
import { createDopeDocs } from '@angularclass/dope-docs'
import { UIModule } from './app/ui'

// this takes in all the options needed to bootstrap your dope docs
createDopeDocs({
  // The module from your app that has all the components exported.
  ngModule: UIModule,

  /*
  * This is the markdown for your Docs entry route. Will be the landing page
  */
  entryMarkdown: `# My Teams' Components`,

  /*
  * Any NgModules your NgModule will need. Great if your project is a library
  * and depends on the host app for these modules
  */
  ngModuleImports: [
    FormsModule
  ],
  /*
  * This function must return all the modules in your app that have docs.
  * Above is an example of how to do so pragmatically using webpack`s `require.context`.
  * If you're not using Webpack, or want to be explicit, you can just require
  * every file individually or just import them all up top :sunglasses: and return them in an array here
  */
  loadUIGuides() {
    const context = (require as any).context('./', true, /\.doc\.ts/) // this works because all my examples have .doc.ts paths
    return context.keys().map(context).map((mod: any) => mod.default)
  }
})
```

### Setup build
Last step is to setup configuration. Create a `dope.js` on your root file. Your Angular app probably has a specific build setup, so DopeDocs will use that setup to build itself and your App.

```js
module.exports = {
  // your webpack config. Will be used to build the app.
  webpackConfig: require('./webpack.config')
  // the path to the Dope docs entry file you created above
  entry: './src/dope-docs.ts'
}
```


## Inspiration
* [Component Lab](https://github.com/synapse-wireless-labs/component-lab) We literally copied this and added more features and updated dependencies. 
* [React Storybook](https://github.com/storybooks/storybook)

## Contributing
PR's and issues welcome!

There aren't any tests associated with this, so your code will be look at carefully





