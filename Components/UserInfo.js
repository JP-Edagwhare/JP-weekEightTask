import React, { useState, useEffect} from 'react'
import axios from 'axios'

function UserData() {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then(response => { 
            setUsers(response.data.results)
        })
    })
        if(users){
            return (
                 users.map((users) => (
                    <section className="grid-item">
                        <img src = "https://source.unsplash.com/random/200x200?sig=3" alt = "" />
                        <ul>
                            <li key = {users}><h3><span>Name:</span><br></br>{users.name}</h3></li>
                            <li><p><span>Gender:</span><br></br>{users.gender}</p></li>
                            <li><p><span>Height:</span><br></br>{users.height}</p></li>
                        </ul>
                    </section>
                 )
              )
            )
        }
      return ( <p>{users}</p> )
}

export default UserData
