import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

const UserForm = () => {
    const [username, setUsername] = useState('');

    const [addUser, { error }] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data}  = await addUser({
                variables: { username },
            });

            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };

    return (

// whats to be returned to add the user
<div>

</div>

    );
};

export default UserForm;