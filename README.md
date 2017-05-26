# Dope Docs
> Storybook inspired Angular docs generator


- [Installing](#installing)
- [Inspiration](#inspiration)
- [Contributing](#contributing)

## Installing
Dope docs supports Angular 2 and beyond only. Now, lets get your docs going so you can stop procrastinating :100:.

* `yarn add @angularclass/dope-docs`

Now, none of this will do you any good if you don't have anything to document, so make sure you do. Currently, Dope Docs only supports UI things like `components`, `directives`, `pipes`. There are plans to support non UI things like services soon. Feel free to send a PR for that if you'd like! If you're the curious type and want to know how Dope Docs works, [read here]().


Lets create some docs. You can create a doc for every UI element in your app. Then, for each doc, you can create a different example. Start by going to a component in your app. In that same folder, create a doc file. It's up to you to decided a naming convention for the file, just be consistent. We're going to use the `[name].doc.ts` convention here. Now, in that file, we need to create a doc and at least one example.

```typescript
// button.doc.ts
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
  description: 'The default and primary state',
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
.example(/* you can chain more examples */)
```

Isn't that clean! So go and add more docs for your UI things.


Next, we need to setup an entry to the Dope Docs app. This entry will be used to setup global info and bootrapping your module

```typescript
import 'core-js'
import 'zone.js'

import { createDopeDocs } from '@angularclass/dope-docs'
import { UIModule } from './app/ui'

// this takes in all the options needed to bootstrap your dope docs
createDopeDocs({
  // The module from your app that has all the components exported.
  ngModule: UIModule,
  /*
  * This function must return all the modules in your app that have docs.
  * Above is an example of how to do so pragmatically using webpack`s `require.context`.
  * If you're not using Webpack, or want to be explicit, you can just require
  * every file individually or just import them all up top :sunglasses:
  */
  loadUIGuides() {
    const context = (require as any).context('./', true, /\.doc\.ts/)
    return context.keys().map(context).map((mod: any) => mod.default)
  }
})
```

Last step is to setup configuration. Create a `dope.js` on your root file.

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





