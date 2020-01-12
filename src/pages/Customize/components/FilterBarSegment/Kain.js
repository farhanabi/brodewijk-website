import React from 'react'
import classes from './Kain.css'

const Kain = ({pilihan,pilihanKain,setPilihan,setPilihanKain}) => {
	return (
		<div>
      <h1 style={{letterSpacing:'0.05em',fontWeight:'500'}}>Fabric Type</h1>
      <div className={classes.FabricsList}>
      	<h3 style={{margin:'10px 0 10px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Hagebridge Wool</h3>
      	{/*<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'600',fontSize:'1.1vw'}}>Grade: Super 200s</h4>*/}
      	<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}><b style={{fontWeight:600}}>Super 200s Wool</b>, Cool in Summer, Warm in Winter, Easy to maintain, Wrinkle Free.</h4>
      	<h4 style={{margin:'0px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}>Best for Wedding, Business, Party, and Graduation</h4>
      	<div className={classes.InnerFabricsList}>
	        <div onClick={()=>(setPilihanKain({jenis:'Oberon',warna:'Navy Blue'}))} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Oberon/894_huge_c300.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Navy Blue</label>
	        </div>
	        <div onClick={()=>(setPilihanKain({jenis:'Blackpool',warna:'Dark Green'}))} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Blackpool/674_huge_c300.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Dark Green</label>
	        </div>
	        <div onClick={()=>(setPilihanKain({jenis:'Farlie',warna:'Black'}))} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Farlie//1237_huge_c300.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Black</label>
	        </div>
	        <div onClick={()=>(setPilihanKain({jenis:'Farlie',warna:'Black'}))} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Farlie//1237_huge_c300.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Black</label>
	        </div>
	        <div onClick={()=>(setPilihanKain({jenis:'Farlie',warna:'Black'}))} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Farlie//1237_huge_c300.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Black</label>
	        </div>
        </div>
        <h3 style={{margin:'20px 0 10px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Kavelingen</h3>
      	<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}><b style={{fontWeight:600}}>Super 270s Wool</b>, Recommended for tropical climate, Easy to maintain, Wrinkle Free, Very Light.</h4>
      	<h4 style={{margin:'0px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}>Best for Wedding, Business, and Party</h4>
      	<div className={classes.InnerFabricsList}>
	        <div onClick={()=>(setPilihanKain({...pilihanKain,jenis:'Siberia'}))} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Siberia/1840_huge_c300.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Siberia</label>
	        </div>
	        <div onClick={()=>(setPilihanKain({...pilihanKain,jenis:'Oberon'}))} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Oberon/894_huge_c300.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Oberon</label>
	        </div>
	        <div onClick={()=>(setPilihanKain({...pilihanKain,jenis:'Wickford'}))} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Wickford/778_huge_c300.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Wickford</label>
	        </div>
	        <div onClick={()=>(setPilihanKain({...pilihanKain,jenis:'Blackpool'}))} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Blackpool/674_huge_c300.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Blackpool</label>
	        </div>
	        <div onClick={()=>(setPilihanKain({...pilihanKain,jenis:'Farlie'}))} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Farlie//1237_huge_c300.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Farlie</label>
	        </div>
        </div>
        <h3 style={{margin:'20px 0 10px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Sharkskin</h3>
      	<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}><b style={{fontWeight:600}}>Super 270s Wool</b>, Recommended for tropical climate, Easy to maintain, Wrinkle Free, Very Light.</h4>
      	<h4 style={{margin:'0px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}>Best for Wedding, Business, Party, Graduation</h4>
      	<div className={classes.InnerFabricsList}>
	        <div onClick={()=>(setPilihanKain({...pilihanKain,jenis:'Blackpool'}))} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Blackpool/674_huge_c300.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Blackpool</label>
	        </div>
        </div>
        <h3 style={{margin:'20px 0 10px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Halk</h3>
      	<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}><b style={{fontWeight:600}}>Semi Wool</b>, Thermal comfort, comfort fit, shimmering look.</h4>
      	<h4 style={{margin:'0px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}>Best for Bridal/Wedding and Party</h4>
      	<div className={classes.InnerFabricsList}>
	        <div onClick={()=>(setPilihanKain({...pilihanKain,jenis:'Blackpool'}))} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Blackpool/674_huge_c300.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Blackpool</label>
	        </div>
        </div>
        <h3 style={{margin:'20px 0 10px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Solva</h3>
      	<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}><b style={{fontWeight:600}}>Silk Wool</b>, Thermal comfort, comfort fit, shimmering look, Wrinkle free.</h4>
      	<h4 style={{margin:'0px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}>Best for Bridal/Wedding and Party</h4>
      	<div className={classes.InnerFabricsList}>
	        <div onClick={()=>(setPilihanKain({...pilihanKain,jenis:'Blackpool'}))} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Blackpool/674_huge_c300.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Blackpool</label>
	        </div>
        </div>
        <h3 style={{margin:'20px 0 10px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Enslev</h3>
      	<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}><b style={{fontWeight:600}}>Semi Wool</b>, Thermal Comfort, Comfort Fit, Quick Drying,Easy to Maintain.</h4>
      	<h4 style={{margin:'0px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}>Best for Bridal/Wedding and Party</h4>
      	<div className={classes.InnerFabricsList}>
	        <div onClick={()=>(setPilihanKain({...pilihanKain,jenis:'Blackpool'}))} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Blackpool/674_huge_c300.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Blackpool</label>
	        </div>
        </div>
        <h3 style={{margin:'20px 0 10px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Nimbska</h3>
      	<h4 style={{margin:'5px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}><b style={{fontWeight:600}}>Semi Wool</b>, Cool Wool Technology, Wrinkle Free, Very Light, Drapery.</h4>
      	<h4 style={{margin:'0px 20px 10px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}>Best for Wedding, Business, Party, and Gradutation</h4>
      	<div className={classes.InnerFabricsList}>
	        <div onClick={()=>(setPilihanKain({...pilihanKain,jenis:'Blackpool'}))} className={classes.FabricList}>
	          <img src={require(`../../../../img/livePreview/Blackpool/674_huge_c300.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
	          <label style={{marginTop:5}}>Blackpool</label>
	        </div>
        </div>
      </div>
      <span className={classes.changeFeature} onClick={()=>{setPilihan('fitur');setPilihanKain({...pilihanKain,jenis:'Siberia'})}}>Choose {pilihanKain.jenis} as Fabric</span>
    </div>
  )
}

export default Kain;
