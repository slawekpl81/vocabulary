import React from 'react';

function LearnButton({learn, setLearn}) {
    const handleLearning = () => {
        setLearn(!learn)
    }
    return (
        <div className="col position-relative">
            <button
                className="btn btn-info position-absolute top-50 start-50 translate-middle my-shadow"
                onClick={handleLearning}>
                translate
            </button>
        </div>

    );
}

export default LearnButton;