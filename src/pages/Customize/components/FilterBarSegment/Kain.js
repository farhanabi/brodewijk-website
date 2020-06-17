import React from 'react'
import classes from './Kain.css'

const Kain = ({pilihan,pilihanKain,harga,kainPrice,setPilihan,setPilihanKain,setHarga,setKainPrice}) => {
	
	return (
		<div>
      <h1 style={{letterSpacing:'0.05em',fontWeight:'500'}}>Fabric Type</h1>
      <div className={classes.FabricsList}>
      	<h3 style={{margin:'10px 0 10px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Hagebridge Wool</h3>
      	{/*<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'600',fontSize:'1.1vw'}}>Grade: Super 200s</h4>*/}
      	<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}><b style={{fontWeight:600}}>Super 200s Wool</b>, Cool in Summer, Warm in Winter, Easy to maintain, Wrinkle Free.</h4>
      	<h4 style={{margin:'0px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}>Best for Wedding, Business, Party, and Graduation</h4>
      	<div className={classes.InnerFabricsList}>
	        { (pilihanKain.jenis === 'Hagebridge Wool/Dim Gray' && pilihanKain.warna === 'Dim Gray')
      			? <div className={classes.FabricListSelected}>
			          <img src={require(`../../../../img/livePreview/Hagebridge Wool/Dim Gray/Dim Gray.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
			          <label style={{marginTop:5}}>Dim Gray</label>
			        </div>
			      : <div onClick={()=>{setPilihanKain({jenis:'Hagebridge Wool/Dim Gray',warna:'Dim Gray'});setKainPrice(2110000)}} className={classes.FabricList}>
			          <img src={require(`../../../../img/livePreview/Hagebridge Wool/Dim Gray/Dim Gray.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
			          <label style={{marginTop:5}}>Dim Gray</label>
			        </div> }
	        { (pilihanKain.jenis === 'Hagebridge Wool/Navy Blue' && pilihanKain.warna === 'Navy Blue')
      			? <div className={classes.FabricListSelected}>
			          <img src={require(`../../../../img/livePreview/Hagebridge Wool/Navy Blue/Navy Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
			          <label style={{marginTop:5}}>Navy Blue</label>
			        </div>
	        	: <div onClick={()=>{setPilihanKain({jenis:'Hagebridge Wool/Navy Blue',warna:'Navy Blue'});setKainPrice(2110000)}} className={classes.FabricList}>
			          <img src={require(`../../../../img/livePreview/Hagebridge Wool/Navy Blue/Navy Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
			          <label style={{marginTop:5}}>Navy Blue</label>
			        </div> }
	        { (pilihanKain.jenis === 'Hagebridge Wool/Olive Green' && pilihanKain.warna === 'Olive Green')
      			? <div className={classes.FabricListSelected}>
			          <img src={require(`../../../../img/livePreview/Hagebridge Wool/Olive Green/Olive Green.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
			          <label style={{marginTop:5}}>Olive Green</label>
			        </div>
			      : <div onClick={()=>{setPilihanKain({jenis:'Hagebridge Wool/Olive Green',warna:'Olive Green'});setKainPrice(2110000)}} className={classes.FabricList}>
			          <img src={require(`../../../../img/livePreview/Hagebridge Wool/Olive Green/Olive Green.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
			          <label style={{marginTop:5}}>Olive Green</label>
			        </div> }
	        { (pilihanKain.jenis === 'Hagebridge Wool/Peru Brown' && pilihanKain.warna === 'Peru Brown')
      			? <div className={classes.FabricListSelected}>
			          <img src={require(`../../../../img/livePreview/Hagebridge Wool/Peru Brown/Peru Brown.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
			          <label style={{marginTop:5}}>Peru Brown</label>
			        </div>
			      : <div onClick={()=>{setPilihanKain({jenis:'Hagebridge Wool/Peru Brown',warna:'Peru Brown'});setKainPrice(2110000)}} className={classes.FabricList}>
			          <img src={require(`../../../../img/livePreview/Hagebridge Wool/Peru Brown/Peru Brown.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
			          <label style={{marginTop:5}}>Peru Brown</label>
			        </div> }
	        { (pilihanKain.jenis === 'Hagebridge Wool/Saddle Brown' && pilihanKain.warna === 'Saddle Brown')
      			? <div className={classes.FabricListSelected}>
			          <img src={require(`../../../../img/livePreview/Hagebridge Wool/Saddle Brown/Saddle Brown.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
			          <label style={{marginTop:5}}>Saddle Brown</label>
			        </div>
			      : <div onClick={()=>{setPilihanKain({jenis:'Hagebridge Wool/Saddle Brown',warna:'Saddle Brown'});setKainPrice(2110000)}} className={classes.FabricList}>
			          <img src={require(`../../../../img/livePreview/Hagebridge Wool/Saddle Brown/Saddle Brown.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
			          <label style={{marginTop:5}}>Saddle Brown</label>
			        </div> }
        </div>
        <h3 style={{margin:'10px 0 10px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Vanelli</h3>
      	{/*<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'600',fontSize:'1.1vw'}}>Grade: Super 200s</h4>*/}
      	<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}><b style={{fontWeight:600}}>Super 200s Wool</b>,  Super Solid Colour, Warmer, Easy to maintain, Wrinkle Free.</h4>
      	<h4 style={{margin:'0px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}>Best for Wedding, Business, Party, Graduation</h4>
      	<div className={classes.InnerFabricsList}>
	        <div onClick={()=>{setPilihanKain({jenis:'Blackpool',warna:'Dark Green'});setKainPrice(2110000)}} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Vanelli/Black Navy/Black Navy.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Black Navy</label>
	        </div>
	        <div onClick={()=>{setPilihanKain({jenis:'Blackpool',warna:'Dark Green'});setKainPrice(2110000)}} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Vanelli/Dark Brown/Dark Brown.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Dark Brown</label>
	        </div>
	        <div onClick={()=>{setPilihanKain({jenis:'Farlie',warna:'Black'});setKainPrice(2110000)}} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Vanelli/Super Black/Super Black.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Super Black</label>
	        </div>
        </div>
        <h3 style={{margin:'20px 0 10px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Kavelingen</h3>
      	<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}><b style={{fontWeight:600}}>Super 270s Wool</b>, Recommended for tropical climate, Easy to maintain, Wrinkle Free, Very Light.</h4>
      	<h4 style={{margin:'0px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}>Best for Wedding, Business, and Party</h4>
      	<div className={classes.InnerFabricsList}>
	        { (pilihanKain.jenis === 'Kavelingen/Black Check' && pilihanKain.warna === 'Black Check')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Kavelingen/Black Check/Black Check.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Black Check</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Kavelingen/Black Check',warna:'Black Check'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Kavelingen/Black Check/Black Check.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Black Check</label>
				</div> }
	        <div onClick={()=>{setPilihanKain({...pilihanKain,jenis:'Oberon'});setKainPrice(1520000)}} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Kavelingen/Chocolate Check/Chocolate Check.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Chocolate Check</label>
	        </div>
	        <div onClick={()=>{setPilihanKain({...pilihanKain,jenis:'Wickford'});setKainPrice(1520000)}} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Kavelingen/Grayish-Brown/Grayish-Brown.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Grayish-Brown</label>
	        </div>
	        <div onClick={()=>{setPilihanKain({...pilihanKain,jenis:'Blackpool'});setKainPrice(1520000)}} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Kavelingen/Navy Blue Check/Navy Blue Check.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Navy Blue Check</label>
	        </div>
	        <div onClick={()=>{setPilihanKain({...pilihanKain,jenis:'Farlie'});setKainPrice(1520000)}} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Kavelingen/Warm Gray/Warm Gray.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Warm Gray</label>
	        </div>
        </div>
        <h3 style={{margin:'20px 0 10px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Sharkskin</h3>
      	<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}><b style={{fontWeight:600}}>Super 270s Wool</b>, Recommended for tropical climate, Easy to maintain, Wrinkle Free, Very Light.</h4>
      	<h4 style={{margin:'0px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}>Best for Wedding, Business, Party, Graduation</h4>
      	<div className={classes.InnerFabricsList}>
		  	{ (pilihanKain.jenis === 'Sharkskin/Black' && pilihanKain.warna === 'Black')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Sharkskin/Black/Black.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Black</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Sharkskin/Black',warna:'Black'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Sharkskin/Black/Black.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Black</label>
				</div> }
	        { (pilihanKain.jenis === 'Sharkskin/Brown' && pilihanKain.warna === 'Brown')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Sharkskin/Brown/Brown.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Brown</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Sharkskin/Brown',warna:'Brown'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Sharkskin/Brown/Brown.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Brown</label>
				</div> }
			{ (pilihanKain.jenis === 'Sharkskin/Dark Grey' && pilihanKain.warna === 'Dark Grey')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Sharkskin/Dark Grey/Dark Grey.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Dark Grey</label>
				</div>
			: 	<div onClick={()=>{setPilihanKain({jenis:'Sharkskin/Dark Grey',warna:'Dark Grey'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Sharkskin/Dark Grey/Dark Grey.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Dark Grey</label>
				</div> }
			{ (pilihanKain.jenis === 'Sharkskin/Dim Grey' && pilihanKain.warna === 'Dim Grey')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Sharkskin/Dim Grey/Dim Grey.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Dim Grey</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Sharkskin/Dim Grey',warna:'Dim Grey'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Sharkskin/Dim Grey/Dim Grey.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Dim Grey</label>
				</div> }
			{ (pilihanKain.jenis === 'Sharkskin/Light Grey' && pilihanKain.warna === 'Light Grey')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Sharkskin/Light Grey/Light Grey.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Light Grey</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Sharkskin/Light Grey',warna:'Light Grey'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Sharkskin/Light Grey/Light Grey.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Light Grey</label>
				</div> }
	       	{ (pilihanKain.jenis === 'Sharkskin/Midnight Blue' && pilihanKain.warna === 'Midnight Blue')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Sharkskin/Midnight Blue/Midnight Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Midnight Blue</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Sharkskin/Midnight Blue',warna:'Midnight Blue'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Sharkskin/Midnight Blue/Midnight Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Midnight Blue</label>
				</div> }
			{ (pilihanKain.jenis === 'Sharkskin/Navy Blue' && pilihanKain.warna === 'Navy Blue')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Sharkskin/Navy Blue/Navy Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Navy Blue</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Sharkskin/Navy Blue',warna:'Navy Blue'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Sharkskin/Navy Blue/Navy Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Navy Blue</label>
				</div>}
        </div>
        <h3 style={{margin:'20px 0 10px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Halk</h3>
      	<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}><b style={{fontWeight:600}}>Semi Wool</b>, Thermal comfort, comfort fit, shimmering look.</h4>
      	<h4 style={{margin:'0px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}>Best for Bridal/Wedding and Party</h4>
      	<div className={classes.InnerFabricsList}>
		  { (pilihanKain.jenis === 'Halk/Black' && pilihanKain.warna === 'Black')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Halk/Black/Black.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Black</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Halk/Black',warna:'Black'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Halk/Black/Black.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Black</label>
				</div> }
			{ (pilihanKain.jenis === 'Halk/Dark Maroon' && pilihanKain.warna === 'Dark Maroon')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Halk/Dark Maroon/Dark Maroon.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Dark Maroon</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Halk/Dark Maroon',warna:'Dark Maroon'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Halk/Dark Maroon/Dark Maroon.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Dark Maroon</label>
				</div> }
			{ (pilihanKain.jenis === 'Halk/Dark Red' && pilihanKain.warna === 'Dark Red')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Halk/Dark Red/Dark Red.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Dark Red</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Halk/Dark Red',warna:'Dark Red'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Halk/Dark Red/Dark Red.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Dark Red</label>
				</div> }
			{ (pilihanKain.jenis === 'Halk/Gold' && pilihanKain.warna === 'Gold')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Halk/Gold/Gold.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Gold</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Halk/Gold',warna:'Gold'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Halk/Gold/Gold.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Gold</label>
				</div> }
			{ (pilihanKain.jenis === 'Halk/Navy Blue' && pilihanKain.warna === 'Navy Blue')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Halk/Navy Blue/Navy Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Navy Blue</label>
				</div> 
			:	<div onClick={()=>{setPilihanKain({jenis:'Halk/Navy Blue',warna:'Navy Blue'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Halk/Navy Blue/Navy Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Navy Blue</label>
				</div> }
			{ (pilihanKain.jenis === 'Halk/Silver' && pilihanKain.warna === 'Silver')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Halk/Silver/Silver.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Silver</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Halk/Silver',warna:'Silver'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Halk/Silver/Silver.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Silver</label>
				</div> }
			{ (pilihanKain.jenis === 'Halk/Slate Gray' && pilihanKain.warna === 'Slate Gray')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Halk/Slate Gray/Slate Gray.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Slate Gray</label>
				</div> 
			:	<div onClick={()=>{setPilihanKain({jenis:'Halk/Slate Gray',warna:'Slate Gray'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Halk/Slate Gray/Slate Gray.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Slate Gray</label>
				</div> }
        </div>
        <h3 style={{margin:'20px 0 10px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Solva</h3>
      	<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}><b style={{fontWeight:600}}>Silk Wool</b>, Thermal comfort, comfort fit, shimmering look, Wrinkle free.</h4>
      	<h4 style={{margin:'0px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}>Best for Bridal/Wedding and Party</h4>
      	<div className={classes.InnerFabricsList}>
		  { (pilihanKain.jenis === 'Solva/White' && pilihanKain.warna === 'White')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Solva/White/White.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>White</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Solva/White',warna:'White'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Solva/White/White.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>White</label>
				</div> }
        </div>
        <h3 style={{margin:'20px 0 10px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Enslev</h3>
      	<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}><b style={{fontWeight:600}}>Semi Wool</b>, Thermal Comfort, Comfort Fit, Quick Drying,Easy to Maintain.</h4>
      	<h4 style={{margin:'0px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}>Best for Bridal/Wedding and Party</h4>
      	<div className={classes.InnerFabricsList}>
		  { (pilihanKain.jenis === 'Enslev/Hash Brown' && pilihanKain.warna === 'Hash Brown')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Enslev/Hash Brown/Hash Brown.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Hash Brown</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Enslev/Hash Brown',warna:'Hash Brown'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Enslev/Hash Brown/Hash Brown.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Hash Brown</label>
				</div> }
	       { (pilihanKain.jenis === 'Enslev/Silver' && pilihanKain.warna === 'Silver')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Enslev/Silver/Silver.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Silver</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Enslev/Silver',warna:'Silver'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Enslev/Silver/Silver.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Silver</label>
				</div> } 
        </div>
        <h3 style={{margin:'20px 0 10px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Nimbska</h3>
      	<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}><b style={{fontWeight:600}}>Semi Wool</b>, Cool Wool Technology, Wrinkle Free, Very Light, Drapery.</h4>
      	<h4 style={{margin:'0px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}>Best for Wedding, Business, Party, and Gradutation</h4>
      	<div className={classes.InnerFabricsList}>
			{ (pilihanKain.jenis === 'Nimbska/Matcha Green' && pilihanKain.warna === 'Matcha Green')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Nimbska/Matcha Green/Matcha Green.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Matcha Green</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Nimbska/Matcha Green',warna:'Matcha Green'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Nimbska/Matcha Green/Matcha Green.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Matcha Green</label>
				</div> }
			{ (pilihanKain.jenis === 'Nimbska/Sandy Brown' && pilihanKain.warna === 'Sandy Brown')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Nimbska/Sandy Brown/Sandy Brown.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Sandy Brown</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Nimbska/Sandy Brown',warna:'Sandy Brown'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Nimbska/Sandy Brown/Sandy Brown.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Sandy Brown</label>
				</div> }
			{ (pilihanKain.jenis === 'Nimbska/Torque Blue' && pilihanKain.warna === 'Torque Blue')
			?	<div className={classes.FabricListSelected}>
					<img src={require(`../../../../img/livePreview/Nimbska/Torque Blue/Torque Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Torque Blue</label>
				</div>
			:	<div onClick={()=>{setPilihanKain({jenis:'Nimbska/Torque Blue',warna:'Torque Blue'});setKainPrice(1520000)}} className={classes.FabricList}>
					<img src={require(`../../../../img/livePreview/Nimbska/Torque Blue/Torque Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					<label style={{marginTop:5}}>Torque Blue</label>
				</div> }
        </div>
        <h3 style={{margin:'20px 0 10px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Jet Black</h3>
      	<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}><b style={{fontWeight:600}}>Semi Wool</b>, Classic solid black, Cool comfort, Easy to maintain.</h4>
      	<h4 style={{margin:'0px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}>Best for Business, Graduation, Party</h4>
      	<div className={classes.InnerFabricsList}>
      		{ (pilihanKain.jenis === 'Jet Black/Black' && pilihanKain.warna === 'Black')
      			? <div className={classes.FabricListSelected}>
			          <img src={require(`../../../../img/livePreview/Jet Black/Black/Black.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
			          <label style={{marginTop:5}}>Black</label>
			        </div> 
		        : <div onClick={()=>{setPilihanKain({jenis:'Jet Black/Black',warna:'Black'});setKainPrice(975000)}} className={classes.FabricList}>
			          <img src={require(`../../../../img/livePreview/Jet Black/Black/Black.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
			          <label style={{marginTop:5}}>Black</label>
			        </div> }
        </div>
      </div>
      <span className={classes.changeFeature} onClick={()=>{setPilihan('fitur');setPilihanKain({...pilihanKain/*,jenis:'Siberia'*/})}}>Choose {pilihanKain.jenis} as Fabric</span>
    </div>
  )
}

export default Kain;
