import React from 'react';
import uuid from 'react-uuid';
// import './index.css';

// attributes passed from the calling Component...
type oProps = {
  data: {};
  callbackFunction: (name: string, data: object) => void;
};
// Internal State that we want to monitor and respond to...
type oState = {
  /* e.g. 
    state1: boolean,
    state2: string,
    state3: number,
    */
};

export class Template extends React.Component<oProps, oState> {
  constructor(props: oProps) {
    super(props);
    this.state = {
      /* Initial State */
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.callbackHandler = this.callbackHandler.bind(this);
  }

  componentDidMount() {
    // what to do onLoad
  }

  componentDidUpdate() {
    // what to do onPropChange
  }

  clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    console.info('clickHandler', event);
    event.preventDefault();
    // const id = event?.currentTarget?.id;
  }

  callbackHandler(data: object): void {
    console.info('callback', JSON.stringify(data));
    /*
    const { callbackFunction } = this.props;
    if(callbackFunction?.name){
      callbackFunction('name', data);
    } 
    */
  }

  render() {
    // const { data } = this.props;
    // const { state1, state2, state3 } = this.state;
    return <React.Fragment key={uuid()}></React.Fragment>;
  }
}
