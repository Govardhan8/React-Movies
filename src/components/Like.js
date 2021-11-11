import { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import Badge from '@mui/material/Badge'
import './like.css'

const Like = () => {
	const [like, setLike] = useState(0)
	const [dislike, setDislike] = useState(0)
	return (
		<div className='space'>
			<Badge badgeContent={like} color='primary'>
				<ThumbUpIcon
					onClick={() => {
						setLike(like + 1)
					}}
				/>
			</Badge>

			<Badge badgeContent={dislike} color='error'>
				<ThumbDownIcon
					onClick={() => {
						setDislike(dislike + 1)
					}}
				/>
			</Badge>
		</div>
	)
}

export default Like
