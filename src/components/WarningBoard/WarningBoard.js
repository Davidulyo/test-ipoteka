import './WarningBoard.css'

function WarningBoard({title}) {



    return <div className='warning-board'>
    
        <h4>！</h4>
        <p>{title} Стоимость недвижимости не может превышать 10,000,000</p>
    
    </div>
}

export default WarningBoard
