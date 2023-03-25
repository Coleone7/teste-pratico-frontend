import React, {useState, useEffect}  from "react"
import './user.css'

const User = ({idUser}) => {
    const [user, getUsers] = useState([])

    useEffect (()=>{

        fetch (`https://jsonplaceholder.typicode.com/users/${idUser}`)
        .then (response => response.json())
        .then (data=> {
            getUsers (data)
        }, [idUser])
    })

    return(

        <div className="user-body">

            <div className="flex">
                <ul className=" flex ul-username">
                    <li className="username">
                        {user && <h2>{user.username}</h2>}
                    </li>
                </ul>
            </div>
            
            <div>
                <ul className="user-info">
                    <li>
                        {user && <p>{user.name}</p>}
                    </li>
                    <li>
                        {user && <p>{user.email}</p>}
                    </li>
                </ul>
            </div>

        </div> 
        
    )
}


export default User