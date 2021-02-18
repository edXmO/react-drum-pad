import Copy from "../../Copy/Copy"

const Button = ({ text }) => {
    return (
        <div className='btn-panel__box'>
            <button className='btn-panel__btn'></button>
            {text}
        </div>
    )
}

export default Button;