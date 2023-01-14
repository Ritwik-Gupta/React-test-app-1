import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './InputForm.css'
import { useState } from 'react';

const InputForm = (props) => {
    const [age, updateAge] = useState("");
    const [fullname, updateFullname] = useState("");

    const updateAgeHandler = (event) => {
        updateAge(event.target.value);
        console.log(age);
    }

    const updateFullnameHandler = (event) => {
        updateFullname(event.target.value);
        console.log(fullname);
    }

    const SubmitFormHandler = (event) => {
        event.preventDefault();
        const userInfo = {
            "fname" : fullname.split(" ")[0],
            "lname" : fullname.split(" ")[1],
            "Age" : age
        }
        props.addNewUser(userInfo);
    }
    return (
        <Form className='myForm' onSubmit={SubmitFormHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="username" placeholder="Enter Username" value={fullname} onChange={updateFullnameHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Age (Years)</Form.Label>
            <Form.Control type="age" placeholder="Enter Age" value={age} onChange={updateAgeHandler} />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
}

export default InputForm;