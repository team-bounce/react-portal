import React from 'react';
import uuid from 'react-uuid';
import './index.css';

type callbackData = {
  value: string | null;
};
type oProps = {
  data: {
    message: String;
  };
  callbackFunction: (name: string, data: callbackData) => void;
};
type oState = {};

export class Footer extends React.Component<oProps, oState> {
  constructor(props: oProps) {
    super(props);
    this.state = {};
    this.callbackHandler = this.callbackHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate() {}

  callbackHandler(data: object): void {
    console.info('callback', JSON.stringify(data));
  }

  onClickHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    const { callbackFunction } = this.props;
    if (callbackFunction) {
      callbackFunction('footer.onClickHandler', { value: '' });
    } else {
      // handle locally
      const id = event?.currentTarget?.id;
      console.info('footer.onClickHandler', id);
    }
  }

  render() {
    const { data } = this.props;
    return (
      <div key={uuid()} className="layout-footer" onClick={this.onClickHandler}>
        <h6>{data?.message}</h6>
      </div>
    );
  }
}
