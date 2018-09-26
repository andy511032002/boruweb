const findDOMNode = window.ReactDOM.findDOMNode;

class About extends React.Component{
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
			<div className="transition-time">
				<link href="./components/About/About.css" rel="stylesheet"/>
				<h1 style={{fontSize:"20px",fontFamily:"monospace"}}>About Boru</h1>
				<div className="Container">
					<div className="Container-Chart">
					</div>
				</div>
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