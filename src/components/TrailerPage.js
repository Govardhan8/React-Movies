import { useParams } from 'react-router-dom'
import { StyleComponent, useMovies } from './context/Theme'
import StarIcon from '@mui/icons-material/Star'
import './trailer.css'
import { Description } from './Description'

const TrailerPage = () => {
	const { id } = useParams()
	const { movies } = useMovies()
	const movie = movies[id - 1]

	return (
		<section className='pageContainer'>
			<div className='trailerContainer' style={StyleComponent()}>
				<iframe
					width='100%'
					height='315'
					src={movie.trailer}
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				></iframe>
				<article className='content'>
					<h3>{movie.name}</h3>
					<span>
						<StarIcon />
						{movie.rating}/10
					</span>
					<Description summary={movie.summary} />
				</article>
			</div>
		</section>
	)
}

export default TrailerPage
