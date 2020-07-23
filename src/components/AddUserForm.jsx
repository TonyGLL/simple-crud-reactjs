import React from 'react';

import { useForm } from 'react-hook-form';

const AddUserForm = props => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        // console.log(data);

        // Enviar Datos a funcion addUser()
        props.addUser(data);

        // Limpiar Datos
        e.target.reset();
    };

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <label>Name</label>
            <input 
                type="text" 
                name="name" 
                ref={
                    register({
                        required: { value: true, message: '*Field Required*' }
                    })
                }
            />

            <div>
                { errors?.name?.message }
            </div>

            <label>Username</label>
            <input 
                type="text" 
                name="username" 
                ref={
                    register({
                        required: { value: true, message: '*Field Required*' }
                    })
                }
            />
            
            <div>
                { errors?.username?.message }
            </div>

            <button type="submit">Add user</button>
        </form>
    );
}

export default AddUserForm;