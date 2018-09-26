
const findDOMNode = window.ReactDOM.findDOMNode;


class Practicing extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $(findDOMNode(this)).css("opacity","0");
    CssItemCount({
      DomId: "example2",
      Colors: ChartColorArray,
      Texts: ChartTextArray,
      Detail: ChartDetailArray,
      Counts: ChartCountArray
    })
    // console.log(findDOMNode(this));



  dashboard({
    DomId:"example",
    Width:$(window).width()*0.9,
    Height:300,
    Color:["#FF9999","#9999FF"],
    Data:[
      {x:2001, a:8, b:1},
      {x:2002, a:3, b:2},
      {x:2003, a:5, b:3},
      {x:2004, a:3, b:4},
      {x:2005, a:5, b:5},
      {x:2006, a:7, b:6},
      {x:2007, a:2, b:7},
      {x:2008, a:3, b:8},
      {x:2009, a:1, b:10}
    ],
    Xkey:['x'],
    Ykey:['a','b'],
    Label:['Number','Number2']
  });

    // this.refs.theInput.getDOMNode();
    $(findDOMNode(this)).animate({
      opacity:1,
      color: "#FF0000"
    },500
    ,function(){
    });

  }
  componentWillUnmount(){
    // console.log(this)
    $(findDOMNode(this)).animate({
      opacity:0,
      color: "#FF0000"
    },250
    ,function(){
    });
    // $(findDOMNode(this)).css("opacity","0");

  }
  render() {
    return(
      <div id="PracticeComponent" className="transition-time" style={{padding: "20px"}}>
        <table>
          <tr>
            <td id="example2">
            </td>
            <td style={{display:"table-cell"}}>
              <p>此為CSS動畫的測試:將資料對應API產生DOM，並透過CSS的動畫操控其視覺變化。</p>
            </td>
          </tr>
          <tr style={{display:"table-row"}}>
            <td  style={{display:"table-cell",width:'60%',textAlign:'left'}}>
              <div id="example"></div>
            </td>
            <td style={{display:"table-cell"}}>
              <p>此為使用canvas製作出dashboard，透過mousemove來控制現在所觀察的資料。</p>
            </td>
          </tr>
        </table>
      </div>
    )

  }
}



  // componentDidMount() {
  //   console.log('componentDidMount');
  // }

   // <ul>
    //   <li><Link to="/about" >About</Link></li>
    //   <li><Link to="/repos/react-router" >Repos</Link></li>
    //   <li><Link to="/user" >User</Link></li>
    // </ul>
    // {props.children}