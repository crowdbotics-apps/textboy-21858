import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn13161610Reducer from '../features/SignIn13161610/redux/reducers'
import SignIn24161609Reducer from '../features/SignIn24161609/redux/reducers'
import SignIn46161607Reducer from '../features/SignIn46161607/redux/reducers'
import SignIn57161606Reducer from '../features/SignIn57161606/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn13161610: SignIn13161610Reducer,
SignIn24161609: SignIn24161609Reducer,
SignIn46161607: SignIn46161607Reducer,
SignIn57161606: SignIn57161606Reducer,

});