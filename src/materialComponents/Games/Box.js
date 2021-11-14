export const Box = ({ val, index, handleClick }) => {
	return (
		<div
			className='box'
			onClick={() => {
				handleClick(index)
			}}
		>
			{val}
		</div>
	)
}
