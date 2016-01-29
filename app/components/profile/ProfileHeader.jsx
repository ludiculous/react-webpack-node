import React, {PropTypes, Component} from 'react'
import ProfileHeaderInput from './ProfileHeaderInput'

export default class ProfileHeader extends Component{
	handleSave(data){
		console.log(data)
		if(data.length !==0 ){
			this.props.addProfile(data)
		}
	}

	render(){
		return(
			<header>
				<ProfileHeaderInput style={{border:"2px"}} onSave={this.handleSave.bind(this)}
							placeholder="List Your Strengths"/>
			</header>
			)
	}
}

