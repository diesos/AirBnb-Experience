import Katie from './assets/katie-zaferes.png'
import stars from './assets/star.png'

export default function Card(){
	return(
		<div className="main-card-container">
		<div className="card-container">
			<div className="photo">
					<img src={Katie} alt="pic of Katie" />
			</div>
			<div className="detail">
					<span className="standard"><img src={stars} alt="star" />
					5.0<span className="gray"> (6) • USA</span></span>
					<p>Life lessons with Katie Zaferes</p>
					<p><strong>From $136 </strong>/ person</p>

			</div>
		</div>
		</div>
	)
}
