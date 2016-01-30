import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ProfileActions from 'actions/profiles'
import ProfileMain from 'components/profile/ProfileMain';
import ProfileHeader from 'components/profile/ProfileHeader';


/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
export default class Profile extends React.Component {
  render() {
    return (
      <div style={{margin:"auto",
							 marginTop:"5%",
							 width:"60%"}}>
					<ProfileHeader addProfile={this.props.actions.addProfile}/>
					<ProfileMain profiles={this.props.profiles} actions={this.props.actions}/>
				</div>
    );
  }
}


function mapStateToProps(state){
	return {
		profiles: state.profiles.profiles
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(ProfileActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
