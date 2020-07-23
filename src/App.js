import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {

  //-- Array de Prueba --//
  const userData = [
    { id: uuidv4(), name: 'Tony', username: 'toniki93' },
    { id: uuidv4(), name: 'Ernesto', username: 'askdjas93' },
    { id: uuidv4(), name: 'Marlon', username: 'alsdjas93' }
  ];

  //-- State --//
  const [ users, setUsers ] = useState(userData);

  //-- Agregar Usuario --//
  const addUser = user => {
    user.id = uuidv4();
    setUsers([
      ...users,
      user
    ]);
  };

  //-- Eliminar Usuario --//
  const deleteUser = id => {
    // console.log(id);

    // 1.) Filtrar array de usuarios sin el que corresponde al id obtenido
    const arrayFiltrado = users.filter(user => user.id !== id );

    // 2.) Enviar array filtrado
    setUsers(arrayFiltrado);
  };

  //-- Editar Usuario --//
  const [ editing, setEditing ] = useState(false);

  const [ currentUser, setCurrentUser ] = useState({
    id: null, name: '', username: ''
  });

  const editRow = user => {
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    });
  };

  const updateUser = (id, updateduser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateduser : user)));
  }
  
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

          {/* Si exite un useState editing en true que se muestre el componente EditUserForm en caso contrario que se muestre AddUserForm */}
          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm 
                  currentUser={ currentUser } 
                  updateUser={ updateUser }
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={ addUser } />
              </div>
            )
          }

        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
            users={users} 
            deleteUser={ deleteUser } 
            editRow={ editRow }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
