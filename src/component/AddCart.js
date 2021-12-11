import React, {useState} from 'react';

function AddCart({words, setWords}) {
    const [word, setWord] = useState('')
    const [url, setUrl] = useState('');
    const handleInputWord = e => {
        setWord(e.target.value)
    }
    const handleInputUrl = e => {
        setUrl(e.target.value)
    }
    const handleSave = () => {
        let temp
        if (word.length > 0) {
            temp = word + ' ' + url

            setWords([...words, temp])
            setWord('')
            setUrl('')
        }
    }
    const handleClear = () => {
        setWord('')
        setUrl('')
    }
    const handlePasteFromClipboard = () => {
        navigator.clipboard.readText()
            .then(text => setUrl(text))
    }
    return (
        <div className="col p-2 rounded mb-1 addCart my-shadow">
            <h2><span className="badge bg-secondary">add word</span></h2>
            <div className="input-group input-group-sm mb-3">

                <span className="input-group-text" id="inputGroup-words">words</span>
                <input type="text" className="form-control" aria-label="words"
                       aria-describedby="inputGroup-words"
                       value={word}
                       onChange={handleInputWord}
                       placeholder="cat kot"/>
            </div>
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-path">url</span>
                <input type="url" className="form-control" aria-label="url path"
                       aria-describedby="inputGroup-path"
                       value={url}
                       onChange={handleInputUrl}
                       placeholder="http://..."/>
                <button className="btn btn-secondary"
                        onClick={handlePasteFromClipboard}
                >paste url
                </button>
            </div>
            <p>
                <button onClick={handleSave}
                        className="btn btn-primary m-1"
                >save
                </button>
                <button
                    className="btn btn-primary m-1"
                    onClick={handleClear}>clear
                </button>
            </p>
        </div>
    );
}

export default AddCart;