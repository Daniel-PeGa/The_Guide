import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstap';

import Auth from '../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';

const LoginFrom = () => {
    const [userFormData, setUserFormData] = useState({
        email: '',
        password: ''
    });
    
    const [validated] = useState(false);
    cconst [showAlert, setShowAlert] = useState(false);
    const [loginUser] = useMutation(LOGIN_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const hadleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form. checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await loginUser({
                variables: { ...userFormData }
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.log('Theres an error!', err);
            setShowAlert(true);
        }

        setUserFormData({
            user: '',
            email: '',
            password: '',
        });
    };

    return (

// html and all its gotta get done!!!!!!!!

    )
}