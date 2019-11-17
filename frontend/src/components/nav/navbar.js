import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
    // this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
    //   this.props.logout();
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

//   getLinks() {
//       if (this.props.loggedIn) {
//         return (
//             <div>
//                 <Link to={'/tweets'}>All Tweets</Link>
//                 <Link to={'/profile'}>Profile</Link>
//                 <Link to={'/new_tweet'}>Write a Tweet</Link>
//                 <button onClick={this.logoutUser}>Logout</button>
//             </div>
//         );
//       } else {
//         return (
//             <div>
//                 <Link to={'/signup'}>Signup</Link>
//                 <Link to={'/login'}>Login</Link>
//             </div>
//         );
//       }
//   }

  render() {
      return (
        <div>
            <Link to={'/signup'}>Signup</Link>
            <Link to={'/login'}>Login</Link>
        </div>
      );
  }
}

export default NavBar;