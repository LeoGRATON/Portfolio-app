import './style.scss'

const Button = ({className, onClick, children, type}) => {

    return (
        <button className={`btn ${className}`} type={type} onClick={onClick}>{children}</button>
    )
};

export default Button;