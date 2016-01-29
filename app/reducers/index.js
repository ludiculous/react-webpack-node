import { combineReducers } from 'redux';
import user from 'reducers/user';
import topic from 'reducers/topic';
import { routeReducer as routing } from 'redux-simple-router';
import profiles from 'reducers/profiles';
// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  profiles,    
  user,
  topic,
  routing
});

export default rootReducer;
