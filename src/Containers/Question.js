import { useParams } from 'react-router-dom';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function Question() {
    
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    const [qNo, setQNo] = useState(0)
    const { ctg } = useParams()
    const [questions, setQuestions] = useState([])
    const [options, setOptions] = useState([])
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);

    useEffect(()=>{
        axios.get(`https://opentdb.com/api.php?amount=10&category=${ctg}&difficulty=easy&type=multiple`)        
    .then(res=>{
        dispatch({type: "UPDATEDATA",results: (res.data.results)})
        setQuestions(res.data.results)
    })
    }, [])
    useEffect(() => {
        (questions[qNo]) ? setOptions([...questions[qNo].incorrect_answers, questions[qNo].correct_answer].sort()) : setOptions([])
    }, [qNo, questions])
    const onChangeValue = (e) => {
        setSelectedOption(e.target.value)
    }
    const showScore = (e) => {
        if (qNo < 8) {
            if (selectedOption == questions[qNo].correct_answer) {
                setScore(score + 1)
            }
            setQNo((qNo + 1))

        }
        else if (qNo < 9) {
            if (selectedOption == questions[qNo].correct_answer) {
                setScore(score + 1)
            }
            setQNo((qNo + 1))

        }
        else {
            if (selectedOption == questions[qNo].correct_answer) {
                setScore(score + 1)
            }

            e.target.setAttribute('disabled', "disabled")
        }
    }
    return (

        <div className="container mt-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-10 col-lg-10">
                    <div className="border">
                        <div className="question bg-white p-3 border-bottom">
                            <div className="d-flex flex-row justify-content-between align-items-center mcq">
                                <h4>{(questions[qNo]) ? questions[qNo].category : 'undefined'} </h4><span>({qNo + 1} of 10)</span>
                            </div>
                        </div>
                        <div className="question bg-white p-3 border-bottom">
                            <div className="d-flex flex-row align-items-center question-title">
                                <h3 className="text-danger">Q.</h3>
                                <h5 className="mt-1 ml-2">{(questions[qNo]) ? questions[qNo].question : 'undefined'}</h5>
                            </div>
                            {

                                (questions[qNo]) ?

                                    options.map((opt, i) => {
                                        return (
                                            <div key={i} className="ans ml-2" onChange={onChangeValue}>
                                                <label className="radio"> <input type="radio" name="yourAns" value={opt} /> <span>{opt}</span>
                                                </label>
                                            </div>
                                        )
                                    })
                                    : 'undefined'

                            }

                        </div>
                        <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                            <button onClick={showScore} className="btn btn-primary border-success align-items-center btn-success" type="button">
                                Next
                                <i className="fa fa-angle-right ml-2"></i>
                            </button>                            
                        </div>
                    </div>
                    <h1>Score==={'>'}{score+"\n"
                    // +(questions[qNo]) ? questions[qNo].correct_answer: " "
                    }
                    </h1>
                </div>
            </div>
            
        </div>
    )
}
export default Question;