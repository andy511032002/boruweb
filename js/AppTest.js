let render = ReactDOM.render;
let browserHistory = ReactRouter.browserHistory;
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let IndexRoute = ReactRouter.IndexRoute;
let Link = ReactRouter.Link;

// import App from './components/App/index.js';


class AppTest extends React.Component{
	render(){
		<div> test!!! </div>

	}
}


// const App = (props) => (
// 	<div>  123  </div>
  // <div>
  //   <h1>React Router Tutorial</h1>
  //   <ul>
  //     <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
  //     <li><Link to="/about" activeStyle={{ color: 'green' }}>About</Link></li>
  //     <li><Link to="/repos/react-router" activeStyle={styles.active}>Repos</Link></li>
  //     <li><Link to="/user" activeClassName="active">User</Link></li>
  //     <li><NavLink to="/contacts">Contacts</NavLink></li>
  //   </ul>
  //   // {props.children}
    
  // </div>
// );


// render((
//     <Router history={browserHistory}>
//         <Route path="/" component={App}>
//             <Route path="about" component={About} />
//         </Route>
//     </Router>
// ), document.getElementById('App'));