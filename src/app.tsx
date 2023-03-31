import React from 'react';
import uuid from 'react-uuid';
import './app.css';

import { Header } from './layout/header';
import { NsPortal } from './app-ns-portal';
import { Footer } from './layout/footer';

/* ---------------------------------------------------------------------------------
    App/Business Logic goes here.
    e.g. Header component has a Navbar(Menu). When a selection is made, the Navbar
    does nothing except pass it back to this page.

    Child components... data object goes in, callback function comes out
--------------------------------------------------------------------------------- */

type callbackData = {
  value: string | null;
};
type nsPortalData = {
  show: string | null;
};

type oProps = {};
type oState = {
  nsportalData: nsPortalData;
};

const headerData = {
  title: 'NS Prototype Portal',
  author: 'Neil Stackman',
  date: '2022.10.15',
  version: '1.0.0',
  menutitle: 'Portal Menu',
  menu: [
    { text: 'The Garage', href: 'thegarage' },
    { text: 'Primereact Data Table example', href: 'prdatatable' },
    { text: 'Material UI Demo', href: 'muidemo' },
    { text: 'React-Bootstrap', href: 'rbsnavbar' },
  ],
};
const footerData = {
  message:
    'Vitally important footer information goes here :-)   @Copyright: team-bounce',
};

export class App extends React.Component<oProps, oState> {
  constructor(props: oProps) {
    super(props);
    this.state = {
      nsportalData: { show: 'thegarage' },
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
    console.info('app.clickHandler', event);
    event.preventDefault();
    // const id = event?.currentTarget?.id;
  }

  callbackHandler(name: string, data: callbackData): void {
    console.info('app.callbackHandler', name, JSON.stringify(data));
    let { nsportalData } = this.state;
    switch (name) {
      case 'header.onMenuSelect':
        nsportalData = { show: data?.value };
        this.setState({ nsportalData });
        break;
      default:
        break;
    }
  }

  render() {
    const { nsportalData } = this.state;
    return (
      <div className="app" key={uuid()}>
        <Header data={headerData} callbackFunction={this.callbackHandler} />
        <NsPortal data={nsportalData} callbackFunction={this.callbackHandler} />
        <Footer data={footerData} callbackFunction={this.callbackHandler} />
      </div>
    );
  }
}
