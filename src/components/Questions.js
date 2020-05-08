import React, { useState, useEffect } from 'react'
import '../App.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import CancelScheduleSendIcon from '@material-ui/icons/CancelScheduleSend';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Loading from '../components/Loading'
import Correct from '../components/Correct'
import Score from '../components/Score'



const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    answer: {
        padding: '10px',
        margin: 'auto',
        width: '100%',
    },
    linkTextDecoration: {
        textDecoration: 'none'
    }
}));





export default function Questions() {

    const classes = useStyles();

    const [questions, setQuestions] = useState([])
    const [index, setIndex] = useState(0)
    const [loading, setLoading] = useState(false)
    const [finish, setFinish] = useState(false)
    const [next, setNext] = useState(true)
    const [score, setScore] = useState(0)
    const [correctStyle, setCorrectStyle] = useState(false)
    const [incorrect, setIncorrect] = useState(false)

    const fetchQuestions = async () => {
        const data = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
        const questions = await data.json()
        setQuestions(questions.results)
        setLoading(true)
    }

    useEffect(() => {
        fetchQuestions()
    }, [])

    const currentQuestion = questions[index]

    const nextQuestion = (e) => {
        setIndex(index + 1)
        if (index + 2 === questions.length) {
            setFinish(true)
            setNext(false)
        }
        setCorrectStyle(false)
    }

    const checkAnswer = (q) => {
        let currentAnswer = questions[index].correct_answer
        if (q.target.innerHTML === currentAnswer) {
            setScore(score + 1)
            setCorrectStyle(true)
        }
        else {
            setIncorrect(true)
        }

    }
    console.log('score dısarısı', score)

    return (
        <div className="question-container" >

            {!loading ?
                (<Loading />)
                : incorrect ?
                    (<Score score={score} />)
                    :
                    (<div className="question">
                        <div className="question-header">
                            <div className="question-counter">
                                <div><LiveHelpIcon /></div>
                                <div style={{ paddingLeft: '10px' }}>{index + 1} of {questions.length}</div>
                            </div>
                            <div><WatchLaterSharpIcon />
                            </div>
                        </div>
                        <div className="question-content">
                            <p>{currentQuestion && currentQuestion.question}</p>
                        </div>
                        <div>{correctStyle ?
                            <Correct />
                            :
                            (null)}
                        </div>
                        <div className="question-answer">
                            {currentQuestion && currentQuestion.incorrect_answers.map(answer =>
                                <div className="answer">
                                    <Button
                                        disabled={correctStyle}
                                        variant="contained"
                                        style={{ backgroundColor: '#d8345f' }}
                                        color="primary"
                                        className={classes.answer}
                                        onClick={checkAnswer}
                                    >
                                        {answer}
                                    </Button>
                                </div>
                            )}
                            <div className="answer">
                                <Button
                                    disabled={correctStyle}
                                    variant="contained"
                                    style={{ backgroundColor: correctStyle ? 'green' : '#d8345f' }}
                                    color="primary"
                                    className={classes.answer}
                                    onClick={checkAnswer}
                                >
                                    {currentQuestion && currentQuestion.correct_answer}
                                </Button>

                            </div>
                        </div>
                        <div className="next-question">
                            {next ?
                                <Button
                                    onClick={nextQuestion}
                                    variant="contained"
                                    style={{ backgroundColor: '#522d5b' }}
                                    color="primary"
                                    className={classes.button}
                                    endIcon={<NavigateNextIcon />}
                                >
                                    NEXT
                                    </Button> :
                                (null)}
                            {finish ?
                                (
                                    <Button
                                        variant="contained"
                                        style={{ backgroundColor: '#522d5b' }}
                                        color="primary"
                                        className={classes.button}
                                        endIcon={<CancelScheduleSendIcon />}
                                        onClick={() => setIncorrect(!incorrect)}
                                    >
                                        FINISH
                                    </Button>
                                )
                                :
                                (null)}
                        </div>
                    </div>)}
        </div>
    )
}

