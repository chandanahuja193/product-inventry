import React from "react";

const Header = ({history,currentUser}) => {

  const handleSignOut = () => {
    history.push('/login');
    localStorage.clear()
  }

  return (
    <div>
      <header>
        <h3>{`Hello ${currentUser.name}`}</h3>
        <div>
          <button type="button" 
          className="btn btn-info sign-out-button"
          onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
