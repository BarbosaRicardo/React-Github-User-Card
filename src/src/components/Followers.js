import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class Followers extends React.Component {
   /**
    * This is the first phase in the component lifecycle.
    * constructor is called in the initialization 
    * of a class.
    */
   contructor() {
      //super is called to inherit methods from React.Component
      super();
      this.state={
         followerdata: [] //initializes empty array
      }
   }

   //
   componentDidMount() {
      //call axios
      axios
         .get(`https://api.github.com/users/barbosaricardo/followers`)
         // setState in the promise 
         .then(res => {
            this.setState({
               followerdata: res.data
            }); //end of setState in promise

            //console.log res.data
            console.log(res.data);
         }); // end of promise
         //catch error (what is the purpose of this??)
         .catch(err => console.log(err, 'Data does no exist'));
         
   
   
   }
}