import {useParams} from "react-router-dom";

const UserDetailPage = () => {
    const params = useParams();
    return (
        <div>
            <h1>Информация о пользователе c id: {params.id}</h1>
        </div>
    );
};

export default UserDetailPage;