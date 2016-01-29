import * as types from 'constants'
import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';

function makeProfileRequest(method, data, api='/api/profile') {
	 return fetch(api, {
    method: method,
    credentials: 'same-origin',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

}

function createProfile(data){
     return { type: types.ADD_PROFILE, 
      id: data.id,
      text: data.text, 
      stat: data.stat }
}

function destroyProfile(id){
  return {type: types.DELETE_PROFILE,
          id: id}
}

function updateProfile(data){
   return {
              type: types.EDIT_PROFILE, 
              id:data.id, 
              text:data.text 
          }
}

function updateText(data){
    return {
      type: types.EDIT_TEXT, 
          id:data.id, 
          text:data.text
        }
}

function updateStat(data){
    return {
      type: types.EDIT_STAT, 
      id:data.id, 
      stat:data.stat
    }
}


export function addProfile(profile) {

return dispatch => {
    
    if (profile.text.trim().length <= 0) return;
    
   let data = {
      id: Date.now().toString(),
      stat: profile.stat,
      text: profile.text
    };

   dispatch(createProfile(data));

    return makeProfileRequest('post', data);
   
  };

}

export function deleteProfile(id) {
  return dispatch => {  
          dispatch(destroyProfile(id ))
          return makeProfileRequest('delete', {
            id: id
          })
    }
}

export function editProfile(id, text) {
  
   return dispatch =>{

        let data = {
          id: id,
          text: text
        }

        dispatch(updateProfile(data))
        return makeProfileRequest('put', data)
      }
  
}

export function editText(id,text){
	return dispatch => {

      let data = {
        id: id,
        text: text
      }

      dispatch(updateText(data))
      return makeProfileRequest('put', data)
  }
}

export function editStat(id,stat){
	return dispatch => {
      
      let data = {
        id: id,
        stat: stat
      }

      dispatch(updateStat(data))
      return makeProfileRequest('put', data)
  }
}

export function completeProfile(id) {
  return { type: types.COMPLETE_PROFILE, id }
}

export function completeAll() {
  return { type: types.COMPLETE_ALL }
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED }
}
