import * as React from "react";
import { hot } from "react-hot-loader";

import { Display } from "./CalendarDotMatrix";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div>
        <Display />
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
