import Form from 'react-bootstrap/Form';

export interface MyFormGroupInterface {
  groupclassname: string;
  groupcontrolid: string;
  label: string;
  controltype: string;
  controlplaceholder: string;
  textclassname: string;
  text: string;
}

/* Example of calling this function
_default () {
  groupclassname: 'mb-3';
  groupcontrolid: 'formBasicEmail';
  label: 'Email address';
  controltype: 'email';
  controlplaceholder: 'Enter email';
  textclassname: 'text-muted';
  text: 'We'll never share your email with anyone else.';
}
*/
export function MyFormGroup(data: MyFormGroupInterface) : JSX.Element {
  return (
    <Form.Group className={data.groupclassname} controlId={data.groupcontrolid}>
      <Form.Label>{data.label}</Form.Label>
      <Form.Control type={data.controltype} placeholder={data.controlplaceholder} />
      <Form.Text className={data.textclassname}>{data.text}</Form.Text>
    </Form.Group>
  );
}
