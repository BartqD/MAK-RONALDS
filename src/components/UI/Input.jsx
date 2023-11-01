import classes from './Input.module.css'

const Input = ({ label, id, ...props }) => {
	return (
		<p className={classes.control}>
			<label htmlFor={id}>{label}</label>
			<input id={id} type='text' name={id} required {...props} />
		</p>
	)
}

export default Input
