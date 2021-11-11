import StarIcon from '@mui/icons-material/Star'
import './movie.css'
import { Description } from './Description'
import { StyleComponent } from './context/Theme'

export function Movie({ name, url, rating, summary }) {
	return (
		<>
			<div className='card' style={StyleComponent()}>
				<div className='movieContainer'>
					<img className='image' src={url} alt={name} />
					<div className='details'>
						<h2 className='rating'>
							<StarIcon />
							<span styles={{ color: rating > 3.5 ? 'green' : 'red' }}>
								{rating}/10
							</span>
						</h2>
						<h2 className='title'>{name}</h2>
					</div>
				</div>
				<Description summary={summary} />
			</div>
		</>
	)
}
