import { Card } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { useMovies } from './context/Theme'
import { useHistory } from 'react-router-dom'

const ExpandMore = styled((props) => {
	const { expand, ...other } = props
	return <IconButton {...other} />
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}))

const Movie = ({ movie, hide }) => {
	const [expanded, setExpanded] = useState(false)
	const { movies, setMovies } = useMovies()
	const history = useHistory()
	console.log(movie)
	const deleteMovie = () => {
		const newMovies = movies.filter((m) => m.name !== movie.name)
		setMovies([...newMovies])
	}
	const handleExpandClick = () => {
		setExpanded(!expanded)
	}
	return (
		<>
			<Card
				sx={{
					height: 'min-content',
					width: '100%',
					maxWidth: 500,
				}}
			>
				<CardMedia
					onClick={() => {
						history.push('/trailer/' + movie.id)
					}}
					component={!hide ? 'img' : 'iframe'}
					width='100%'
					sx={{
						height: { xs: 350 },
					}}
					src={!hide ? movie.poster : movie.trailer}
					alt={movie.name}
				/>

				<CardHeader
					sx={{ pb: 0 }}
					title={movie.name}
					subheader={`IMDB: ${movie.rating}/10`}
				/>
				<CardActions>
					<IconButton
						onClick={() => deleteMovie()}
						size='large'
						edge='start'
						color='inherit'
						aria-label='open drawer'
						sx={{ mr: 'auto' }}
					>
						<DeleteIcon />
					</IconButton>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='open drawer'
						onClick={() => {
							history.push('./edit/' + movie.name)
						}}
					>
						<EditIcon />
					</IconButton>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'
					>
						<ExpandMoreIcon sx={{ m: 0 }} fontSize='large' />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Typography paragraph>Description :</Typography>
						<Typography paragraph>{movie.summary}</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</>
	)
}

export default Movie
