import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../actions/userActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Account.scss';

export class Account extends Component {
  constructor(){
    super()
  }
  changeRoute = () => {
    this.forceUpdate();
  }

  logoutUser = () => {
    this.props.signOut({});
  }

  render() {
    const { user, totalPoints } = this.props
    return (
      <div className='Account'>
        <div className='account-area'>
          <NavLink to='/' onClick={this.changeRoute} className='back-button'></NavLink>
          <div className='account-logout' onClick={this.logoutUser} >log out</div>
        </div>
        <div className='profile-image-container'>
        </div>
        <div className='user-data'>
          <p className='profile-name'>{user.name}</p>
          <div className='points-container'>
            <div className='points-label'>points</div>
            <div className='points-number'>{totalPoints}</div>
          </div>
          <div className='account-data'>
            <div className='email-label'>email</div>
            <div className='email-text'>{user.email}</div>
          </div>
          <div className='extra-data'>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  signOut: (user) => dispatch(signOut(user))
})

Account.propTypes = {
  user: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps) (Account);

