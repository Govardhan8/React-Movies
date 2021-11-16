import { Button, TextField } from '@mui/material'
import { useHistory } from 'react-router-dom'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const RenderMovie = ({ movie, id }) => {
	const history = useHistory()
	const handleClick = (mov) => {
		fetch(`https://6166c4e213aa1d00170a670e.mockapi.io/movies/${id}`, {
			method: 'PUT',
			body: JSON.stringify(mov),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(() => history.push('/'))
	}
	const validations = Yup.object().shape({
		name: Yup.string().min(1, 'please enter a name').required('Required'),
		rating: Yup.number()
			.typeError('you must specify a number')
			.min(1, 'Min value 1.')
			.max(10, 'Max value 10.')
			.required('please enter a rating'),
		summary: Yup.string()
			.min(4, 'Please enter more summary')
			.required('summary required'),
		poster: Yup.string()
			.min(4, 'Please enter poster url')
			.required('poster required'),
		trailer: Yup.string()
			.min(4, 'Please enter trailer url')
			.required('trailer required'),
	})

	const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
		useFormik({
			initialValues: {
				name: movie.name,
				rating: movie.rating,
				summary: movie.summary,
				poster: movie.poster,
				trailer: movie.trailer,
			},
			validationSchema: validations,
			onSubmit: (values) => {
				handleClick(values)
			},
		})
	return (
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
					maxHeight: '30rem',
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
					Save movie
				</Button>
			</Box>
		</Paper>
	)
}
