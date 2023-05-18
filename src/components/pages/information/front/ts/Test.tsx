import React, {useState} from 'react';

const initialUsers = [
    {
       nick: "Invitado",
       access: 30,
       avatar: "/img/pepe.png"
    },
    {
       nick: "Invitado2",
       access: 33,
       avatar: "/img/pepe33.png"
    }
]
 
interface User {
    nick: string,
    access: number,
    avatar: string
}

const Test = (): JSX.Element => {

    const [userData, setUserData] = useState<User[]>(initialUsers)

    return (
        <ul>
           {userData.map((user) => {
              return (
                <React.Fragment key={user.nick}>
                        <li>Nick: {user.nick}</li>
                        <li>Access Lvl: {user.access}</li>
                        <li>Avatar Url: {user.avatar}</li>
                </React.Fragment>
              )
           })}
        </ul>
    )
}

export default Test;



