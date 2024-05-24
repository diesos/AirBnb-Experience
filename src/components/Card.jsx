import stars from '../assets/star.png'

export default function Card(prop){
	// const origin = window.location.origin
	const cardId = prop.id
	let badgeText
	if (prop.openSpots === 0)
		badgeText = "SOLD  OUT"
	else if (prop.location === "Online")
		badgeText = "ONLINE"
	return(
		<div className="card-container" key={cardId}>
			{badgeText &&<div className="card--badge"><p>{badgeText}</p></div>}
			<div className="photo">
			<img src={`../images/${prop.img}`} alt="card Image" />

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
