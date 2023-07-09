import {useEffect, useState} from "react";
import User from "./User";

const UsersE2E = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setUsers(data);
                    setIsLoading(false)
                }, 1000)
            })
    }, [])

    const onDelete = (id) => {
        setUsers(prevState => prevState.filter(user => user.id !== id))
    }

    return (
        <div>
            {isLoading && <h1 id={'loading'}>Идет загрузка...</h1> }
            { users.length && !isLoading &&
                <div id={'users-list'}>
                    { users.map(user => <User key={`user-${user.id}`} onDelete={onDelete} user={user}/>) }
                </div>
            }
        </div>
    );
};

export default UsersE2E;