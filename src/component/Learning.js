import React, {useEffect, useState} from 'react';
import check from '../assets/test.png'
import correct from '../assets/check.png'
import incorrect from '../assets/incorrect.png'
import like from '../assets/like.png'

function Learning({word}) {
    const [eng, pl, url] = word.split(' ')
    const [inputWord, setInputWord] = useState('')
    const icons = [check, correct, incorrect, like]
    const [test, setTest] = useState(0)
    const handleInput = e => {
        setInputWord(e.target.value)
    }
    useEffect(() => {
        if (inputWord.length === 0) setTest(0)
        else if (eng === inputWord) setTest(3)
        else if (eng.startsWith(inputWord)) setTest(1)
        else setTest(2)
    }, [inputWord])
    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                    <img className="test-icon"
                    src={icons[test]} alt="" onClick={()=>setInputWord('')}/>
            </span>
            <input type="text" className="form-control" placeholder="type english word" aria-label="Username"
                   aria-describedby="basic-addon1"
                   value={inputWord}
                   onChange={handleInput}
            />
        </div>
    );
}

export default Learning;