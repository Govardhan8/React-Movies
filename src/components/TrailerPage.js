import { useParams } from 'react-router-dom'
import { StyleComponent, useMovies } from './context/Theme'
import StarIcon from '@mui/icons-material/Star'
import './trailer.css'
import { Description } from './Description'

const TrailerPage = () => {
	const { id } = useParams()
	const { movies } = useMovies()

	const movie = movies.filter((m) => {
		if (m.id === id) {
			return m
		} else {
			return ''
		}
	})
	console.log(movie)

	return (
		<section className='pageContainer'>
			<div className='trailerContainer' style={StyleComponent()}>
				<iframe
					width='100%'
					height='315'
					src={movie[0].trailer}
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				></iframe>
				<article className='content'>
					<h3>{movie[0].name}</h3>
					<span>
						<StarIcon />
						{movie[0].rating}/10
					</span>
					<Description summary={movie[0].summary} />
				</article>
			</div>
		</section>
	)
}

export default TrailerPage
