import { ADD_PROFILE, 
  DELETE_PROFILE, 
  EDIT_PROFILE, EDIT_TEXT, 
  EDIT_STAT, COMPLETE_PROFILE, 
  COMPLETE_ALL, CLEAR_COMPLETED } from 'constants'


  export default function profiles (state = {
  profiles:[]
} , action) {

  switch (action.type){
    case ADD_PROFILE:
    return {
       profiles: [...state.profiles, Object.assign({}, state.profiles,  {
                  id: action.id,
                  completed: false,
                  text: action.text,
                  stat: action.stat 
                  }) ]
        }         
        

    case DELETE_PROFILE:
      return  {
          profiles: [...state.profiles.filter(profile=>{
             return profile.id !== action.id
          })

          ]
        }
     

    case EDIT_TEXT:
      return {



        profiles: [...state.profiles.map(profile =>
          profile.id === action.id ?
            Object.assign({}, profile, {text:action.text}) : profile
        )]

      }
    case EDIT_STAT:  
     
       return {
        profiles:  [...state.profiles.map(profile =>
          profile.id === action.id ?
            Object.assign({}, profile, {stat:action.stat}) : profile
          )]

       }

    case EDIT_PROFILE:
      return {
        profiles: [...state.map(profile =>
        profile.id === action.id ? Object.assign({}, profile, {text: action.text,
        stat: action.stat}) :profile)  ]

      }

    case COMPLETE_PROFILE:
      return state.map(profile =>
          profile.id === action.id ?
          Object.assign({}, profile, {completed: !profile.completed}):
          profile
        )  

    case COMPLETE_ALL:
      const areAllMarked = state.every(profile => profile.completed)
      return state.map(profile => Object.assign({}, profile, {
        completed: !areAllMarked
      }))  

    case CLEAR_COMPLETED:
      return state.filter(profile => profile.completed === false)  

    default:
      return state  
  }
}
