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
// import { useMovies } from './context/Theme'
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

const Movie = ({ movie, hide, deleteFunction }) => {
	const [expanded, setExpanded] = useState(false)
	// const { movies, setMovies } = useMovies()
	const history = useHistory()
	const deleteMovie = () => {
		// const newMovies = movies.filter((m) => m.name !== movie.name)
		// setMovies([...newMovies])
		deleteFunction(movie._id)
		history.push('/')
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
					maxWidth: '600px',
					border: '1px solid slategray',
					borderRadius: '1rem',
					marginTop: '1rem',
				}}
			>
				<CardMedia
					onClick={() => {
						history.push('/trailer/' + movie._id)
					}}
					component={!hide ? 'img' : 'iframe'}
					sx={{
						width: '100%',
						maxWidth: '800px',
						height: { xs: 250, sm: 350, md: 400 },
					}}
					src={!hide ? movie.poster : movie.trailer}
					alt={movie.name}
					allowFullScreen
				/>

				<CardHeader
					sx={{ pb: 0, ml: 3 }}
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
						sx={{ ml: 2, mr: 'auto' }}
					>
						<DeleteIcon />
					</IconButton>
					{!hide && (
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='open drawer'
							onClick={() => {
								history.push('./edit/' + movie._id)
							}}
						>
							<EditIcon />
						</IconButton>
					)}
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
						<Typography paragraph>
							<b>Description :</b>
						</Typography>
						<Typography paragraph>{movie.summary}</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</>
	)
}

export default Movie
