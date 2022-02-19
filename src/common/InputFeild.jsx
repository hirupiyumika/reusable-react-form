import React from 'react';
import { Form } from 'react-bootstrap';

const InputFeild = ({label,type,onChange,placeholder}) => {
    return ( 
        <>
        <Form.Group>
        <Form.Label>{label}</Form.Label>
                <Form.Control
                    type={type}
                    placeholder={placeholder}  

                onChange={onChange}/>
        </Form.Group>
        </>
     );
}
 
export default InputFeild;