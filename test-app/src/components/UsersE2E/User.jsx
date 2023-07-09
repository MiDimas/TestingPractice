

const User = ({user, onDelete}) => {
    return (
        <div>
            <span>{user.name}</span>
            <button id={`delete-user-${user.id}`} onClick={() => onDelete(user.id)}>Удалить пользователя</button>
        </div>
    );
};

export default User;