import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../actions/userActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Account.scss';

class Account extends Component {
  changeRoute = () => {
    this.forceUpdate();
  }

  returnGuessedCountries = () => {
    return this.props.usedCountries.map(country => {
      return <li key={country} className='correct-guess'>{country}</li>
    });
  }

  logoutUser = () => {
    localStorage.clear()
    this.props.signOut({});
  }

  render() {
    const { usedCountries, user } = this.props;
    const currentPoints = JSON.parse(localStorage.getItem('currentPoints'))

    return (
      <div className='Account'>
        <div className='account-area'>
          <NavLink to='/' onClick={this.changeRoute} className='back-button'></NavLink>
          <NavLink className='account-logout' to='/' onClick={this.logoutUser}>
            <div className='account-logout' >log out</div>
          </NavLink>
        </div>
        <div className='profile-image-container'>
          {/* <img alt='' className='profile-image' /> */}
        </div>
        <p className='profile-name'>{ user.name }</p>
        <div className='user-data'>
          <div className='account-data'>
            <div className='email-label'>email</div>
            <div className='email-text'>{user.email}</div>
          </div>
          <div className='extra-data'>
          </div>
        </div>
        <p className='user-points-label'>points</p>
        <div className='user-data'>
          <div className='points-data'>
            <div>total points</div>
            <div>{currentPoints}</div>
          </div>
        </div>
        {
          usedCountries.length > 1 &&
          <div>
            <p className='user-correct-guesses'>guessed countries</p>
            <div className='user-data'>
              <ul className='correct-guesses-list'>
                { this.returnGuessedCountries() }
              </ul>
            </div>
          </div>
        }
      </div>
    );
  }
}

export const mapStateToProps = ({ usedCountries, user }) => ({
  usedCountries,
  user
});

export const mapDispatchToProps = (dispatch) => ({
  signOut: (user) => dispatch(signOut(user))
})

Account.propTypes = {
  user: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
  usedCountries: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
