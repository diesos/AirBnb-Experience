import stars from '../assets/star.png'

export default function Card(prop){
	const cardId = prop.id
	return(
		<div className="main-card-container">
		<div className="card-container" key={cardId}>
			<div className="photo">
					<img src={`../assets/${prop.img}`} alt="pic of Katie" />
			</div>
			<div className="detail">
					<span className="standard"><img src={stars} alt="star" />
					{prop.rating}<span className="gray"> ({prop.ratingCount}) • {prop.country}</span></span>
					<p>{prop.title}</p>
					<p><i>{prop.description}</i></p>
					<p><strong>From ${prop.price}</strong>/ person</p>

			</div>
		</div>
		</div>
	)
}
