## A Toggle Switch in the style of Pokeball!

With this project, I wanted to create a toggle switch that looks like a Pokéball.

The switch is a toggle switch, which means that it can be turned on and off.

Currently only React is tested and the CSS is uncompiled so it won't work on Next.js.

The credit for the design goes to Mina who had made an amazing codepen here [Pokeball](https://codepen.io/codeanddream/pen/abwGgmJ). which you should check out.

To use the switch, first download it using from npm using npm or yarn

```bash
$ npm install pokeball-toggle
```

Inside your project import the Pokeball_Switch from pokeball-toggle and use it as a component

```jsx
import { Pokeball_Switch } from "pokeball-toggle";

<Pokeball_Switch />;
```

Currently the component also contains an onClick prop listener which you can pass

```jsx
import { Pokeball_Switch } from "pokeball-toggle";

const log = () => {
  console.log("clicked");
};

<Pokeball_Switch
  onClick={() => {
    log();
  }}
/>;
```

This is still a work in progress and open source so feel free to contribute to it and make it better!
