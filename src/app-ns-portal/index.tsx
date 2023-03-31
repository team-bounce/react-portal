import React from 'react';
import uuid from 'react-uuid';

import { TheGarage } from '../components/thegarage';
import { MuiDemo } from '../components/muidemo';
import { RbsNavbar } from '../components/rbsnavbar';
import { PRDataTable } from '../components/prdatatable';
import '@fontsource/abel';
import '@fontsource/roboto';
import './index.css';

type callbackData = {
  value: string | null;
};
type nsPortalData = {
  show: string | null;
};

type oProps = {
  data: nsPortalData;
  callbackFunction: (name: string, data: callbackData) => void;
};
type oState = {
  show: string;
};

export class NsPortal extends React.Component<oProps, oState> {
  constructor(props: oProps) {
    super(props);
    this.state = {
      show: 'thegarage',
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.callbackHandler = this.callbackHandler.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate() {
    const { data } = this.props;
  }

  clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const id = event?.currentTarget?.id;
    console.info('clickHandler', id, this.state);
  }

  callbackHandler(data: object): void {
    console.info('callback', JSON.stringify(data));
  }

  render() {
    const { data } = this.props;

    switch (data?.show) {
      case 'thegarage':
        return (
          <div key={uuid()} className="ns-portal">
            <TheGarage />
          </div>
        );
        break;
      case 'prdatatable':
        return (
          <div key={uuid()} className="ns-portal">
            <PRDataTable />
          </div>
        );
        break;
      case 'muidemo':
        return (
          <div key={uuid()} className="ns-portal">
            <MuiDemo />
          </div>
        );
        break;
      case 'rbsnavbar':
        return (
          <div key={uuid()} className="ns-portal">
            <RbsNavbar />
          </div>
        );
        break;
      default:
        break;
    }
    /*
    return (
      <React.Fragment>
        <div className="ns-portal">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Neil's Garage - featuring Dynamic Forms using JSON definitions
              </Accordion.Header>
              <Accordion.Body>
                <TheGarage />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Data Table using Prime React, with a service over json files
                (PRDataTable)
              </Accordion.Header>
              <Accordion.Body>
                <PRDataTable />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Buttons using Material UI (MuiDemo)
              </Accordion.Header>
              <Accordion.Body>
                <MuiDemo />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Navbar using React-Bootstrap, like the one on this page
                (RbsNavbar)
              </Accordion.Header>
              <Accordion.Body>
                <RbsNavbar />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </React.Fragment>
    );
    */
  }
}
