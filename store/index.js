import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  boardReference: [],
  finisher: [],
  solved: [],
  statusValidate: ''
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, boardReference: action.payload.boardReference }
    case 'SET_SOLVED':
      return { ...state, solved: action.payload.solved }
    case 'SET_STATUS':
      return { ...state, statusValidate: action.payload.statusValidate }
    default:
      return state
  }
}

const store = createStore(reducers, applyMiddleware(thunk))

export default store