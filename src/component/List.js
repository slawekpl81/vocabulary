import React from 'react';
import Cart from "./Cart";

function List({words}) {
    return (
        <div>
            {words.map((word, ind) => <Cart key={ind} word={word}/>)}
        </div>
    );
}

export default List;