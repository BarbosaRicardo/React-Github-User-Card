import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Profile extends React.Component {
   constructor() {
      super();
      this.state={
         myData: {}
      }
   }

   /**
    * MOUNTING CYCLE
    * Commit phase
    */
   componentDidMount() {
      axios
         .get(`https://api.github.com/users/barbosaricardo`)

         /**
          * UPDATING CYCLE
          * Render Phase
          * setState will cause a render to the DOM 
          * promise.
          */
         .then(res=> {
            this.setState({
               myData: res.data
            })
           
         }); // end of setState in promise
         // .catch(err => {err, 'Data not found'});
   }

   /**
    * MOUNTING/UPDATING CYCLE
    * Render Phase
    */
   render() {
      return(
         <div className='profile-container'>
            <img 
               src={this.state.myData.avatar_url}
               alt={this.state.myData.name} />
            <h2>{this.state.myData.name}</h2>
            <h2>{this.state.myData.login}</h2>
            <p>Github URL: 
               <a href={this.state.myData.url}>
                  {this.state.myData.html_url}
               </a>
            </p>
            <p>
               Followers: {this.state.myData.followers}
            </p>
            <p>
               Following: {this.state.myData.following}
            </p>

         </div>
      );// end of return statement
   }
}

//export of default function 
export default Profile;