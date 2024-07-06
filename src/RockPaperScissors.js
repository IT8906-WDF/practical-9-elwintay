import { useReducer, useState } from 'react';
import RPSButtons from './RPSButtons.js';
import RPSInput from './RPSInput.js';
import RPSRecords from './RPSRecords.js';
import recordsReducer from './recordsReducer.js';
import { IsEmojiContext } from './IsEmojiContext.js';
import { Provider } from 'react-redux'
import store from './storage';

export default function RockPaperScissors(props) {
    const [records, dispatch] = useReducer(recordsReducer, []);
    const [isEmoji, setIsEmoji] = useState(false);
    return (
        <Provider store={store}>
            <IsEmojiContext.Provider value={isEmoji}>
                <div>
                    <h1>Play rock-paper-scissors with me!</h1>
                    <RPSButtons
                        onButtonPressed={(move) => {
                            dispatch({ name: 'add', move: move });
                        }}
                        records={records}
                    />
                    <RPSInput onAdd={(record) => dispatch({ name: 'force add', record: record })} />
                    <button
                        onClick={function () {
                            setIsEmoji(!isEmoji);
                        }}
                    >
                        Toggle Emoji
                    </button>
                    <RPSRecords
                        records={records}
                        onDeleteRecord={(index) => {
                            dispatch({ name: 'remove', index: index });
                        }}
                    />
                </div>
            </IsEmojiContext.Provider>
        </Provider>
    );
}
