import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './InputForm.css'

const SubmitFormHandler = () => {

}

const InputForm = () => {
    return (
        <Form className='myForm' onSubmit={SubmitFormHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="username" placeholder="Enter Username" />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Age (Years)</Form.Label>
            <Form.Control type="age" placeholder="Enter Age" />
            </Form.Group>
            
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
}

export default InputForm;