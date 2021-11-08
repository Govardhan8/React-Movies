import { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import './like.css'

const Nov2 = () => {
	const [like, setLike] = useState(0)
	const [dislike, setDislike] = useState(0)
	return (
		<div className='buttons'>
			<div className='button'>
				<ThumbUpIcon
					onClick={() => {
						setLike(like + 1)
					}}
				/>
				<span>{like}</span>
			</div>
			<div className='button'>
				<ThumbDownIcon
					onClick={() => {
						setDislike(dislike + 1)
					}}
				/>
				<span>{dislike}</span>
			</div>
		</div>
	)
}

export default Nov2
