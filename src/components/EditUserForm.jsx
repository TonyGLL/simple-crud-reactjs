import React from 'react';

import { useForm } from 'react-hook-form';

const EditUserForm = props => {

    // console.log(props.currentUser.name);
    // console.log(props.currentUser.username);

    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: props.currentUser
    });
    
    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);


    const onSubmit = (data, e) => {
        // console.log(data);

        data.id = props.currentUser.id;

        // Enviar Datos a funcion updateUser()
        props.updateUser(props.currentUser.id, data);

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

            <button type="submit">Edit user</button>
        </form>
    );
}

export default EditUserForm;