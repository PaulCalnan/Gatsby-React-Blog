---
title: "My Second Post"
date: "28th November 2022"
description: "My second post"
---

### It's been a little while...

First thing I have learnt as a software developer is that time is precious.

Working full-time as a Software Engineer, your days are divided up between all sorts of relevant events, hours are quickly devoured.
If I plan my days well I can usually slot in a sizeable chunk of learning time.

Currently learning about React Hooks.

A lot of React code will still have lifecycle methods on Class based components that looks like this...

```
import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activated: false,
    }
    this.handleActiveChange = this.handleActiveChange.bind(this);
  }

  handleActiveChange() {
    // this.setState({ activated: !this.state.activated })
    this.setState((prevState) => {
      return {
        activated: !prevState.activated
      }
    })
  }

  render() {
    const buttonText = this.state.activated ? this.props.activeText : this.props.inactiveText;
    return (
      <button onClick={this.handleActiveChange}>
        { buttonText }
      </button>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Button
        activeText="ON"
        inactiveText="OFF"
      />
    )
  }
}

export default App;

```

To me, this seems like a lot of code.
This is still valid code and still can be done like this today, so it's important to still understand what's going on above.
But using Hooks in React, we can write the same button component like this...

```
import React, { useState } from 'react';

function App() {

  const [activated, setActivated] = useState(false)
  const buttonText = activated ? 'Active' : 'Inactive';

  function onClick() {
    setActivated(!activated);
  }

  return (
    <button onClick={onClick}>
      { buttonText }
    </button>
  )
}

export default App;

```

Big difference, a lot less code and in my mind way easier to read.
Basically we set an initial state for the button, then every time we click the button the state is set with the inverse value.
That's just one of the many things I've been spending my time on lately, but I'll leave that stuff for another post in the near future.

Paul.
