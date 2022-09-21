import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { WorkDataReducer } from './features/workData'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  workData: WorkDataReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
