import React from 'react'
import {useLocation , useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import {useSelector} from 'react-redux'
import KommunicateChat from '../../chat'

import {auth} from '/Stackoverflow-clone/client/src/pages/UserProfile/firebase.js'
import {useAuthState} from "react-firebase-hooks/auth"

const HomeMainbar = () => {


    const location = useLocation()
    const users = 1;
    const navigate = useNavigate()

    const questionsList = useSelector(state => state.questionReducer)
    
    const [user , loading ] = useAuthState(auth);
    
    console.log(user)
 
    const checkAuth = () => {
      if(users === null){
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
      {
        user && <KommunicateChat/>
      }
      
    </div> 
    
  )
}

export default HomeMainbar