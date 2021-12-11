import React from 'react';
import Cart from "./Cart";

function List({words, setWords, learn}) {
    const removeWord = eng => {
        let temp = words.filter(word => word.split(' ')[0] !== eng)
        setWords(temp)
    }
    return (
        <div className="row">
            {words.map((word, ind) => word && <Cart key={ind}
                                            word={word}
                                            removeWord={removeWord}
                                            learn={learn}/>
            )}
        </div>
    );
}

export default List;