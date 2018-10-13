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
				<h1 style={{fontSize:"25px",fontFamily:"monospace"}}>About Boru</h1>
				<div className="Container">
					<div className='AboutContents'>
						<img style={{width:'20%',height:'auto',float:'right',marginLeft:'20px'}} src='./media/pic/profile.jpg' />

						&emsp;&emsp;簡伯儒，一位個子小小、笑容天天掛在臉上、出生於新北市男孩，在家中排行老二。本身喜愛交友，也喜歡逗大家開心，是朋友們身邊的開心果。如果接任了一個任務，就會盡全力去做。對於我所犯的錯，家人們會予以建議或是糾正，雖然當下會因為難堪而吵架，但之後我仍會道歉，並採納他們的建議，這更加深了我對「有錯的地方，要予以糾正」的觀念。<br/><br/>

						&emsp;&emsp;大學就讀文化大學資訊工程學系，成績保持在中上，在大學對於APP包持著極大的興趣，因此大學專題便以行動裝置遊戲為畢業專題的題目。主要的語言是Lua，並以Corona為平台來撰寫連線轉珠對戰遊戲。主要遊戲玩法由我撰寫，其他三位夥伴分別撰寫資料庫伺服器、websocket、介面等。(遊戲玩法影片在「練習與經歷」中)大學時期，由於當時系上尚未有研究所，所以<strong>大一、大二實習課的教學助理</strong>只能從大三大四中尋找，而此時系上的助理教授找上了我，實習課上透過幫助學弟妹解析題目以及講述觀念著實讓我的能力又更上一層；除課業之外，也利用課餘的時間參加系學會上的活動，並協助辦迎新宿營；大四上學期以達到畢業門檻，於是申請提早畢業，並在<strong>創意點子公司</strong>應徵到實習生的職位，透過業界工程師的訓練，對於網路前端有了顯著的進步，以及撰寫程式的視野也有極大的改變，而自己也開始對此技術產生了濃厚的興趣。<br/><br/>
						&emsp;&emsp;碩士就讀台灣師範大學，碩士時期，受到指導老師的器重，接了產學合作的案子，從一開始的網頁介面撰寫以及後台資料庫設定到後期的訊號分析，都有涉獵。論文的題目，也是和公司產學合作內容的延伸。論文題目為透過廣義迴歸類神經網路(GRNN)分析脈搏波速度(PWV)及血壓之間的關係，透過少量的訓練資料即可做出良好的良好的預測。使用的語言是Matlab，使用序列埠來即時接收資料，並計算出對應之血壓，並使用一般充氣式血壓計來比對誤差率。<br/><br/>
						&emsp;&emsp;碩士畢業後，由於要處理兵役相關問題，所以暫時到產學合作的公司-精準醫電，做後續的合作，主要負責訊號處理、收集，並使用C#製作展示用的訊號顯示之應用程式。<br/><br/>
						&emsp;&emsp;未來自己將成為社會新鮮人，希望可以透過職場的訓練來提高自己的實力，以及透過團隊合作製作出所有人都滿意的成品。在壓力底下仍保持著不斷自我學習的能力，以及團隊彼此溝通的能力，讓自己各方面的能力達到專業的地步。我著實的相信追求卓越，成功自然會找上自己。感謝您撥空閱讀我的自傳，希望有機會與您面談。 
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