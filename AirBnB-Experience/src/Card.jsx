import Katie from './assets/katie-zaferes.png'
import stars from './assets/star.png'

export default function Card(prop){
	return(
		<div className="main-card-container">
		<div className="card-container">
			<div className="photo">
					<img src={`./assets/ + ${prop.img}`} alt="pic of Katie" />
			</div>
			<div className="detail">
					<span className="standard"><img src={stars} alt="star" />
					{prop.rating}<span className="gray">` ${prop.ratingCount} • ${prop.country}</span></span>
					<p>{prop.title}</p>
					<p><strong>`From ${prop.price} `</strong>/ person</p>

			</div>
		</div>
		</div>
	)
}
