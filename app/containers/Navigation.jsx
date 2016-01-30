import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';
import styles from 'scss/components/_navigation';
<<<<<<< HEAD
import AppBar from 'material-ui/lib/app-bar'
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';




class Navigation extends Component {
  constructor(props){
    super(props);
    this.state ={
      open: false
    }
  }
  handleOpen =()=> {
  
    this.setState({
      open: true
    })
  }
  handleClose =()=> {
    this.setState({
      open: false
    })
  }


=======
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import AppBar from 'material-ui/lib/app-bar'

>>>>>>> f359b7bd4c521e2f645dfdc504e8aac7958a0415

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
<<<<<<< HEAD
      <div>
      <AppBar
=======
        <div>
         <AppBar
>>>>>>> f359b7bd4c521e2f645dfdc504e8aac7958a0415
    title="Tribes"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap={this.handleOpen}>
     
    </AppBar>
<<<<<<< HEAD


=======
        
>>>>>>> f359b7bd4c521e2f645dfdc504e8aac7958a0415
     <LeftNav width={200} open={this.state.open} docked={false} onRequestChange={this.handleClose}>
           { this.props.user.authenticated ? (
            <MenuItem><Link onClick={()=> dispatch(logOut())}
              className={styles.navigation__item} to="/">Logout</Link></MenuItem>
          ) : (
           <MenuItem><Link className={styles.navigation__item} to="/login">Log in</Link></MenuItem>
          )}
         
          <MenuItem><Link className={styles.navigation__item} to="/profile">Profile</Link></MenuItem>
<<<<<<< HEAD
         
          <MenuItem><Link to="/about" className={styles.navigation__item} activeClassName={styles['navigation__item--active']}>About</Link></MenuItem>
       </LeftNav>
     
      </div> 
=======
           <MenuItem><Link className={styles.navigation__item} to="/chart">Chart</Link></MenuItem>
          <MenuItem><Link to="/about" className={styles.navigation__item} activeClassName={styles['navigation__item--active']}>About</Link></MenuItem>
       </LeftNav>
          </div>
>>>>>>> f359b7bd4c521e2f645dfdc504e8aac7958a0415
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
