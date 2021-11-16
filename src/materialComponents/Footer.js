import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
	return (
		<footer className='footer'>
			<a href='https://github.com/Govardhan8/React-Movies'>
				<GitHubIcon
					sx={{
						fontSize: { xs: '1.5rem', sm: '2rem' },
						color: 'white',
					}}
				/>
			</a>
			<a href='https://www.linkedin.com/in/govardhan-n-22b856168'>
				<LinkedInIcon
					sx={{
						fontSize: { xs: '1.5rem', sm: '2rem' },
						color: 'white',
						marginLeft: { xs: '1.5rem', md: '2.5rem' },
					}}
				/>
			</a>
		</footer>
	)
}

export default Footer
