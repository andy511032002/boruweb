
const Router = window.ReactRouterDOM.BrowserRouter;
const Route = window.ReactRouterDOM.Route;
const IndexRoute = window.ReactRouterDOM.IndexRoute;
const Link = window.ReactRouterDOM.Link;
const browserHistory = window.ReactRouterDOM.browserHistory;
const HashRouter = window.ReactRouterDOM.HashRouter;

const NavLink =  window.ReactRouterDOM.NavLink;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;
const TransitionGroup = window.ReactTransitionGroup.TransitionGroup;
const CSSTransition = window.ReactTransitionGroup.CSSTransition;
//some classes 

function test(){
  console.log("test");
}
class RouterComponent extends React.Component{
  constructor(props) {
        super(props);
        // 设置 initial state
        // this.state = {
        //     text: props.initialValue || 'placeholder'
        // };
        this.handleChange = this.handleChange.bind(this);

    }

  handleChange(){
    console.log(11)
  }
  render() {

    return (
      <HashRouter >
          <div>
            <div className="Router-Area">
              <div className="Router-Frame">
                <div>
                  <div className="Router-LinkFrame">
                    <NavLink style={{fontSize: '20px'}} activeStyle={{ fontWeight: 'bold',fontSize:'25px' }} exact to="/">
                      <div className="Router-Link">
                        首頁
                      </div>
                    </NavLink>
                  </div>        
                  <div className="Router-LinkFrame">
                    <NavLink style={{fontSize: '20px'}} activeStyle={{ fontWeight: 'bold',fontSize:'25px' }} to="/About">
                      <div className="Router-Link">
                        關於我
                      </div>
                    </NavLink>
                  </div>
                  <div className="Router-LinkFrame">
                    <NavLink style={{fontSize: '20px'}} activeStyle={{ fontWeight: 'bold',fontSize:'25px',lineHeight: 'unset' }} to="/Practicing">
                      <div className="Router-Link">    
                        練習與經歷
                      </div>
                    </NavLink>
                  </div>     
                </div>
              </div>
              <div>
                <TransitionGroup>
                  <CSSTransition key={location.key} className="fade" timeout={2000} >
                    <Switch>
                      <Route style={{transition:'opacity 250ms ease-in'}} path="/" exact component={Home} />
                      <Route style={{transition:'opacity 250ms ease-in'}} path="/Practicing" component={Practicing} />
                      <Route style={{transition:'opacity 250ms ease-in'}} path="/About" component={About} />
                      <Route style={{transition:'opacity 250ms ease-in'}} path="*" component={Home} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </div>
          </div>
      </HashRouter>
    );
  }

}
ReactDOM.render(<RouterComponent/ >, document.getElementById("container"));

// render((
//     <Router history={browserHistory}>
//         <Route path="/" component={App}>
//             <Route path="about" component={About} />
//         </Route>
//     </Router>
// ), document.getElementById('App'));



        // <button><Link exact to="./">Home</Link></button>
        // <button><Link to="./App">App</Link></button>

