import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'

import Authorization from './Authorization'

const Home = (props) => {
    return ( 
        <div className="home">
           <div>
               <h1>Welcome, would you like to create a recipe?</h1>
           </div>
           
           <div>
               <Link to='/recipepage'>Next Page</Link>
           </div>

             
        </div>
     );
}
 
export default Home;