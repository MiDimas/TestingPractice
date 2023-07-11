const User = ({user, onDelete}) => {
    return (
        <div className={'user-item'}>
            <span>{user.name}</span>
            <button id={`delete-user`} onClick={() => onDelete(user.id)}>Удалить пользователя</button>
        </div>
    );
};

export default User;