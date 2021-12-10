import React, {useState} from 'react';

function AddCart({words, setWords}) {
    const [word, setWord] = useState('')
    const handleInput = (e) => {
        setWord(e.target.value)
    }
    const handleSave = () => {
        if (word.length > 0) setWords([...words, word])
        setWord('')
    }
    return (
        <div className="addCart">
            <p>add word</p>
            <p><input type="text" value={word} onChange={handleInput}/></p>
            <p>
                <button onClick={handleSave}>save</button>
            </p>
        </div>
    );
}

export default AddCart;