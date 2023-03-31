import React from 'react';
import uuid from 'react-uuid';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './index.css';

type callbackData = {
  value: string | null;
};
type menuOption = {
  text: string;
  href: string;
};

type oProps = {
  data: {
    title: String;
    author: String;
    date: String;
    version: String;
    menutitle: String;
    menu: menuOption[];
  };
  callbackFunction: (name: string, data: callbackData) => void;
};
type oState = {
  menuToggleState: boolean;
  menuSelection: string | null;
};

export class Header extends React.Component<oProps, oState> {
  constructor(props: oProps) {
    super(props);
    this.state = {
      menuToggleState: false,
      menuSelection: null,
    };
    this.callbackHandler = this.callbackHandler.bind(this);
    this.renderMenuLinks = this.renderMenuLinks.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onMenuToggleHandler = this.onMenuToggleHandler.bind(this);
    this.onMenuSelectHandler = this.onMenuSelectHandler.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate() {}

  callbackHandler(data: object): void {
    console.info('callback', JSON.stringify(data));
  }

  onClickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const { callbackFunction } = this.props;
    if (callbackFunction) {
      callbackFunction('header.onClickHandler', { value: '' });
    } else {
      // handle locally
      const id = event?.currentTarget?.id;
      console.info('header.onClickHandler', id);
    }
  }

  onMenuSelectHandler(menuSelection: string | null, event: any) {
    event.preventDefault();
    // console.log(event);

    const { callbackFunction } = this.props;
    if (callbackFunction) {
      callbackFunction('header.onMenuSelect', { value: menuSelection });
    } else {
      // handle locally
      console.log('header.onMenuSelect', { value: menuSelection });
      this.setState({ menuSelection });
    }
  }

  onMenuToggleHandler(menuToggleState: boolean) {
    const { callbackFunction } = this.props;
    if (callbackFunction) {
      let sTemp = '';
      if (menuToggleState) {
        sTemp = 'open';
      }
      callbackFunction('header.onMenuToggle', { value: sTemp });
    } else {
      // handle locally
      console.log('header.onMenuToggle', menuToggleState);
      this.setState({ menuToggleState });
    }
  }

  renderMenuLinks() {
    const { data } = this.props;
    return data.menu.map((option: menuOption) => {
      return (
        <Nav.Item key={uuid()}>
          <Nav.Link eventKey={option.href}>{option.text}</Nav.Link>
        </Nav.Item>
      );
    });
  }

  render() {
    const { data } = this.props;
    return (
      <div className="layout-header">
        <Navbar key="1" expand="1" onToggle={this.onMenuToggleHandler}>
          <Container fluid>
            <Navbar.Brand href="#">
              <h3 className="title">
                <strong>{data?.title}</strong> by team-bounce
              </h3>
            </Navbar.Brand>
            <div className="databox">
              <h6>Author:{data?.author}</h6>
              <small>Version:{data?.version}</small>
              <small>Date:{data?.date}</small>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-1`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-1`}
              aria-labelledby={`offcanvasNavbarLabel-expand-1`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-1`}>
                  {data?.menutitle}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="justify-content-end flex-grow-1 pe-3"
                  onSelect={this.onMenuSelectHandler}
                >
                  {this.renderMenuLinks()}
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    );
  }
}
