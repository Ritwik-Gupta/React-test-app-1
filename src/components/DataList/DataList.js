import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import "./DataList.css"

const DataList = (props) => {
    const userList = props.userListData;

    const [currentUserId, DeleteUser] = useState(1);

    const DeleteUserHandler = () => {
        DeleteUser()
    }

    const returnData = 
        userList.map(user =>
            <ListGroup key={user._id} variant="flush">
                <ListGroup.Item>
                    <Container>
                        <Row>
                            <Col xs={10}>
                                <p>Id: {user._id}</p>
                                <p>Username: {user.fname} {user.lname}</p>
                                <p>Age: {user.Age}</p>  
                            </Col>
                            <Col>
                                <Button onClick={DeleteUserHandler} currentUserId={user._id}>Delete</Button>
                            </Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
            </ListGroup>
        )
    return (
        <Card className='centeralign' style={{ width: '50vw', margin:"auto" }}>
            {returnData}
        </Card>
    );
}

export default DataList;