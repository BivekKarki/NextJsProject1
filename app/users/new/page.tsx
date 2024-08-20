import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

const NewUserPage = async() => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        // {cache: 'no-store'}   // disable caching
        {next: {revalidate: 10}}  //get data from the backend every 10 sec
    );
    const users : User[] = await res.json();



    return (
    <>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <ul>
            {users.map(user => 
                <li key={user.id}>{user.name}</li>
                )}
        </ul>
    </>
  )
}

export default NewUserPage