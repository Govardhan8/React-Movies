import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RenderMovie } from './RenderMovie'
import { Api_url } from '../App.js'

const EditPage = () => {
	const { id } = useParams()
	const [start, setStart] = useState(false)
	const [movies, setMovies] = useState('')
	useEffect(() => {
		const setMovie = () => {
			fetch(`${Api_url}/movies/${id}`)
				.then((data) => data.json())
				.then((mv) => {
					setMovies(mv)
					setStart(true)
				})
		}
		setMovie()
	}, [id])

	return (
		<div style={{ minHeight: '100vh' }}>
			{start && <RenderMovie movie={movies} id={id} />}
		</div>
	)
}

export default EditPage
