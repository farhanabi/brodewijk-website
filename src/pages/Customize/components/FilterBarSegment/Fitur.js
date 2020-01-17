import React, {useState} from 'react';
import classes from './Fitur.css';

const Fitur = ({pilihan,pilihanKain,pilihanLining,harga,fiturJas,setPilihan,setPilihanKain,setPilihanLining,setHarga,setFiturJas}) => {
	/*fitur.lapelStyle='notch';fitur.lapelWidth='medium';setFiturJas(fitur)*/ 
	const [monog,setMonog] = useState('')
	return (
		<div>
			<h1 style={{letterSpacing:'0.05em',fontWeight:'500'}}>Features</h1>
      <div className={classes.FeaturesList}>
        <h3 style={{margin:'10px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Fit</h3>
      	<div className={classes.InnerFeaturesList}>
	        { (fiturJas.fit === 'slim') 
		        ? <div className={classes.FeatureListSelected}>
			          <label style={{textAlign:'center'}}>Slim Fit</label>
			        </div>
			      : <div onClick={()=>{setFiturJas({...fiturJas,fit:'slim'})}} className={classes.FeatureList}>
			          <label style={{textAlign:'center',cursor:'pointer'}}>Slim Fit</label>
			        </div> }
	        { (fiturJas.fit === 'regular') 
		        ? <div className={classes.FeatureListSelected}>
			          <label style={{textAlign:'center'}}>Regular Fit</label>
			        </div>
			      : <div onClick={()=>{setFiturJas({...fiturJas,fit:'regular'})}} className={classes.FeatureList}>
			          <label style={{textAlign:'center',cursor:'pointer'}}>Regular Fit</label>
			        </div> }
        </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Lining</h3>
      	<div className={classes.InnerFeaturesList}>
	        { (pilihanLining.jenis === 'Standard') 
		        ? <div className={classes.FeatureListSelected}>
			          <label style={{textAlign:'center'}}>Standard</label>
			        </div>
			      : <div onClick={()=>{setPilihanLining({...pilihanLining,jenis:'Standard'})}} className={classes.FeatureList}>
			          <label style={{textAlign:'center',cursor:'pointer'}}>Standard</label>
			        </div> }
	        { (pilihanLining.jenis === 'Bemberg') 
		        ? <div className={classes.FeatureListSelected}>
			          <label style={{textAlign:'center'}}>&#10054; Bemberg</label>
			        </div>
			      : <div onClick={()=>{setPilihanLining({...pilihanLining,jenis:'Bemberg'})}} className={classes.FeatureList}>
			          <label style={{textAlign:'center',cursor:'pointer'}}>&#10054; Bemberg</label>
			        </div> }
			    { (pilihanLining.jenis === 'Motif') 
		        ? <div className={classes.FeatureListSelected}>
			          <label style={{textAlign:'center'}}>Pattern</label>
			        </div>
			      :	<div onClick={()=>{setPilihanLining({...pilihanLining,jenis:'Motif'})}} className={classes.FeatureList}>
				        <label style={{textAlign:'center',cursor:'pointer'}}>Pattern</label>
				      </div>
			      }  
	        
			    { (pilihanLining.jenis === 'Standard') 
	        	? <div className={classes.InnerFabricsList}>
	        			{ (pilihanLining.jenis === 'Standard' && pilihanLining.warna === 'Black' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Black.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Black</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Standard',warna:'Black'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Black.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Black</label>
					        </div>}
					      { (pilihanLining.jenis === 'Standard' && pilihanLining.warna === 'Navy Blue' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Navy Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Navy Blue</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Standard',warna:'Navy Blue'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Navy Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Navy Blue</label>
					        </div>}
					      { (pilihanLining.jenis === 'Standard' && pilihanLining.warna === 'Dark Grey' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Dark Grey.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Dark Grey</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Standard',warna:'Dark Grey'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Dark Grey.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Dark Grey</label>
					        </div>} 
					      { (pilihanLining.jenis === 'Standard' && pilihanLining.warna === 'Maroon' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Maroon.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Maroon</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Standard',warna:'Maroon'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Maroon.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Maroon</label>
					        </div>}
					      { (pilihanLining.jenis === 'Standard' && pilihanLining.warna === 'White' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/White.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>White</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Standard',warna:'White'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/White.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>White</label>
					        </div>} 
					      { (pilihanLining.jenis === 'Standard' && pilihanLining.warna === 'Orange Silk' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Orange Silk.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Orange Silk</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Standard',warna:'Orange Silk'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Orange Silk.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Orange Silk</label>
					        </div>}
					      { (pilihanLining.jenis === 'Standard' && pilihanLining.warna === 'Chocolate Brown' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Chocolate Brown.png`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Chocolate Brown</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Standard',warna:'Chocolate Brown'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Chocolate Brown.png`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Chocolate Brown</label>
					        </div>}
					      { (pilihanLining.jenis === 'Standard' && pilihanLining.warna === 'Silver Grey' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Silver Grey.png`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Silver Grey</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Standard',warna:'Silver Grey'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Silver Grey.png`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Silver Grey</label>
					        </div>}
					      { (pilihanLining.jenis === 'Standard' && pilihanLining.warna === 'Dark Green' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Dark Green.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Dark Green</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Standard',warna:'Dark Green'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Dark Green.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Dark Green</label>
					        </div>}
					      { (pilihanLining.jenis === 'Standard' && pilihanLining.warna === 'Light Blue' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Light Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Light Blue</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Standard',warna:'Light Blue'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Light Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Light Blue</label>
					        </div>} 	
	        		</div>
					  : null }

			    { (pilihanLining.jenis === 'Bemberg') 
	        	? <div className={classes.InnerFabricsList}>
	        			<h4 style={{margin:'5px auto',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'1vw',lineHeight:'1.5em',color:'rgba(75,75,75,1)'}}><b style={{fontWeight:600}}>Premium Silk</b>, Cooler, Thermal Comfort, Softer on Your Skin.</h4>     
					    	{ (pilihanLining.jenis === 'Bemberg' && pilihanLining.warna === 'Black' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Black.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Black</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Bemberg',warna:'Black'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Black.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Black</label>
					        </div>}
					      { (pilihanLining.jenis === 'Bemberg' && pilihanLining.warna === 'Navy Blue' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Navy Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Navy Blue</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Bemberg',warna:'Navy Blue'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Navy Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Navy Blue</label>
					        </div>}
					      { (pilihanLining.jenis === 'Bemberg' && pilihanLining.warna === 'Dark Grey' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Dark Grey.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Dark Grey</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Bemberg',warna:'Dark Grey'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Dark Grey.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Dark Grey</label>
					        </div>} 
					      { (pilihanLining.jenis === 'Bemberg' && pilihanLining.warna === 'Maroon' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Maroon.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Maroon</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Bemberg',warna:'Maroon'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Maroon.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Maroon</label>
					        </div>}
					      { (pilihanLining.jenis === 'Bemberg' && pilihanLining.warna === 'White' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/White.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>White</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Bemberg',warna:'White'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/White.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>White</label>
					        </div>} 
					      { (pilihanLining.jenis === 'Bemberg' && pilihanLining.warna === 'Orange Silk' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Orange Silk.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Orange Silk</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Bemberg',warna:'Orange Silk'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Orange Silk.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Orange Silk</label>
					        </div>}
					      { (pilihanLining.jenis === 'Bemberg' && pilihanLining.warna === 'Chocolate Brown' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Chocolate Brown.png`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Chocolate Brown</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Bemberg',warna:'Chocolate Brown'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Chocolate Brown.png`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Chocolate Brown</label>
					        </div>}
					      { (pilihanLining.jenis === 'Bemberg' && pilihanLining.warna === 'Silver Grey' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Silver Grey.png`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Silver Grey</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Bemberg',warna:'Silver Grey'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Silver Grey.png`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Silver Grey</label>
					        </div>}
					      { (pilihanLining.jenis === 'Bemberg' && pilihanLining.warna === 'Dark Green' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Dark Green.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Dark Green</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Bemberg',warna:'Dark Green'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Dark Green.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Dark Green</label>
					        </div>}
					      { (pilihanLining.jenis === 'Bemberg' && pilihanLining.warna === 'Light Blue' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Light Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Light Blue</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Bemberg',warna:'Light Blue'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Bemberg/Light Blue.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Light Blue</label>
					        </div>} 
					    </div>
					  : null }


	        { (pilihanLining.jenis === 'Motif') 
	        	? <div className={classes.InnerFabricsList}>
	        			{ (pilihanLining.jenis === 'Motif' && pilihanLining.warna === 'Black Batik' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Motif/IMG_8938.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Black Batik</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Motif',warna:'Black Batik'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Motif/IMG_8938.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Black Batik</label>
					        </div>}
					      { (pilihanLining.jenis === 'Motif' && pilihanLining.warna === 'Blue Batik' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Motif/IMG_8942.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Blue Batik</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Motif',warna:'Blue Batik'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Motif/IMG_8942.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Blue Batik</label>
					        </div>}
					      { (pilihanLining.jenis === 'Motif' && pilihanLining.warna === 'Black Strip' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Motif/IMG_8940.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Black Strip</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Motif',warna:'Black Strip'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Motif/IMG_8940.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Black Strip</label>
					        </div>} 
					      { (pilihanLining.jenis === 'Motif' && pilihanLining.warna === 'Gray Strip' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Motif/IMG_8941.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Gray Strip</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Motif',warna:'Gray Strip'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Motif/IMG_8941.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Gray Strip</label>
					        </div>}
					      { (pilihanLining.jenis === 'Motif' && pilihanLining.warna === 'Blue Strip' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Motif/IMG_8945.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Blue Strip</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Motif',warna:'Blue Strip'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Motif/IMG_8945.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Blue Strip</label>
					        </div>}
					      { (pilihanLining.jenis === 'Motif' && pilihanLining.warna === 'Blue Squared' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Motif/IMG_8947.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Blue Squared</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Motif',warna:'Blue Squared'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Motif/IMG_8947.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Blue Squared</label>
					        </div>}  
					      { (pilihanLining.jenis === 'Motif' && pilihanLining.warna === 'Gray Circle' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Motif/IMG_8943.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Gray Circle</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Motif',warna:'Gray Circle'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Motif/IMG_8943.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Gray Circle</label>
					        </div>}
					      { (pilihanLining.jenis === 'Motif' && pilihanLining.warna === 'Navy Mix Pattern' )
					      ? <div className={classes.FabricListSelected}>
					          <img src={require(`../../../../img/livePreview/Lining/Motif/IMG_8948.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Navy Mix Pattern</label>
					        </div>
					      : <div onClick={()=>(setPilihanLining({jenis:'Motif',warna:'Navy Mix Pattern'}))} className={classes.FabricList}>
					          <img src={require(`../../../../img/livePreview/Lining/Motif/IMG_8948.jpg`)} width='100%' className={classes.FabricImage} alt=''/>
					          <label style={{marginTop:5}}>Navy Mix Pattern</label>
					        </div>}      
					    </div>
					  : null }
			  </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Canvas Type</h3>
      	<div className={classes.InnerFeaturesList}>
	        { (fiturJas.canvas === 'unconstructed') 
		        ? <div className={classes.FeatureListSelected} style={{paddingRight:20}}>
				        <img src={require(`../../../../img/customization/canvas/construction_unconstructed.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,alignSelf:'center'}}>Unconstructed</label>
			        </div>
			      : <div onClick={()=>{setFiturJas({...fiturJas,canvas:'unconstructed'});setHarga(2000000)}} className={classes.FeatureList} style={{paddingRight:20}}>
			          <img src={require(`../../../../img/customization/canvas/construction_unconstructed.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,alignSelf:'center'}}>Unconstructed</label>
			        </div> }
	        { (fiturJas.canvas === 'full_canvas') 
		        ? <div className={classes.FeatureListSelected}>
		        		<img src={require(`../../../../img/customization/canvas/construction_full_canvas.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Full Canvas</label>
			        </div> 
			      : <div onClick={()=>{setFiturJas({...fiturJas,canvas:'full_canvas'});setHarga(2500000)}}  className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/canvas/construction_full_canvas.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Full Canvas</label>
			        </div> }
        </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Shoulder Type</h3>
      	<div className={classes.InnerFeaturesList}>
	        { (fiturJas.shoulder === 'standard') 
		        ? <div className={classes.FeatureListSelected}>
		        		<img src={require(`../../../../img/customization/shoulder/shoulders_standard.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Standard</label>
			        </div> 
			      : <div onClick={()=>{setFiturJas({...fiturJas,shoulder:'standard'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/shoulder/shoulders_standard.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Standard</label>
			        </div> }
	        { (fiturJas.shoulder === 'roped') 
		        ? <div className={classes.FeatureListSelected}>
		        		<img src={require(`../../../../img/customization/shoulder/shoulders_roped.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Roped</label>
			        </div> 
			      : <div onClick={()=>{setFiturJas({...fiturJas,shoulder:'roped'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/shoulder/shoulders_roped.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Roped</label>
			        </div> }
	        { (fiturJas.shoulder === 'soft') 
		        ? <div className={classes.FeatureListSelected}>
		        		<img src={require(`../../../../img/customization/shoulder/shoulders_soft.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Soft</label>
			        </div>
			      : <div onClick={()=>{setFiturJas({...fiturJas,shoulder:'soft'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/shoulder/shoulders_soft.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Soft</label>
			        </div> }
        </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Lapels</h3>
      	<div className={classes.InnerFeaturesList}>
	        { (fiturJas.lapelStyle === 'notch' && fiturJas.lapelWidth === 'medium') 
		        ? <div className={classes.FeatureListSelected}>
		        		<img src={require(`../../../../img/customization/lapels/notch.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Notch</label>
			        </div>
		        : <div onClick={()=>{setFiturJas({...fiturJas,lapelStyle:'notch',lapelWidth:'medium'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/lapels/notch.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Notch</label>
			        </div> }
	        { (fiturJas.lapelStyle === 'notch' && fiturJas.lapelWidth === 'narrow') 
		        ? <div className={classes.FeatureListSelected}>
				        <img src={require(`../../../../img/customization/lapels/notch_slim.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Notch Slim</label>
			        </div> 
		        : <div onClick={()=>{setFiturJas({...fiturJas,lapelStyle:'notch',lapelWidth:'narrow'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/lapels/notch_slim.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Notch Slim</label>
			        </div> }
	        { (fiturJas.lapelStyle === 'notch' && fiturJas.lapelWidth === 'wide') 
		        ? <div className={classes.FeatureListSelected}>
				        <img src={require(`../../../../img/customization/lapels/notch_wide.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Notch Wide</label>
			        </div>
		        : <div onClick={()=>{setFiturJas({...fiturJas,lapelStyle:'notch',lapelWidth:'wide'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/lapels/notch_wide.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Notch Wide</label>
			        </div> }
	        { (fiturJas.lapelStyle === 'peak' && fiturJas.lapelWidth === 'medium') 
		        ? <div className={classes.FeatureListSelected}>
				        <img src={require(`../../../../img/customization/lapels/peak.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Peak</label>
			        </div>
		        : <div onClick={()=>{setFiturJas({...fiturJas,lapelStyle:'peak',lapelWidth:'medium'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/lapels/peak.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Peak</label>
			        </div> }
	        { (fiturJas.lapelStyle === 'peak' && fiturJas.lapelWidth === 'wide') 
		        ? <div className={classes.FeatureListSelected}>
				        <img src={require(`../../../../img/customization/lapels/peak_wide.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Peak Wide</label>
			        </div>
		        : <div onClick={()=>{setFiturJas({...fiturJas,lapelStyle:'peak',lapelWidth:'wide'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/lapels/peak_wide.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Peak Wide</label>
			        </div> }
        </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Chest Pocket</h3>
      	<div className={classes.InnerFeaturesList}>
	        { (fiturJas.chestPocket === 'classic') 
		        ? <div className={classes.FeatureListSelected}>
				        <img src={require(`../../../../img/customization/chestPocket/chest_pocket_welted.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Welted</label>
			        </div>
		        : <div onClick={()=>{setFiturJas({...fiturJas,chestPocket:'classic'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/chestPocket/chest_pocket_welted.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Welted</label>
			        </div> }
	        { (fiturJas.chestPocket === 'patched') 
		        ? <div className={classes.FeatureListSelected}>
				        <img src={require(`../../../../img/customization/chestPocket/chest_pocket_round_patch.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Round Patch</label>
			        </div>
			      : <div onClick={()=>{setFiturJas({...fiturJas,chestPocket:'patched'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/chestPocket/chest_pocket_round_patch.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Round Patch</label>
			        </div> }
        </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Buttons</h3>
      	<div className={classes.InnerFeaturesList}>
	        { (fiturJas.buttons === '1' && fiturJas.buttonsSegment === 'single_breasted') 
		        ? <div className={classes.FeatureListSelected}>
				        <img src={require(`../../../../img/customization/buttons/one.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>One</label>
			        </div>
			      : <div onClick={()=>{setFiturJas({...fiturJas,buttons:'1',buttonsSegment:'single_breasted'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/buttons/one.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>One</label>
			        </div> }
	        { (fiturJas.buttons === '2' && fiturJas.buttonsSegment === 'single_breasted') 
		        ? <div className={classes.FeatureListSelected}>
				        <img src={require(`../../../../img/customization/buttons/two.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Two</label>
			        </div>
			      : <div onClick={()=>{setFiturJas({...fiturJas,buttons:'2',buttonsSegment:'single_breasted'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/buttons/two.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Two</label>
			        </div> }
	        { (fiturJas.buttons === '3' && fiturJas.buttonsSegment === 'single_breasted') 
		        ? <div className={classes.FeatureListSelected}>
				        <img src={require(`../../../../img/customization/buttons/three.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Three</label>
			        </div>
			      : <div onClick={()=>{setFiturJas({...fiturJas,buttons:'3',buttonsSegment:'single_breasted'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/buttons/three.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5}}>Three</label>
			        </div> }
	        {
	        // <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	        //   <img src={require(`../../../../img/customization/buttons/3_button_rollover.png`)} width='100%' className={classes.FeatureImage} alt=''/>
	        //   <label style={{marginTop:5,textAlign:'center'}}>Three Buttons Roll-Over</label>
	        // </div>
	    		}
	        { (fiturJas.buttons === '4' && fiturJas.buttonsSegment === 'double_breasted') 
		        ? <div className={classes.FeatureListSelected}>
		        		<img src={require(`../../../../img/customization/buttons/dbl_breasted_4_buttons.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>Four Buttons Double Breasted</label>
			        </div>
		        : <div onClick={()=>{setFiturJas({...fiturJas,buttons:'4',buttonsSegment:'double_breasted'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/buttons/dbl_breasted_4_buttons.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>Four Buttons Double Breasted</label>
			        </div> }
	        { (fiturJas.buttons === '6' && fiturJas.buttonsSegment === 'double_breasted') 
		        ? <div className={classes.FeatureListSelected}>
		        		<img src={require(`../../../../img/customization/buttons/dbl_breasted_6_buttons.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>Six Buttons Double Breasted</label>
			        </div>
		        : <div onClick={()=>{setFiturJas({...fiturJas,buttons:'6',buttonsSegment:'double_breasted'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/buttons/dbl_breasted_6_buttons.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>Six Buttons Double Breasted</label>
			        </div> }
        </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Pockets</h3>
      	<div className={classes.InnerFeaturesList}>
	        { (fiturJas.pockets === 'double_welt') 
		        ? <div className={classes.FeatureListSelected}>
				        <img src={require(`../../../../img/customization/pockets/no_pocket_flaps.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>No Pocket Flaps</label>
			        </div>
			      : <div onClick={()=>{setFiturJas({...fiturJas,pockets:'double_welt'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/pockets/no_pocket_flaps.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>No Pocket Flaps</label>
			        </div> }
	        { (fiturJas.pockets === 'with_flap') 
		        ? <div className={classes.FeatureListSelected}>
				        <img src={require(`../../../../img/customization/pockets/pocket_flaps.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>Pocket Flaps</label>
			        </div>
			      : <div onClick={()=>{setFiturJas({...fiturJas,pockets:'with_flap'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/pockets/pocket_flaps.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>Pocket Flaps</label>
			        </div> }
	        { (fiturJas.pockets === 'patched') 
		        ? <div className={classes.FeatureListSelected}>
				        <img src={require(`../../../../img/customization/pockets/patch_pockets.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>Patch Pockets</label>
			        </div>
			      : <div onClick={()=>{setFiturJas({...fiturJas,pockets:'patched'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/pockets/patch_pockets.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>Patch Pockets</label>
			        </div> }
	        { (fiturJas.pockets === 'with_flap_slanted') 
		        ? <div className={classes.FeatureListSelected}>
				        <img src={require(`../../../../img/customization/pockets/pocket_flaps_slanted.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>Pocket Flaps Slanted</label>
			        </div>
			      : <div onClick={()=>{setFiturJas({...fiturJas,pockets:'with_flap_slanted'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/pockets/pocket_flaps_slanted.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>Pocket Flaps Slanted</label>
			        </div> }
	        { (fiturJas.pockets === 'double_welt_slanted') 
		        ? <div className={classes.FeatureListSelected}>
			          <img src={require(`../../../../img/customization/pockets/no_pocket_flaps_slanted.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>No Pocket Flaps Slanted</label>
			        </div>
				    : <div onClick={()=>{setFiturJas({...fiturJas,pockets:'double_welt_slanted'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/pockets/no_pocket_flaps_slanted.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>No Pocket Flaps Slanted</label>
			        </div> }
        </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Vents</h3>
      	<div className={classes.InnerFeaturesList}>
	        { (fiturJas.vents === 'one') 
		        ? <div className={classes.FeatureListSelected}>
			          <img src={require(`../../../../img/customization/vents/vents_one.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>One</label>
			        </div>
			      : <div onClick={()=>{setFiturJas({...fiturJas,vents:'one'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/vents/vents_one.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>One</label>
			        </div> }
	        { (fiturJas.vents === 'two') 
		        ? <div className={classes.FeatureListSelected}>
			          <img src={require(`../../../../img/customization/vents/vents_two.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>Two</label>
			        </div>
			      : <div onClick={()=>{setFiturJas({...fiturJas,vents:'two'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/vents/vents_two.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>Two</label>
			        </div> }
	        { (fiturJas.vents === 'none') 
		        ? <div className={classes.FeatureListSelected}>
			          <img src={require(`../../../../img/customization/vents/vents_none.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>None</label>
			        </div> 
		    		: <div onClick={()=>{setFiturJas({...fiturJas,vents:'none'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/vents/vents_none.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>None</label>
			        </div> }
        </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Vest</h3>
      	<div className={classes.InnerFeaturesList}>
	        { (fiturJas.vest === 'none') 
		        ? <div className={classes.FeatureListSelected}>
			          <img src={require(`../../../../img/customization/vest/no_vest.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>Without Vest</label>
			        </div> 
		    		: <div onClick={()=>{setFiturJas({...fiturJas,vest:'none'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/vest/no_vest.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>Without Vest</label>
			        </div> }
	        { (fiturJas.vest === 'with') 
		        ? <div className={classes.FeatureListSelected}>
			          <img src={require(`../../../../img/customization/vest/with_vest.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>With Vest</label>
			        </div>
			      : <div onClick={()=>{setFiturJas({...fiturJas,vest:'with'})}} className={classes.FeatureList}>
			          <img src={require(`../../../../img/customization/vest/with_vest.png`)} width='100%' className={classes.FeatureImage} alt=''/>
			          <label style={{marginTop:5,textAlign:'center'}}>With Vest</label>
			        </div> }
        </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Monogram</h3>
      	<div className={classes.InnerFeaturesList}>
      		{ (monog === '')
      			? <input onChange={e => setMonog(e.target.value)} value={monog} style={{border:'2px solid rgba(70,70,70,0)',borderBottom:'2px solid rgba(70,70,70,0.75)',margin:'5px 0 5px 10px',width:'75%',fontFamily:'Helvetica',fontWeight:'400',padding:5}} placeholder='Your monogram is empty'></input>
      			: <input onChange={e => setMonog(e.target.value)} value={monog} style={{border:'2px solid rgba(70,70,70,0.75)',margin:'5px 0 5px 10px',width:'75%',fontFamily:'Helvetica',fontWeight:'400',padding:5}}></input>
      		}
        </div>
        <h3 style={{margin:'25px 0 0 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Additional Request</h3>
        <h4 style={{margin:'5px 0 5px 10px',fontFamily:'Helvetica',letterSpacing:'0.03em',fontWeight:'400',fontSize:'12px'}}>Just tell us what else do you want ;)</h4>
      	<div className={classes.InnerFeaturesList}>
      		<textarea type='text' maxlength='20' style={{margin:'5px 0 5px 10px',width:'75%',fontFamily:'Helvetica',fontWeight:'400',padding:5}}></textarea>
        </div>

      </div>
	  	<div className={classes.changeFeatureContainer}>
		  	<span className={classes.changeFeatureLeft} onClick={()=>{setPilihan('kain');setFiturJas({...fiturJas,shoulder:'standard',lapelWidth:'narrow',lapelStyle:'notch',chestPocket:'classic',buttonsSegment:'single_breasted',buttons:'1',pockets:'double_welt',vents:'one'})}}>Back to Fabric</span>
		    <span className={classes.changeFeatureRight} onClick={()=>setPilihan('ukur')}>Measure</span>
      </div>
    </div>
	)
}

export default Fitur;