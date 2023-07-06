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
            <h1 data-testid="value-title">{count}</h1>
            <button onClick={onIncrement} data-testid='increment-btn'>Добавить</button>
            <button onClick={onDecrement} data-testid='decrement-btn'>Убавить</button>
        </div>
    );
};

export default Counter;