import React,{ useState } from 'react'
import { Button,Form,Row } from 'react-bootstrap'; 
import InputFeild from './common/InputFeild';


const Forms = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (event) => {
        event.preventDefault();
    console.log(username,password)
    }

    return ( 
        <>
             <div style={{padding: '5%'}}>
                <Row className="justify-content-md-center">  
                    <h2>Form Component</h2>
                </Row>
 
                <Row className="justify-content-md-center" style={{padding: '2%'}}>
                <Form onSubmit={onSubmit}>
                        <InputFeild
                            label="username"
                            type="text"
                            placeholder="Enter username"
                            onChange={(e)=> setUsername(e.target.value)}
                        />
                   <InputFeild
                            label="password"
                            type="password"
                            placeholder="Enter password"
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Row>
            </div>
        </>
     );
}
 
export default Forms;