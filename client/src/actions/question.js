import * as api from '../api/index'

export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData)
        dispatch({ type: "POST_QUESTION", payload: data})
        dispatch(fetchAllQuestions())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllQuestions = () => async(dispatch) => {
    try {
         const {data} = await api.getAllQuestion()
         dispatch({type: 'FETCH_ALL_QUESTIONS',payload: data})
    } catch (error) {
        console.log(error)
        
    }
}