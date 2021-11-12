import * as React from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AddIcon from '@mui/icons-material/Add'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'

export default function NestedList({ style, menu }) {
	return (
		<List
			sx={{
				width: '100vw',
				bgcolor: 'background.paper',
			}}
			style={style}
			component='nav'
			aria-labelledby='nested-list-subheader'
		>
			<ListItemButton>
				<Link className='links' onClick={menu} to='/'>
					<ListItemIcon>
						<HomeIcon style={{ color: style.color }} />
					</ListItemIcon>
					<ListItemText primary='Home' style={{ color: style.color }} />
				</Link>
			</ListItemButton>
			<ListItemButton>
				<Link to='add' className='links' onClick={menu}>
					<ListItemIcon>
						<AddIcon style={{ color: style.color }} />
					</ListItemIcon>
					<ListItemText primary='AddMovie' style={{ color: style.color }} />
				</Link>
			</ListItemButton>
		</List>
	)
}
