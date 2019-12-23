import React from 'react'
import classes from './Kain.css'

const Kain = ({pilihan,pilihanKain,setPilihan,setPilihanKain}) => {
	return (
		<div>
      <h1 style={{letterSpacing:'0.05em',fontWeight:'500'}}>Fabric Type</h1>
      <div className={classes.FabricsList}>
      	<h3 style={{margin:'10px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Formal</h3>
      	<div className={classes.InnerFabricsList}>
	        <div onClick={()=>(setPilihanKain('Oberon'))} className={classes.FabricList}>
	          <img src={require(`../../../img/livePreview/Oberon/894_huge_c300.jpg`)} width='100%' className={classes.FabricImage}/>
	          <label style={{marginTop:5}}>Oberon</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Blackpool'))} className={classes.FabricList}>
	          <img src={require(`../../../img/livePreview/Blackpool/674_huge_c300.jpg`)} width='100%' className={classes.FabricImage}/>
	          <label style={{marginTop:5}}>Blackpool</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Farlie'))} className={classes.FabricList}>
	          <img src={require(`../../../img/livePreview/Farlie//1237_huge_c300.jpg`)} width='100%' className={classes.FabricImage}/>
	          <label style={{marginTop:5}}>Farlie</label>
	        </div>
        </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Casual</h3>
      	<div className={classes.InnerFabricsList}>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FabricList}>
	          <img src={require(`../../../img/livePreview/Siberia/1840_huge_c300.jpg`)} width='100%' className={classes.FabricImage}/>
	          <label style={{marginTop:5}}>Siberia</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Oberon'))} className={classes.FabricList}>
	          <img src={require(`../../../img/livePreview/Oberon/894_huge_c300.jpg`)} width='100%' className={classes.FabricImage}/>
	          <label style={{marginTop:5}}>Oberon</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Wickford'))} className={classes.FabricList}>
	          <img src={require(`../../../img/livePreview/Wickford/778_huge_c300.jpg`)} width='100%' className={classes.FabricImage}/>
	          <label style={{marginTop:5}}>Wickford</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Blackpool'))} className={classes.FabricList}>
	          <img src={require(`../../../img/livePreview/Blackpool/674_huge_c300.jpg`)} width='100%' className={classes.FabricImage}/>
	          <label style={{marginTop:5}}>Blackpool</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Farlie'))} className={classes.FabricList}>
	          <img src={require(`../../../img/livePreview/Farlie//1237_huge_c300.jpg`)} width='100%' className={classes.FabricImage}/>
	          <label style={{marginTop:5}}>Farlie</label>
	        </div>
        </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Tuxedo</h3>
      	<div className={classes.InnerFabricsList}>
	        <div onClick={()=>(setPilihanKain('Blackpool'))} className={classes.FabricList}>
	          <img src={require(`../../../img/livePreview/Blackpool/674_huge_c300.jpg`)} width='100%' className={classes.FabricImage}/>
	          <label style={{marginTop:5}}>Blackpool</label>
	        </div>
        </div>
      </div>
      <span className={classes.changeFeature} onClick={()=>(setPilihan('fitur'))}>Choose {pilihanKain} as Fabric</span>
    </div>
  )
}

export default Kain;
