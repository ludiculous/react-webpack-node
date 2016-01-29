import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';
import styles from 'scss/components/_navigation';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import AppBar from 'material-ui/lib/app-bar'
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


class Navigation extends Component {
constructor(props){
    super(props);
    this.state ={
      open: false
    }
  }
  handleOpen(){
 
    this.setState({
      open: true
    })
  }
  handleClose(){
    this.setState({
      open: false
    })
  }
    
    
  render() {
    const { dispatch } = this.props;
    return (
        <div>
         <AppBar
    title="Tribes"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap={this.handleOpen}>
     
    </AppBar>
        
     <LeftNav width={200} open={this.state.open} docked={false} onRequestChange={this.handleClose}>
           { this.props.user.authenticated ? (
            <MenuItem><Link onClick={()=> dispatch(logOut())}
              className={styles.navigation__item} to="/">Logout</Link></MenuItem>
          ) : (
           <MenuItem><Link className={styles.navigation__item} to="/login">Log in</Link></MenuItem>
          )}
         
          <MenuItem><Link className={styles.navigation__item} to="/profile">Profile</Link></MenuItem>
           <MenuItem><Link className={styles.navigation__item} to="/chart">Chart</Link></MenuItem>
          <MenuItem><Link to="/about" className={styles.navigation__item} activeClassName={styles['navigation__item--active']}>About</Link></MenuItem>
       </LeftNav>
          </div>
    );
  }

}

Navigation.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Navigation);
