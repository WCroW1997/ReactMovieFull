import './button.scss'

const Button = ({ children, className, onClick }) => {
	return (
		<button
			onClick={onClick ? () => onClick() : null}
			className={`btn ${className}`}
		>
			{children}
		</button>
	)
}

export const OutlineButton = ({ children, className, onClick }) => {
	return (
		<Button
			onClick={onClick ? () => onClick() : null}
			className={`btn_outline ${className}`}
		>
			{children}
		</Button>
	)
}

export default Button
