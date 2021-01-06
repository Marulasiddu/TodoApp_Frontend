import { combineReducers } from 'redux';
import { reducer as todoReducer} from './todo';
import { reducer as alltodoReducer} from './gettodos';
import { reducer as errorReducer} from './ErrorReducer';
import { reducer as updateReduer } from './updatetodoReducer'

const rootReducer = combineReducers({
    todo: todoReducer,
    alltodo: alltodoReducer,
    errors: errorReducer,
    updatetodo: updateReduer
})

export default rootReducer;