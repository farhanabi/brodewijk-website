import React, {useState} from 'react'
import classes from './FiturMobile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const features = [
	{
		"name": "Fit",
		"types": [
			{"name": "slim", "label": "Slim Fit"},
			{"name": "regular", "label": "Regular Fit"},
		],
	},
	{
		"name": "Lining",
		"types": [
			{
				"name": "Standard", 
				"label": "Standard", 
				"color": [
					{"name": "Navy Blue", "img": "img/livePreview/Lining/Bemberg/Navy Blue.jpg"},
					{"name": "Dark Grey", "img": "img/livePreview/Lining/Bemberg/Dark Grey.jpg"},
					{"name": "Maroon", "img": "img/livePreview/Lining/Bemberg/Maroon.jpg"},
					{"name": "White", "img": "img/livePreview/Lining/Bemberg/White.jpg"},
					{"name": "Orange Silk", "img": "img/livePreview/Lining/Bemberg/Orange Silk.jpg"},
					{"name": "Chocolate Brown", "img": "img/livePreview/Lining/Bemberg/Chocolate Brown.jpg"},
					{"name": "Silver Grey", "img": "img/livePreview/Lining/Bemberg/Silver Grey.jpg"},
					{"name": "Dark Green", "img": "img/livePreview/Lining/Bemberg/Dark Green.jpg"},
					{"name": "Light Blue", "img": "img/livePreview/Lining/Bemberg/Light Blue.jpg"}
				]
			},
			{
				"name": "Bemberg",
				"label": "Bemberg",
				"color": [
					{"name": "Navy Blue", "img": "img/livePreview/Lining/Bemberg/Navy Blue.jpg"},
					{"name": "Dark Grey", "img": "img/livePreview/Lining/Bemberg/Dark Grey.jpg"},
					{"name": "Maroon", "img": "img/livePreview/Lining/Bemberg/Maroon.jpg"},
					{"name": "White", "img": "img/livePreview/Lining/Bemberg/White.jpg"},
					{"name": "Orange Silk", "img": "img/livePreview/Lining/Bemberg/Orange Silk.jpg"},
					{"name": "Chocolate Brown", "img": "img/livePreview/Lining/Bemberg/Chocolate Brown.jpg"},
					{"name": "Silver Grey", "img": "img/livePreview/Lining/Bemberg/Silver Grey.jpg"},
					{"name": "Dark Green", "img": "img/livePreview/Lining/Bemberg/Dark Green.jpg"},
					{"name": "Light Blue", "img": "img/livePreview/Lining/Bemberg/Light Blue.jpg"}
				]
			},
			{
				"name": "Motif",
				"label": "Motif",
				"color": [
					{"name": "Black Batik", "img": "img/livePreview/Lining/Motif/IMG_8938.jpg"},
					{"name": "Blue Batik", "img": "img/livePreview/Lining/Motif/IMG_8942.jpg"},
					{"name": "Black Strip", "img": "img/livePreview/Lining/Motif/IMG_8940.jpg"},
					{"name": "Gray Strip", "img": "img/livePreview/Lining/Motif/IMG_8941.jpg"},
					{"name": "Blue Strip", "img": "img/livePreview/Lining/Motif/IMG_8945.jpg"},
					{"name": "Blue Squared", "img": "img/livePreview/Lining/Motif/IMG_8947.jpg"},
					{"name": "Gray Circle", "img": "img/livePreview/Lining/Motif/IMG_8943.jpg"},
					{"name": "Navy Mix Pattern", "img": "img/livePreview/Lining/Motif/IMG_8948.jpg"}
				]
			}
		],
	},
	{
		"name": "Canvas",
		"types": [
			{"name": "unconstructed", "label": "Unconstructed", "img": "img/customization/canvas/construction_unconstructed.png", "price": 2000000},
			{"name": "full_canvas", "label": "Full Canvas", "img": "img/customization/canvas/construction_full_canvas.png", "price": 2500000},
		],
	},
	{
		"name": "Shoulder Type",
		"types": [
			{"name": "standard", "label": "Standard", "img": "img/customization/shoulder/shoulders_standard.png"},
			{"name": "roped", "label": "Roped", "img": "img/customization/shoulder/shoulders_roped.png"},
			{"name": "soft", "label": "Soft", "img": "img/customization/shoulder/shoulders_soft.png"}
		],
	},
	{
		"name": "Lapels",
		"types": [
			{"name": "notch", "width": "medium", "label": "Notch", "img": "img/customization/lapels/notch.png"},
			{"name": "notch", "width": "narrow", "label": "Notch Slim", "img": "img/customization/lapels/notch_slim.png"},
			{"name": "notch", "width": "wide", "label": "Notch Wide", "img": "img/customization/lapels/notch_wide.png"},
			{"name": "peak", "width": "medium", "label": "Peak", "img": "img/customization/lapels/peak.png"},
			{"name": "peak", "width": "wide", "label": "Peak Wide", "img": "img/customization/lapels/peak_wide.png"},
			{"name": "round", "width": "medium", "label": "Shawl", "img": "img/customization/lapels/shawl.png"},
		],
	},
	{
		"name": "Chest Pocket",
		"types": [
			{"name": "classic", "label": "Welted", "img": "img/customization/chestPocket/chest_pocket_welted.png"},
			{"name": "patched", "label": "Round Patch", "img": "img/customization/chestPocket/chest_pocket_round_patch.png"},
		],
	},
	{
		"name": "Buttons",
		"types": [
			{"name": "single_breasted", "qty": "1", "label": "One", "img": "img/customization/buttons/one.png"},
			{"name": "single_breasted", "qty": "2", "label": "Two", "img": "img/customization/buttons/two.png"},
			{"name": "single_breasted", "qty": "3", "label": "Three", "img": "img/customization/buttons/three.png"},
			{"name": "double_breasted", "qty": "4", "label": "Four Buttons Double Breasted", "img": "img/customization/buttons/dbl_breasted_4_buttons.png"},
			{"name": "double_breasted", "qty": "6", "label": "Six Buttons Double Breasted", "img": "img/customization/buttons/dbl_breasted_6_buttons.png"},
		],
	},
	{
		"name": "Pockets",
		"types": [
			{"name": "double_welt", "label": "No Pocket Flaps", "img": "img/customization/pockets/no_pocket_flaps.png"},
			{"name": "with_flap", "label": "Pocket Flaps", "img": "img/customization/pockets/pocket_flaps.png"},
			{"name": "patched", "label": "Patch Pockets", "img": "img/customization/pockets/patch_pockets.png"},
			{"name": "with_flap_slanted", "label": "Pocket Flaps Slanted", "img": "img/customization/pockets/pocket_flaps_slanted.png"},
			{"name": "double_welt_slanted", "label": "No Pocket Flaps Slanted", "img": "img/customization/pockets/no_pocket_flaps_slanted.png"},
		],
	},
	{
		"name": "Vents",
		"types": [
			{"name": "one", "label": "One", "img": "img/customization/vents/vents_one.png"},
			{"name": "two", "label": "Two", "img": "img/customization/vents/vents_two.png"},
			{"name": "none", "label": "None", "img": "img/customization/vents/vents_none.png"}
		],
	},
	{
		"name": "Pants",
		"types": [
			{"name": "none", "label": "Without Pants", "img": "img/customization/none.png"},
			{"name": "with", "label": "With Pants", "img": "img/customization/pants/pants.png"}
		],
	},
	{
		"name": "Vests",
		"types": [
			{"name": "none", "label": "Without Vest", "img": "img/customization/none.png"},
			{"name": "with", "label": "With Vest", "img": "img/customization/vest/vest.png"}
		],
	},
	{
		"name": "Shirt",
		"types": [
			{"name": "none", "label": "Without Shirt", "img": "img/customization/none.png"},
			{"name": "with", "label": "With Shirt", "img": "img/customization/shirt/shirt.png"}
		],
	},
	{
		"name": "Tie",
		"types": [
			{"name": "none", "label": "None", "img": "img/customization/none.png"},
			{"name": "bowtie", "label": "Bow Tie", "img": "img/customization/tie/bowtie.png"},
			{"name": "necktie", "label": "Tie", "img": "img/customization/tie/tie.png"}
		],
	},
	{
		"name": "Monogram",
		"value": ""
	},
	{
		"name": "Additional Request",
		"value": ""
	},
]
const KainMobile = ({pilihan,pilihanKain,pilihanLining,harga,fiturJas,setPilihan,setPilihanKain,setPilihanLining,setHarga,setFiturJas}) => {
	const [subFeatures, setSubFeatures] = useState([])
	const [isSubFeatures, setIsSubFeatures] = useState(false)
	const [subLinings, setSubLinings] = useState([])
	const [isSubLinings, setIsSubLinings] = useState(false)
	
	const changeSubFeatures = (name) => {
		const subFeatures = features.filter(v => v.name === name)
		setSubFeatures(subFeatures[0])
		setIsSubFeatures(!isSubFeatures)
	}

	const changeLining = (name) => {
		setPilihanLining({ ...pilihanLining, jenis: name })
		const subLinings = subFeatures.types.filter(v => v.name === name)
		setSubLinings(subLinings[0])
		setIsSubLinings(!isSubLinings)
	}

	const changeSubFeature = () => {
		// feature fit
		if (subFeatures.name === "Fit") {
			return (
				subFeatures.types.map((v, k) => (
					<div className={classes.FeatureItem} key={k} onClick={() => setFiturJas({ ...fiturJas, fit: v.name })}
						style={fiturJas.fit === v.name ? { background: '#f2f2f2' } : { background: '#fff' }}
					>
						<h5>{v.label}</h5>
					</div>
				))
			)
		}

		// feature lining
		if (subFeatures.name === "Lining") {
			return (
				!isSubLinings ? (
					subFeatures.types.map((v, k) => (
						<div className={classes.FeatureItem} key={k} onClick={() => changeLining(v.name)}
							style={pilihanLining.jenis === v.name ? { background: '#f2f2f2' } : { background: '#fff' }}
						>
							<h5>{v.label}</h5>
						</div>
					))
				) : (
					subLinings.color.map((v,k) => (
						<div className={classes.FeatureItem} key={k} onClick={() => setPilihanLining({ ...pilihanLining, warna: v.name })}
							style={pilihanLining.warna === v.name ? { background: '#f2f2f2' } : { background: '#fff' }}
						>
							<h5>{v.name}</h5>
						</div>
					))
				)
			)
		}

		// feature canvas
		if (subFeatures.name === "Canvas") {
			return (
				subFeatures.types.map((v, k) => (
					<div className={classes.FeatureItem} key={k} onClick={() => {setFiturJas({ ...fiturJas, canvas: v.name }); setHarga(v.price)}}
						style={fiturJas.canvas === v.name ? { background: '#f2f2f2' } : { background: '#fff' }}
					>
						<h5>{v.label}</h5>
					</div>
				))
			)
		}

		// feature shoulder
		if (subFeatures.name === "Shoulder Type") {
			return (
				subFeatures.types.map((v, k) => (
					<div className={classes.FeatureItem} key={k} onClick={() => setFiturJas({ ...fiturJas, shoulder: v.name })}
						style={fiturJas.shoulder === v.name ? { background: '#f2f2f2' } : { background: '#fff' }}
					>
						<h5>{v.label}</h5>
					</div>
				))
			)
		}

		// feature lapels
		if (subFeatures.name === "Lapels") {
			return (
				subFeatures.types.map((v, k) => (
					<div className={classes.FeatureItem} key={k} onClick={() => setFiturJas({ ...fiturJas, lapelStyle: v.name, lapelWidth: v.width })}
						style={fiturJas.lapelStyle === v.name && fiturJas.lapelWidth === v.width ? { background: '#f2f2f2' } : { background: '#fff' }}
					>
						<h5>{v.label}</h5>
					</div>
				))
			)
		}

		// feature chest pocket
		if (subFeatures.name === "Chest Pocket") {
			return (
				subFeatures.types.map((v, k) => (
					<div className={classes.FeatureItem} key={k} onClick={() => setFiturJas({ ...fiturJas, chestPocket: v.name })}
						style={fiturJas.chestPocket === v.name ? { background: '#f2f2f2' } : { background: '#fff' }}
					>
						<h5>{v.label}</h5>
					</div>
				))
			)
		}

		// feature buttons
		if (subFeatures.name === "Buttons") {
			return (
				subFeatures.types.map((v, k) => (
					<div className={classes.FeatureItem} key={k} onClick={() => setFiturJas({ ...fiturJas, buttonsSegment: v.name, buttons: v.qty })}
						style={fiturJas.buttonsSegment === v.name && fiturJas.buttons === v.qty ? { background: '#f2f2f2' } : { background: '#fff' }}
					>
						<h5>{v.label}</h5>
					</div>
				))
			)
		}

		// feature pockets
		if (subFeatures.name === "Pockets") {
			return (
				subFeatures.types.map((v, k) => (
					<div className={classes.FeatureItem} key={k} onClick={() => setFiturJas({ ...fiturJas, pockets: v.name })}
						style={fiturJas.pockets === v.name ? { background: '#f2f2f2' } : { background: '#fff' }}
					>
						<h5>{v.label}</h5>
					</div>
				))
			)
		}

		// feature vents
		if (subFeatures.name === "Vents") {
			return (
				subFeatures.types.map((v, k) => (
					<div className={classes.FeatureItem} key={k} onClick={() => setFiturJas({ ...fiturJas, vents: v.name })}
						style={fiturJas.vents === v.name ? { background: '#f2f2f2' } : { background: '#fff' }}
					>
						<h5>{v.label}</h5>
					</div>
				))
			)
		}

		// feature pants
		if (subFeatures.name === "Pants") {
			return (
				subFeatures.types.map((v, k) => (
					<div className={classes.FeatureItem} key={k} onClick={() => setFiturJas({ ...fiturJas, pants: v.name })}
						style={fiturJas.pants === v.name ? { background: '#f2f2f2' } : { background: '#fff' }}
					>
						<h5>{v.label}</h5>
					</div>
				))
			)
		}

		// feature vest
		if (subFeatures.name === "Vest") {
			return (
				subFeatures.types.map((v, k) => (
					<div className={classes.FeatureItem} key={k} onClick={() => setFiturJas({ ...fiturJas, vest: v.name })}
						style={fiturJas.vest === v.name ? { background: '#f2f2f2' } : { background: '#fff' }}
					>
						<h5>{v.label}</h5>
					</div>
				))
			)
		}

		// feature shirt
		if (subFeatures.name === "Shirt") {
			return (
				subFeatures.types.map((v, k) => (
					<div className={classes.FeatureItem} key={k} onClick={() => setFiturJas({ ...fiturJas, shirt: v.name })}
						style={fiturJas.shirt === v.name ? { background: '#f2f2f2' } : { background: '#fff' }}
					>
						<h5>{v.label}</h5>
					</div>
				))
			)
		}

		// feature tie
		if (subFeatures.name === "Tie") {
			return (
				subFeatures.types.map((v, k) => (
					<div className={classes.FeatureItem} key={k} onClick={() => setFiturJas({ ...fiturJas, tie: v.name })}
						style={fiturJas.tie === v.name ? { background: '#f2f2f2' } : { background: '#fff' }}
					>
						<h5>{v.label}</h5>
					</div>
				))
			)
		}

		// feature monogram
		if (subFeatures.name === "Monogram") {
			return (
				<div className={classes.FeatureWrapperInput}>
					<input onChange={e => setFiturJas({...fiturJas, monogram:e.target.value})} value={fiturJas.monogram} className={classes.FeatureInput} placeholder='Your monogram is empty'/>
				</div>
			)
		}

		// feature additional request
		if (subFeatures.name === "Additional Request") {
			return (
				<div className={classes.FeatureWrapperInput}>
					<p>Just tell us what else do you want ;)</p>
					<input onChange={e => setFiturJas({...fiturJas, additionalRequest:e.target.value})} value={fiturJas.additionalRequest} className={classes.FeatureInput}/>
				</div>
			)
		}
	}
	
	return (
		<div style={{ width: '100%' }}>
      <p style={{ fontSize: '16px', margin: '5px', display: 'inline-block' }}>
				Feature {isSubFeatures ? `/ ${subFeatures.name}` : ``} {isSubLinings ? `/ ${subLinings.name}` : ``}
			</p>
			{isSubFeatures ? (
				<button className={classes.ButtonIcon} onClick={() => setIsSubFeatures(!isSubFeatures)}>
					<FontAwesomeIcon icon={faAngleLeft} />
				</button>
			) : null}
			<div className={classes.FeatureList}>
				{features.length > 0 && !isSubFeatures ? (
					features.map((v, k) => (
						<div className={classes.FeatureItem} key={k} onClick={() => changeSubFeatures(v.name)}>
							<h5>{v.name}</h5>
						</div>
					))
				) : (
					changeSubFeature()
				)}
			</div>
			<div className={classes.WrapperButton}>
				<button className={classes.ButtonAction} onClick={()=>{setPilihan('ukur')}}>
					Next to Measure
				</button>
				<button style={{ background: 'rgba(70,70,70,1)', color: '#fff'}} className={classes.ButtonAction} 
					onClick={()=>{setPilihan('kain');setFiturJas({...fiturJas,shoulder:'standard',lapelWidth:'narrow',lapelStyle:'notch',chestPocket:'classic',buttonsSegment:'single_breasted',buttons:'1',pockets:'double_welt',vents:'one'})}}
				>
					Back to Fabric
				</button>
			</div>
    </div>
  )
}

export default KainMobile;