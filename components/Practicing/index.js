
const findDOMNode = window.ReactDOM.findDOMNode;


class Practicing extends React.Component{
  constructor(props) {
    super(props);
    this.showDivs = this.showDivs.bind(this);
    this.plusDivs = this.plusDivs.bind(this);

    this.slideIndex = 1;

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

  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }


  showDivs(n) {
    var x = $(".PicFrameImg");
    if (n > x.length) {
      this.slideIndex = 1;
    } 
    if (n < 1) {
      this.slideIndex = x.length;
    } 
    for (var i = 0; i < x.length; i++) {
      x[i].style.opacity = 0; 
      x[i].style.display = "none"; 
    }
    x[this.slideIndex-1].style.display = "block";
    $(x[this.slideIndex-1]).animate({
        opacity:1
    },250,function(){

    });

  }

  render() {
    return(
      <div id="PracticeComponent" className="transition-time" style={{padding: "20px"}}>
        <table>
          <th style={{fontFamily: "setofont",}}>
            <td  style={{textAlign:'center'}}>
              <p>經歷</p>
            </td>
            <td style={{display:"contents",textAlign:'center'}}>
              <p>描述</p>
            </td>
          </th>
          <tr style={{display:"table-row"}}>
            <td className="DescribeStyle" style={{display:"table-cell",textAlign:'center'}}>
              創意點子-Web實習生
              <div id ='PicFrame'>
                <img className='PicFrameImg' style={{}} src='./media/pic/01.png' />
                <img className='PicFrameImg' style={{display:'none'}} src='./media/pic/02.png' />
                <img className='PicFrameImg' style={{display:'none'}} src='./media/pic/03.png' />
                  <button className='PicFramebutton LeftButton' onClick={this.plusDivs.bind(this,-1)}>&#10094;</button>
                  <button className='PicFramebutton RightButton' onClick={this.plusDivs.bind(this,1)}>&#10095;</button>
              </div>
            </td>
            <td className="DescribeStyle">
              <p>在大學畢業後，透過學校人事的介紹，到了一間新創公司實習，我負責的部分是商品置入影片前的置入應用程式的雛形。附圖為2017年11月左右的截圖，現在官網操作模式又有更動，雖然介面已經和當初我設計不一樣，但操作核心不變。<br/>
              圖1(下方未有時間軸的圖)是置入前的畫面，左半邊為商品的項目及資訊，右半邊為要置入的影片，下方則是置入的商品時間範圍，目前無商品所以為空白。<br/>
              圖2(上方有時間軸的圖)置入商品後(當初為拖拉上傳的方式，圖為從已上傳商品中挑選出要置入支商品)，可以看到下方多了時間軸，灰白色的長條狀為商品要是置入時間的長度。<br/>
              圖3(影片展示)將置入結果儲存後，透過官網的影片可以看到當影片撥放到商品的置入點時，旁邊會出現商品資訊。
              我負責的部分是圖1、圖2的部分以及當時官網所需之報表的資料整合並透過外部函式庫圖像化(現在官網已找不到)。
              </p>
            </td>
          </tr>
          <tr style={{display:"table-row"}}>
            <td className="DescribeStyle" style={{display:"table-cell",textAlign:'center'}}>
              精準醫電-產學合作
            </td>
            <td className="DescribeStyle">
              <p>
                由於製作的項目尚未商品化，所以不方便附圖或程式碼，敬請見諒。<br/>
                此產學合作內容，與本人之碩士論文題目相關「以壓電式感測器量測血壓之研究」，此論文題目主要為透過GRNN(廣義迴歸類神經網路)來做血壓的計算。<br/>
                GRNN為以常態分佈的概念製作出來的模型。透過常態分佈其愈接近中心點，計算出來之值愈大的特性，進而計算出訓練資料以及測試資料間產生之權重植，最後將血壓值計算出來。<br/>
              </p>
            </td>
          </tr>
          <th style={{fontFamily: "setofont",}}>
            <td  style={{textAlign:'center'}}>
              展示圖或影片
            </td>
            <td style={{display:"contents",textAlign:'center'}}>
              <p>描述</p>
            </td>
          </th>
          <tr>
            <td  style={{textAlign:'center'}}>
              <video width="500" height="300" controls muted>
                <source src="./media/mov/IMG_3041.MOV" type="video/mp4" />
              </video>
            </td>
            <td className="DescribeStyle">
              <p>此作品為大學時期的和其他三位同學一起完成的專題，使用的語言是lua，並在corona的平台上製作出來的手機轉珠遊戲，此APP以模仿當時很紅的手遊神魔之塔，並使用websocket進行兩手機端進行連線對打。<br/>
                我們把工作分為遊戲介面設計、玩法設計、後端、websocket連線，我主要負責的部分是遊戲玩法部分的程式設計以及連線對戰時接收資料的處理。轉珠的部分，在touch觸發的時刻檢測此時的位置是否有跨越到別的珠子的位置
                ，若有跨越則交換位置。消除的部分則是在轉完珠之後，用case by case的方式判斷3顆珠以上相連並將之標記消除，下一步則是判斷被標記的珠子周遭是否有同樣顏色且也被標記的珠子，有則將兩者合併。
              </p>
            </td>
          </tr>
          <tr>
            <td id="example2" style={{display:'flex',border: '0px'}}>
            </td> 
            <td className="DescribeStyle">
              <p>此作品為CSS及svg的簡易動畫練習。將資料對應API輸入後產生DOM，透過hover左方長條圖控制其視覺變化，並嘗試使用svg做出donut chart的動畫，透過動畫顯示動態更新其數據的百分比，目前尚未對RWD做出不同的設計，因此當螢幕寬度過小時，字型大小及位置尚未校正。</p>
            </td>
          </tr>
          <tr style={{display:"table-row"}}>
            <td  style={{display:"table-cell",width:'60%',textAlign:'left'}}>
              <div id="example"></div>
            </td>
            <td className="DescribeStyle">
              <p>此為使用canvas製作出line chart，透過mousemove來控制現在所觀察的資料。將資料對應API輸入後透過canvas繪出折線圖，透過抓取資料數據的範圍及平均值，來計算出適合這筆數據的單位量
              ，並使用這個單位繪製出圖形出來。有做部分的RWD，但可能仍有些小細節沒注意而忽略。
              </p>
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