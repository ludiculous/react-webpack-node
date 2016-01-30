import { combineReducers } from 'redux';
import user from 'reducers/user';
import topic from 'reducers/topic';
import profiles from 'reducers/profiles';
import { routeReducer as routing } from 'redux-simple-router';
import profiles from 'reducers/profiles';
// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
<<<<<<< HEAD
  profiles,
=======
  profiles,    
>>>>>>> f359b7bd4c521e2f645dfdc504e8aac7958a0415
  user,
  topic,
  routing
});

export default rootReducer;
