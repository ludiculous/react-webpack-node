import React, { Component, PropTypes } from 'react';
import ProfileItem from './ProfileItem';
import Checkbox from 'material-ui/lib/checkbox';


export default class ProfileMain extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }


 renderToggleAll(completedCount) {
    const {profiles, actions} = this.props
   
  }

  render() {
    const{ profiles, actions} = this.props

    const completedCount = profiles.reduce((count,profile)=>
        profile.completed ? count + 1 : count,
        0
      )


    
    return (
      <section>
      <div style={{marginBottom:"20px"}}>
      {this.renderToggleAll(completedCount)}
      </div>

        <ul style={{marginLeft:"20px", marginBottom:"20px"}}>
          {profiles.map(profile =>
            <ProfileItem key={profile.id} profiles={profile} {...actions}/>
            )}
        </ul>
     
        <section>
        
        </section>

      </section>
    )
  }
}


