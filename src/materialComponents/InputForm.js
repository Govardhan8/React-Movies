import { Button, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Paper from '@mui/material/Paper'
import { useHistory } from 'react-router-dom'
import { Api_url } from '../App.js'

const InputForm = () => {
	const history = useHistory()
	const addMovie = (mov) => {
		fetch(`${Api_url}/movies/`, {
			method: 'POST',
			body: JSON.stringify(mov),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(() => history.push('/'))
	}
	const validations = Yup.object().shape({
		name: Yup.string().min(1, 'please enter a name').required('Required'),
		rating: Yup.string()
			.required('No rating provided.')
			.min(1, 'Password is too short - should be 8 chars minimum.')
			.matches(/[0-9]/, 'Password can only contain Latin letters.'),
		summary: Yup.string().required('summary required'),
		poster: Yup.string().required('poster required'),
		trailer: Yup.string().required('trailer required'),
	})

	const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
		useFormik({
			initialValues: {
				name: '',
				rating: '',
				summary: '',
				poster: '',
				trailer: '',
			},
			validationSchema: validations,
			onSubmit: (values) => {
				addMovie(values)
			},
		})

	return (
		<div>
			<Paper
				sx={{
					display: 'grid',
					gridTemplateColumns: '1fr',
					minHeight: '100vh',
					borderRadius: 0,
					justifyItems: 'center',
				}}
			>
				<Box
					component='form'
					sx={{
						display: 'grid',
						width: '90%',
						marginTop: '1rem',
						maxWidth: '30rem',
						maxHeight: 'min-content',
					}}
					autoComplete='off'
					onSubmit={handleSubmit}
				>
					<TextField
						type='text'
						id='name'
						name='name'
						placeholder='name'
						variant='standard'
						value={values.name}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.name && touched.name}
						helperText={errors.name && touched.name && errors.name}
					/>

					<TextField
						type='text'
						id='rating'
						name='rating'
						placeholder='rating'
						variant='standard'
						value={values.rating}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.rating && touched.rating}
						helperText={errors.rating && touched.rating && errors.rating}
					/>
					<TextField
						type='text'
						id='summary'
						name='summary'
						placeholder='summary'
						variant='standard'
						value={values.summary}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.summary && touched.summary}
						helperText={errors.summary && touched.summary && errors.summary}
					/>
					<TextField
						type='text'
						id='poster'
						name='poster'
						placeholder='poster'
						variant='standard'
						value={values.poster}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.poster && touched.poster}
						helperText={errors.poster && touched.poster && errors.poster}
					/>
					<TextField
						type='text'
						id='trailer'
						name='trailer'
						placeholder='trailer'
						variant='standard'
						value={values.trailer}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.trailer && touched.trailer}
						helperText={errors.trailer && touched.trailer && errors.trailer}
					/>

					<Button sx={{ maxHeight: '3rem' }} variant='contained' type='submit'>
						Add movie
					</Button>
				</Box>
			</Paper>
		</div>
	)
}

export default InputForm
