import {useDispatch, useSelector} from "react-redux";
import {getCounterValue} from "../../store/reducers/selectors/getCounterValue/getCounterValue";
import {incremented, decremented} from "../../store/reducers/counterReducer";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(getCounterValue);

    const onIncrement = () => {
        dispatch(incremented());
    }
    const onDecrement = () => {
        dispatch(decremented())
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrement}>Добавить</button>
            <button onClick={onDecrement}>Убавить</button>
        </div>
    );
};

export default Counter;