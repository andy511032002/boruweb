const findDOMNode = window.ReactDOM.findDOMNode;

class Home extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $(findDOMNode(this)).css("opacity","0");
    $(findDOMNode(this)).animate({
      opacity:1
      },500
      ,function(){
    });
  }
  render(){
    return(
      <div >
        <h1>Testing...</h1>
        <p>這是用來測試GitHub Page以及練習React的網站</p>
        <p>目前還在施工中...</p>
      </div>

    )
  }
}


   // <ul>
    //   <li><Link to="/about" >About</Link></li>
    //   <li><Link to="/repos/react-router" >Repos</Link></li>
    //   <li><Link to="/user" >User</Link></li>
    // </ul>
    // {props.children}