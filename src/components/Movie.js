import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import './movie.css'
import Like from './Like'

export function Movie({ name, url, rating, summary }) {
	const [expanded, setExpanded] = useState(false)
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}
	return (
		<>
			<div className='card'>
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
				{Description()}
				<Like />
			</div>
		</>
	)

	function Description() {
		return (
			<Accordion
				style={{ margin: 0 }}
				expanded={expanded === 'panel4'}
				onChange={handleChange('panel4')}
			>
				<AccordionSummary
					style={{ background: '#123637' }}
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel4bh-content'
					id='panel4bh-header'
				>
					<Typography className='desc'>
						<span>Description</span>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography className='summary'>
						<span>{summary}</span>
					</Typography>
				</AccordionDetails>
			</Accordion>
		)
	}
}
