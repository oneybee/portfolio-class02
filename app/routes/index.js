import React from "react";
import HomePage from "./HomePage";
import page6 from "./page6";

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default {
  path: "/",
  component: App,
  indexRoute: { component: HomePage },
  childRoutes: [
    {
      path: "/home",
      name: "/home",
      component: HomePage
    },
    {
      path: "/work",
      name: "/work",
      component: page6
    },
    {
      path: "*",
      name: "notfound",
      component: HomePage
    }
  ]
};
