import classes from './Button.module.css'

const Button = ({children, textOnly, className, ...props}) => {

    const cssClasses = textOnly ? `${classes['text-button']} ${className}`: `${classes.button}`
	return (
		<button
			type={props.type || 'button'}
			className={cssClasses}
			onClick={props.onClick}
			disabled={props.disabled}>
                {children}
		</button>
	)
}
export default Button
