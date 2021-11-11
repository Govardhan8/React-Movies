import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material'
import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { StyleComponent } from './context/Theme'

export function Description({ summary }) {
	const [expanded, setExpanded] = useState(false)
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}

	return (
		<Accordion
			style={({ margin: 0 }, StyleComponent())}
			expanded={expanded === 'panel4'}
			onChange={handleChange('panel4')}
		>
			<AccordionSummary
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
