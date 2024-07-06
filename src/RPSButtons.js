import RPSButton from './RPSButton.js';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './recordSlice.js';

const moves = ['Rock', 'Paper', 'Scissors'];

export default function RPSButtons(props) {
    const records = useSelector(function (store) {
        return store.record.value;
    });
    const dispatch = useDispatch();
    return (
        <div>
            {moves.map((move) => (
                <RPSButton
                    key={move}
                    onClick={() => dispatch(add(move))}
                    move={move}
                    records={records.filter((record) => record.move === move)}
                />
            ))}
        </div>
    );
}
