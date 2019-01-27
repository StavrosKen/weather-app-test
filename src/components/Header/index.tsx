import * as React from 'react';

export namespace Header {
  export interface Props {
  }

  export interface State {
    /* empty */
  }
}

export default class Header extends React.Component<Header.Props, Header.State> {

  constructor(props?: Header.Props, context?: any) {
    super(props, context);
  }

  render() {
    return (
      <header>
        <h1>24 hours weather forecast</h1>
      </header>
    );
  }
}
