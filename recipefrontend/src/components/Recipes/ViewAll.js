import React from 'react';
<<<<<<< HEAD
import ViewRecipe from './ViewRecipe';
import { Link, Route, Switch } from 'react-router-dom'

import PropTypes from 'prop-types';

import withAuth from '../../lib/withAuth';

const propTypes = {
  myRecipes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

const defaultProps = {
  myRecipes: [],
};

class MyRecipes extends React.Component {
  static async getInitialProps({ req, res }) {
    if (req && !req.user) {
      res.redirect('/login');
      return { myRecipes: [] };
    }

    const headers = {};
    if (req && req.headers && req.headers.cookie) {
      headers.cookie = req.headers.cookie;
    }

    const { myRecipes } = await getRecipeList({ headers });
    return { myRecipes };
  }

  render() {
    const { myRecipes } = this.props;

    return (
      <div>
        <Head>
          <title>My Recipes</title>
        </Head>
        <div style={{ padding: '10px 45px' }}>
          {myRecipes && myRecipes.length > 0 ? (
            <div>
              <h3>Your recipes</h3>
              <ul>
                {myRecipes.map((recipe) => (
                  <li key={recipe._id}>
                    <Link
                      as={`/recipes/${recipe.slug}/introduction`}
                      href={`/public/read-chapter?bookSlug=${book.slug}&chapterSlug=introduction`}
                    >
                      <a>{recipe.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h3>Your recipes</h3>
              <p>You don't have any recipes.</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

MyRecipes.propTypes = propTypes;
MyRecipes.defaultProps = defaultProps;

export default withAuth(MyRecipes);

//  table to display list of recipes
// export default class Table extends React.Component {
 
//    constructor(props){
//    super(props);
//    this.getHeader = this.getHeader.bind(this);
//    this.getRowsData = this.getRowsData.bind(this);
//    this.getKeys = this.getKeys.bind(this);
//    }
   
//    getKeys = function(){
//       return Object.keys(this.props.data[0]);
//    }
   
//    getHeader = function(){
//       var keys = this.getKeys();
//       return keys.map((key, index)=>{
//       return <th key={key}>{key.toUpperCase()}</th>
//       })
//    }
   
//    getRowsData = function(){
//       return props.keys.map((key, index)=>{
//          return <td key={props.data[key]}>{props.data[key]}</td>
//          })
//    }
   
//    render() {
//     return (
//       <div>
//          <table>
//          <thead>
//             <tr>{this.getHeader()}</tr>
//          </thead>
//          <tbody>
//             {this.getRowsData()}
//          </tbody>
//          </table>
//       </div>
//    );
//    }
//    } const RenderRow = (props) =>{
//      return props.keys.map((key, index)=>{
//       return <td key={props.data[key]}>{props.data[key]}</td>
//      })  
//   }

// const ViewAll = displayRecipes() {
//         return (this.state.recipes.map((recipe, index) => {
//            const { id, name } = recipe 
//            return (
//               <tr key={id}>
//                  <td>{id}</td>
//                  <td>{name}</td>
//               </tr>
//            )
//         })
  
//      render() {
//         return (
//            <div>
//               <h1 id='title'>My Recipes</h1>
//               <table id='recipes'>
//                  <tbody>
//                     {this.displayRecipes()}
//                  </tbody>
//               </table>
//            </div>
//         )
//     }
// }
  
// export default ViewAll;
=======
import { Table, Button } from 'reactstrap';
import Navbar from './Navbar';
import ViewRecipe from './ViewRecipe';
import RecipeTable from './RecipeTable';
// import Authorization from 'Authorization';



const ViewAll  = (props) => {
    return(
        <Container>
            <Row>
                <Col md='3'>
                    <CreateRecipe fetchRecipes={fectchRecipes} token={props.token} />
                </Col>
                <Col md='9'>
                    <RecipeTable recipes={recipes} fectchRecipes={fetchRecipes} token={props.token}/>
                </Col>
                </Row>
        </Container>
    )
}

export default ViewAll;
>>>>>>> e72d65ebcc1408be68c3d103e907515c06aaab08
