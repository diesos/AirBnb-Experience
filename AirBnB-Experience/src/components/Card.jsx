import stars from '../assets/star.png'

export default function Card(prop){
	const cardId = prop.id
	const spotOn = prop.spotOn
	return(
		<div className="card-container" key={cardId}>
			{spotOn === 0 && <div className="card--badge"><p>SOLD OUT</p></div>}
			<div className="photo">
					<img src={`../public/${prop.img}`} alt="pictures" />
			</div>
			<div className="detail">
					<span className="standard"><img src={stars} alt="star" />
					{prop.rating}<span className="gray"> ({prop.ratingCount}) • {prop.country}</span></span>
					<p>{prop.title}</p>
					{/* <p><i>{prop.description}</i></p> */}
					<p><strong>From ${prop.price}</strong>/ person</p>

			</div>
		</div>
	)
}
