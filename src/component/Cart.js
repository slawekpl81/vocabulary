import React, {useEffect, useState} from 'react';
import eye from '../assets/show.png';
import hide from '../assets/hide.png';
import trash from '../assets/trash.png';
import Learning from './Learning'

function Cart({word, removeWord, learn}) {
    const [eng, pl, url] = word.split(' ')
    const [show, setShow] = useState(false)
    useEffect(() => setShow(learn), [learn])

    return (
        <div className="card m-1 my-shadow" style={{width: "15rem"}}>
            <img src={url} className="card-img-top" alt="..."/>
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">
                    {show ?
                        <span className="badge rounded-pill bg-warning text-dark">{pl}</span>
                        :
                        <span className="badge rounded-pill bg-info text-dark">{eng}</span>}
                </h5>
                <Learning word={word}/>
                <div>
                    <button
                        className="btn btn-secondary m-1"
                        onClick={() => setShow(!show)}>
                        <img src={show ? eye : hide} alt=""/>
                    </button>
                    <button
                        className="btn btn-danger m-1"
                        onClick={() => removeWord(eng)}>
                        <img src={trash} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
