import { CAMERA_SELECTED, REMOVE_CAMERA } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case CAMERA_SELECTED:
            return { ...state, [action.payload.id]: action.payload }
        case REMOVE_CAMERA:
            let copy = Object.assign({}, state)
            delete copy[action.payload]
            return copy
        // WITH SPREAD OPERATOR:
        // let { [action.payload]: deletedItem, ...rest } = state
        // return rest
        default:
            return state;
    }
}