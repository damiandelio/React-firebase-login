import React, { } from 'react';

import './Header.css';

const Header = ({ firebaseAuth, menuActive, menuHandler}) => {
  let classMenu = 'menu';
  if (menuActive) {
    classMenu += ' menu-active';
  }

  return (
    <div className="Header">
      <div className="menuButton" onClick={menuHandler}>menu</div>
      <nav className={classMenu}>
        <img
          className="profile-photo"
          alt="profile"
          src={firebaseAuth.currentUser.photoURL}
        />
        <h3>{firebaseAuth.currentUser.displayName}</h3>
        <button onClick={() => firebaseAuth.signOut()}>Sign out</button>
      </nav>
    </div>
  )
}

export default Header;