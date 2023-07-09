import {useState} from "react";
import UsersE2E from "../../components/UsersE2E/UsersE2E";

const HelloPage = () => {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');

    const handleChange = (e) => {setValue(e.target.value)};
    const handleClick = () => {setVisible(prevState => !prevState)};

    return (
        <div>
            <input id={"helloInput"} onChange={handleChange} value={value} />
            <button id={"helloBtn"} onClick={handleClick}>Hello World</button>
            {
                visible && value === 'hello' &&
                <h3 id={"helloTitle"} onChange={handleChange}>Hello WRLD</h3>
            }

            <UsersE2E />
        </div>
    );
};

export default HelloPage;