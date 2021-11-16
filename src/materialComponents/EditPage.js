import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RenderMovie } from './RenderMovie'

const EditPage = () => {
	const { id } = useParams()
	const [start, setStart] = useState(false)
	const [movies, setMovies] = useState('')
	useEffect(() => {
		const setMovie = () => {
			fetch(`https://6166c4e213aa1d00170a670e.mockapi.io/movies/${id}`)
				.then((data) => data.json())
				.then((mv) => {
					setMovies(mv)
					setStart(true)
				})
		}
		setMovie()
	}, [id])

	return <>{start && <RenderMovie movie={movies} id={id} />}</>
}

export default EditPage
