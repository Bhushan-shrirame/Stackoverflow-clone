import React from 'react'
import {useLocation , useNavigate, useSearchParams} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import {useSelector} from 'react-redux'



const HomeMainbar = () => {


    const location = useLocation()
    const user = 1;
    const navigate = useNavigate()

    const questionsList = useSelector(state => state.questionReducer)
    
    const checkAuth = () => {
      if(user === null){
        alert("login or signup to ask a question")
        navigate('/Auth')
      }else{
        navigate('/AskQuestion')
      }

    }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
         {
          location.pathname === '/' ? <h1>Top Question</h1> : <h1> All Question</h1>
         }
         <button to='./AskQuestion' onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ? <h1>Loading...</h1> : 
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList ={questionsList.data} />
          </>
        }
      </div>
      
    </div> 
    
  )
}

export default HomeMainbar