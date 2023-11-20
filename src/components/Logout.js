import React from 'react';

const h1styling = {
    color: 'white',
    backgroundColor: 'darkred'
}

class Logout extends React.Component {
  redirectToLogout = () => {
    
    const logoutUrl = 'https://sasidharnadipalli.github.io/logout2300/';
    window.location.href = logoutUrl;
  };

  render() {
    return (
      <button style={h1styling} onClick={this.redirectToLogout} class="btn d-block mx-auto my-3">
        <strong>Logout</strong>
      </button>
    );
  }
}

export default Logout;
