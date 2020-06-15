import React, {useState} from 'react'
import classes from './KainMobile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const fabrics = [
	{
		"name": "Hagebridge Wool",
		"spec": "Super 200s Wool, Cool in Summer, Warm in Winter, Easy to maintain, Wrinkle Free.",
		"recommendation": "Best for Wedding, Business, Party, and Graduation",
		"types": [
			{"jenis": "Hagebridge Wool/Dim Gray", "warna": "Dim Gray", "img": "img/livePreview/Hagebridge Wool/Dim Gray/Dim Gray.jpg", "price": 2110000},
			{"jenis": "Hagebridge Wool/Navy Blue", "warna": "Navy Blue", "img": "img/livePreview/Hagebridge Wool/Navy Blue/Navy Blue.jpg", "price": 2110000},
			{"jenis": "Hagebridge Wool/Olive Green", "warna": "Olive Green", "img": "img/livePreview/Hagebridge Wool/Olive Green/Olive Green.jpg", "price": 2110000},
			{"jenis": "Hagebridge Wool/Peru Brown", "warna": "Peru Brown", "img": "img/livePreview/Hagebridge Wool/Peru Brown/Peru Brown.jpg", "price": 2110000},
			{"jenis": "Hagebridge Wool/Saddle Brown", "warna": "Saddle Brown", "img": "img/livePreview/Hagebridge Wool/Saddle Brown/Saddle Brown.jpg", "price": 2110000},
		],
	},
	{
		"name": "Vanelli",
		"spec": "Super 200s Wool, Super Solid Colour, Warmer, Easy to maintain, Wrinkle Free.",
		"recommendation": "Best for Wedding, Business, Party, and Graduation",
		"types": [
			{"jenis": "Blackpool", "warna": "Black Navy", "img": "img/livePreview/Vanelli/Black Navy/Black Navy.jpg", "price": 2110000},
			{"jenis": "Blackpool", "warna": "Dark Brown", "img": "img/livePreview/Vanelli/Dark Brown/Dark Brown.jpg", "price": 2110000},
			{"jenis": "Farlie", "warna": "Super Black", "img": "img/livePreview/Vanelli/Super Black/Super Black.jpg", "price": 2110000},
		],
	},
	{
		"name": "Kavelingen",
		"spec": "Super 270s Wool, Recommended for tropical climate, Easy to maintain, Wrinkle Free, Very Light.",
		"recommendation": "Best for Wedding, Business, and Party",
		"types": [
			{"jenis": "Siberia", "warna": "Black Check", "img": "img/livePreview/Kavelingen/Black Check/Black Check.jpg", "price": 1520000},
			{"jenis": "Oberon", "warna": "Chocolte Check", "img": "img/livePreview/Kavelingen/Chocolate Check/Chocolate Check.jpg", "price": 1520000},
			{"jenis": "Wickford", "warna": "Grayish Brown", "img": "img/livePreview/Kavelingen/Grayish-Brown/Grayish-Brown.jpg", "price": 1520000},
			{"jenis": "Blackpool", "warna": "Navy Blue Check", "img": "img/livePreview/Kavelingen/Navy Blue Check/Navy Blue Check.jpg", "price": 1520000},
			{"jenis": "Farlie", "warna": "Warm Gray", "img": "img/livePreview/Kavelingen/Warm Gray/Warm Gray.jpg", "price": 1520000},
		],
	},
	{
		"name": "Sharkskin",
		"spec": "Super 270s Wool, Recommended for tropical climate, Easy to maintain, Wrinkle Free, Very Light.",
		"recommendation": "Best for Wedding, Business, Party, Graduation",
		"types": [
			{"jenis": "Blackpool", "warna": "Black", "img": "img/livePreview/Sharkskin/Black/Black.jpg", "price": 1520000},
			{"jenis": "Blackpool", "warna": "Brown", "img": "img/livePreview/Sharkskin/Brown/Brown.jpg", "price": 1520000},
			{"jenis": "Blackpool", "warna": "Dark Grey", "img": "img/livePreview/Sharkskin/Dark Grey/Dark Grey.jpg", "price": 1520000},
			{"jenis": "Blackpool", "warna": "Dim Grey", "img": "img/livePreview/Sharkskin/Dim Grey/Dim Grey.jpg", "price": 1520000},
			{"jenis": "Blackpool", "warna": "Light Grey", "img": "img/livePreview/Sharkskin/Light Grey/Light Grey.jpg", "price": 1520000},
			{"jenis": "Blackpool", "warna": "Midnight Blue", "img": "img/livePreview/Sharkskin/Midnight Blue/Midnight Blue.jpg", "price": 1520000},
			{"jenis": "Blackpool", "warna": "Navy Blue", "img": "img/livePreview/Sharkskin/Navy Blue/Navy Blue.jpg", "price": 1520000},
		],
	},
	{
		"name": "Halk",
		"spec": "Semi Wool, Thermal comfort, comfort fit, shimmering look.",
		"recommendation": "Best for Bridal/Wedding and Party",
		"types": [
			{"jenis": "Blackpool", "warna": "Black", "img": "img/livePreview/Halk/Black/Black.jpg", "price": 1520000},
			{"jenis": "Blackpool", "warna": "Dark Maroon", "img": "img/livePreview/Halk/Dark Maroon/Dark Maroon.jpg", "price": 1520000},
			{"jenis": "Blackpool", "warna": "Dark Red", "img": "img/livePreview/Halk/Dark Red/Dark Red.jpg", "price": 1520000},
			{"jenis": "Blackpool", "warna": "Gold", "img": "img/livePreview/Halk/Gold/Gold.jpg", "price": 1520000},
			{"jenis": "Blackpool", "warna": "Navy Blue", "img": "img/livePreview/Halk/Navy Blue/Navy Blue.jpg", "price": 1520000},
			{"jenis": "Blackpool", "warna": "Silver", "img": "img/livePreview/Halk/Silver/Silver.jpg", "price": 1520000},
			{"jenis": "Blackpool", "warna": "Slate Gray", "img": "img/livePreview/Halk/Slate Gray/Slate Gray.jpg", "price": 1520000},
		],
		"price": 1520000
	},
	{
		"name": "Solva",
		"spec": "Silk Wool, Thermal comfort, comfort fit, shimmering look, Wrinkle free.",
		"recommendation": "Best for Bridal/Wedding and Party",
		"types": [
			{"jenis": "Blackpool", "warna": "White", "img": "img/livePreview/Solva/White/White.jpg", "price": 1520000},
		],
		
	},
	{
		"name": "Enslev",
		"spec": "Semi Wool, Thermal Comfort, Comfort Fit, Quick Drying,Easy to Maintain.",
		"recommendation": "Best for Bridal/Wedding and Party",
		"types": [
			{"jenis": "Blackpool", "warna": "Hash Brown", "img": "img/livePreview/Enslev/Hash Brown/Hash Brown.jpg", "price": 1520000},
			{"jenis": "Blackpool", "warna": "Silver", "img": "img/livePreview/Enslev/Silver/Silver.jpg", "price": 1520000},
		],
	},
	{
		"name": "Nimbska",
		"spec": "Semi Wool, Cool Wool Technology, Wrinkle Free, Very Light, Drapery.",
		"recommendation": "Best for Wedding, Business, Party, and Gradutation",
		"types": [
			{"jenis": "Blackpool", "warna": "Matcha Green", "img": "img/livePreview/Nimbska/Matcha Green/Matcha Green.jpg", "price": 1520000},
			{"jenis": "Blackpool", "warna": "Sandy Brown", "img": "img/livePreview/Nimbska/Sandy Brown/Sandy Brown.jpg", "price": 1520000},
			{"jenis": "Blackpool", "warna": "Torque Blue", "img": "img/livePreview/Nimbska/Torque Blue/Torque Blue.jpg", "price": 1520000},
		],
	},
	{
		"name": "Jet Black",
		"spec": "Semi Wool, Classic solid black, Cool comfort, Easy to maintain.",
		"recommendation": "Best for Business, Graduation, Party",
		"types": [
			{"jenis": "Jet Black/Black", "warna": "Black", "img": "img/livePreview/Jet Black/Black/Black.jpg", "price": 975000},
		],
	},
]
const KainMobile = ({pilihan,pilihanKain,harga,kainPrice,setPilihan,setPilihanKain,setHarga,setKainPrice}) => {
	const [subFabrics, setSubFabrics] = useState([])
	const [isSubFabrics, setIsSubFabrics] = useState(false)
	
	const changeSubFabrics = (name) => {
		const subFabrics = fabrics.filter(v => v.name === name)
		setSubFabrics(subFabrics[0])
		setIsSubFabrics(!isSubFabrics)
	}

	const onClickFabric = (value) => {
		setPilihanKain({ jenis: value.jenis, warna: value.warna })
		setKainPrice(value.price)
	}

	return (
		<div style={{ width: '100%' }}>
      <p style={{ fontSize: '16px', margin: '5px', display: 'inline-block' }}>
				Fabric Type {isSubFabrics ? `/ ${subFabrics.name}` : ``}
			</p>
			{isSubFabrics ? (
				<button className={classes.ButtonIcon} onClick={() => setIsSubFabrics(!isSubFabrics)}>
					<FontAwesomeIcon icon={faAngleLeft} />
				</button>
			) : null}
			<div className={classes.FabricsList}>
				{fabrics.length > 0 && !isSubFabrics ? (
					fabrics.map((v, k) => (
						<div className={classes.FabricItem} key={k} onClick={() => changeSubFabrics(v.name)}>
							<h5>{v.name}</h5>
						</div>
					))
				) : (
					subFabrics.types.map((v,k) => (
						<div className={classes.FabricItem} key={k} onClick={() => onClickFabric(v)}
							style={pilihanKain.jenis === v.jenis && pilihanKain.warna === v.warna ? { background: '#f2f2f2' } : { background: '#fff' }}
						>
							<h5>{v.warna}</h5>
						</div>
					))
				)}
			</div>
			<div className={classes.WrapperButton}>
				<button className={classes.ButtonAction} onClick={()=>{setPilihan('fitur');setPilihanKain({...pilihanKain, jenis: 'Siberia'})}}>
					Next to Feature
				</button>
			</div>
			
    </div>
  )
}

export default KainMobile;