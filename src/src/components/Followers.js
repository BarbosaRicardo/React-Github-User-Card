import React from 'react'
import ReactDOM from 'react-dom' //is this being used?
import axios from 'axios'

class Followers extends React.Component {
   /**
    * This is the first phase in the component lifecycle.
    * constructor is called in the initialization 
    * of a class.
    * not 100% required to use constructor however
    */
   constructor() {
      //super is called to inherit methods from React.Component
      super();
      this.state={
         followerData: [] //initializes empty array
      }
   }

   /**
    * MOUNTING CYCLE
    * Commit Phase: 
    * can work with DOM, run side effects, schedule updates
    */
   componentDidMount() {
      //call axios
      axios
         .get(`https://api.github.com/users/barbosaricardo/followers`)
         
         /**
          * UPDATING CYCLE
          * Render Phase:
          * setState will cause render
          */ 
         .then(res => {
            this.setState({
               followerData: res.data
            }); //end of setState in promise

            //console.log res.data
            console.log(res.data);
         }); // end of promise
         //catch error (what is the purpose of this??)
         //I am getting an error, went ahead and commented it out 
         // .catch(err => console.log(err, 'Data does no exist'));
   }

   /**
    * MOUNTING/UPDATING CYCLE
    * Render Phase:
    */
   render() {
      return (
         //for styling purposes name the class
         <div className='follower-container'> 
            {this.state.followerData.map(follower=> (
               <div className='cards' key={follower.id}>
                  <img src={follower.avatar_url} />
                  <h2>{follower.login}</h2>
                  <p>Github URL:
                     <a href={follower.url}>{follower.html_url}</a>
                  </p>
               </div>
            ))}
         </div>
      );// end of return statement
   }
}

//export of default **component function**
export default Followers;