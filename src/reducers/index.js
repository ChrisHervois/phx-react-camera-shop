import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form'
import CamerasReducer from './reducer_cameras'
import CartReducer from './reducer_cart'

const rootReducer = combineReducers({
    cameras: CamerasReducer,
    addToCart: CartReducer
    // form: formReducer
});

export default rootReducer;
