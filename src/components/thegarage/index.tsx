import * as React from 'react';
import uuid from 'react-uuid';

import { FormsService } from './svcforms';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';

import { MyFormGroupInterface, MyFormGroup } from '../_myforms';

import './index.css';

// Imported Types
// ... could be in a declaration file, e.g. formtypes.d.ts
type FormElement = {
  type: string;
  label: string;
  placeholder: string;
  name: string;
};
type FormElements = FormElement[];
type Form = {
  formid: string;
  formname: string;
  formdescription: string;
  formelements: FormElements;
};
type Forms = Form[];

type oProps = {};
type oState = {
  forms: Forms;
  selectedform: null | Form;
};

export class TheGarage extends React.Component<oProps, oState> {
  constructor(props: oProps) {
    super(props);
    this.state = { forms: [], selectedform: null };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onCalendarChangeHandler = this.onCalendarChangeHandler.bind(this);
    this.onValueChangeHandler = this.onValueChangeHandler.bind(this);
    this.callbackHandler = this.callbackHandler.bind(this);
    this.renderFormsList = this.renderFormsList.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderElement = this.renderElement.bind(this);
    this.renderRawContent = this.renderRawContent.bind(this);
    this.renderInputNumber = this.renderInputNumber.bind(this);
    this.renderInputText = this.renderInputText.bind(this);
    this.renderInputTextArea = this.renderInputTextArea.bind(this);

    this.renderFormGroup = this.renderFormGroup.bind(this);
  }

  /*
https://www.npmjs.com/package/validatorjs gives us access to a standardised set of rules...

min:value
Validate that an attribute is at least a given size.

not_in:foo,bar,...
The field under validation must not be included in the given list of values.

numeric
Validate that an attribute is numeric. The string representation of a number will pass.

present
The field under validation must be present in the input data but can be empty.

required
Checks if the length of the String representation of the value is >

required_if:anotherfield,value
The field under validation must be present and not empty if the anotherfield field is equal to any value.

required_unless:anotherfield,value
The field under validation must be present and not empty unless the anotherfield field is equal to any value.

required_with:foo,bar,...
The field under validation must be present and not empty only if any of the other specified fields are present.

required_with_all:foo,bar,...
The field under validation must be present and not empty only if all of the other specified fields are present.

required_without:foo,bar,...
The field under validation must be present and not empty only when any of the other specified fields are not present.

required_without_all:foo,bar,...
The field under validation must be present and not empty only when all of the other specified fields are not present.

same:attribute
The given field must match the field under validation.

size:value
The field under validation must have a size matching the given value. For string data, value corresponds to the number of characters. For numeric data, value corresponds to a given integer value.

string
The field under validation must be a string.

url
Validate that an attribute has a valid URL format

regex:pattern
The field under validation must match the given regular expression.
*/

  componentDidMount() {
    // Preload the forms library...
    const svcforms = new FormsService();
    svcforms.getAll().then((data: Forms) => {
      console.log('data read', data);
      this.setState({ forms: data });
    });
  }

  onClickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.info('onClickHandler', event?.currentTarget);
    try {
      const selectedId = event?.currentTarget?.id;
      let { forms } = this.state;
      let filteredforms = forms.filter((form) => {
        return Number(form.formid) === Number(selectedId);
      });
      // just allow single selection, for now...
      const selectedform: Form = filteredforms[0];
      console.info('selectForm', selectedform);
      this.setState({ selectedform });
    } catch (error) {
      console.error('onClickHandler ERROR', error);
    }
  }

  onCalendarChangeHandler(event: any) {
    event.preventDefault();
    console.info('onCalendarChangeHandler', event);
    try {
    } catch (error) {
      console.error('onCalendarChangeHandler ERROR', error);
    }
  }

  onChangeHandler(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    console.info('onChangeHandler', event?.currentTarget);
    try {
    } catch (error) {
      console.error('onChangeHandler ERROR', error);
    }
  }

  onValueChangeHandler(event: any) {
    event.preventDefault();
    console.info('onValueChangeHandler', event);
    try {
    } catch (error) {
      console.error('onValueChangeHandler ERROR', error);
    }
  }

  callbackHandler(name: string, data: any) {
    console.log('callbackHandler received', name, data);
  }

  // test of external render...
  renderFormGroup(data: MyFormGroupInterface) {
    const newFormGroup: JSX.Element = MyFormGroup(data);
    try {
      return ({newFormGroup})
    } catch (error) {
      console.error('renderFormGroup ERROR', error);
    }
  }

  renderInputNumber(el: FormElement, value: any, id: string) {
    console.log('renderInputNumber', el, value, id);
    try {
      return (
        <Row key={uuid()}>
          <label htmlFor={id}>{el.label}</label>
          <InputNumber
            key={uuid()}
            id={id}
            placeholder={el?.placeholder}
            name={el?.name}
            onValueChange={this.onValueChangeHandler}
          />
        </Row>
      );
    } catch (error) {
      console.error('renderInputNumber ERROR', error);
    }
  }

  renderInputText(el: FormElement, value: any, id: string) {
    console.log('renderInputText', el, value, id);
    try {
      return (
        <Row key={uuid()}>
          <label htmlFor={id}>{el.label}</label>
          <InputText
            id={id}
            key={uuid()}
            placeholder={el?.placeholder}
            name={el?.name}
            onChange={this.onChangeHandler}
            value={value}
          />
        </Row>
      );
    } catch (error) {
      console.error('renderInputText ERROR', error);
    }
  }

  renderInputTextArea(el: FormElement, value: any, id: string) {
    console.log('renderInputTextArea', el, value, id);
    try {
      return (
        <Row key={uuid()}>
          <label htmlFor={id}>{el.label}</label>
          <InputTextarea
            key={uuid()}
            rows={5}
            cols={30}
            value={value}
            name={el?.name}
            onChange={this.onValueChangeHandler}
          />
        </Row>
      );
    } catch (error) {
      console.error('renderInputTextArea ERROR', error);
    }
  }

  renderCalendar(el: FormElement, value: any, id: string) {
    console.log('renderCalendar', el, value, id);
    try {
      return (
        <Row key={uuid()}>
          <label htmlFor={id}>{el.label}</label>
          <Calendar
            inline
            onChange={(e) => this.onCalendarChangeHandler(e.value)}
          />
        </Row>
      );
    } catch (error) {
      console.error('renderInputTextArea ERROR', error);
    }
  }

  renderRawContent() {
    const { selectedform } = this.state;
    try {
      if (selectedform) {
        return (
          <div>
            <h3>Selected Forms Content</h3>
            <Card className="form-content">
              <pre>{JSON.stringify(selectedform, null, 2)}</pre>
            </Card>
          </div>
        );
      }
    } catch (error) {
      console.error('renderRaw Content ERROR', error);
    }
  }

  renderElement(el: FormElement, index: number) {
    console.log('renderElement', el, index);
    try {
      const elType = el.type;
      switch (elType) {
        case 'InputNumber':
          return this.renderInputNumber(el, '', `formelement-${index}`);
          break;
        case 'InputText':
          return this.renderInputText(el, '', `formelement-${index}`);
          break;
        case 'InputEmail':
          return this.renderInputText(el, '', `formelement-${index}`);
          break;
        case 'InputTextarea':
          return this.renderInputTextArea(el, '', `formelement-${index}`);
          break;
        case 'Calendar':
          return this.renderCalendar(el, '', `formelement-${index}`);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error('renderElement ERROR', error);
    }
  }

  renderForm() {
    let sResult = '';
    try {
      const { selectedform } = this.state;
      if (selectedform) {
        console.log('renderForm', selectedform);
        const els = selectedform.formelements;
        return (
          <React.Fragment>
            <h3>Please complete this form and click SEND</h3>
            {els.map((el: FormElement, index) => {
              return this.renderElement(el, index);
            })}
          </React.Fragment>
        );
      }
    } catch (error) {
      console.error('renderForm ERROR', error);
    }
  }

  renderFormsList() {
    try {
      const { forms } = this.state;
      return forms.map((form, index) => {
        return (
          <Card
            key={uuid()}
            className="form-item"
            id={form?.formid}
            onClick={this.onClickHandler}
          >
            <Container>
              <Row>
                <Col>
                  <div
                    className="form-item-detail"
                    title={`Id:${form?.formid}`}
                  >
                    <div className="form-name" title={`Description:${form?.formdescription}`}>{form?.formname}</div>
                    <div className="form-elements"></div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Card>
        );
      });
    } catch (error) {
      console.error('renderFormsList ERROR', error);
    }
  }

  render() {
    const { forms, selectedform } = this.state;
    let selectedformdisplay = '';
    if (!selectedform) {
      selectedformdisplay = 'hide';
    }
    return (
      <div className="thegarage">
        <Container fluid>
          <Row>
            <p>
              This is the <strong>TheGarage</strong> Component
            </p>
          </Row>
          <Row>
            <Col>
              <Container className={'form-list'}>
                <h3>Please select from this list...</h3>
                <div>{this.renderFormsList()}</div>
              </Container>
            </Col>
            <Col>
              <Container className={selectedformdisplay + ' form-render'}>
                {this.renderForm()}
                <Row>
                  <ButtonGroup>
                    <Button
                      id={selectedform?.formid}
                      as="input"
                      type="submit"
                      value="SEND"
                      onClick={this.onClickHandler}
                    />{' '}
                  </ButtonGroup>
                </Row>
              </Container>
            </Col>
            <Col md="3">{this.renderRawContent()}</Col>
          </Row>

          <Row>
            <Col>
              <p>
                This is the <strong>Dynamic Forms</strong> Component v1.0.0...
              </p>
              <p>
                Dynamic Forms is a simple React Component to load a library of
                Form Definitions from a json file, allow one to be selected,
                render it and send it
              </p>
              <p>
                To use, click one of the forms in 'Please select from this
                list...'
              </p>
              <p>Your rendered form will appear on the right</p>
              <p>Fill it in and hit SEND</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
