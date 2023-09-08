import { getValuesOfFields } from '../../helpFuncs/helpFuncs'
import './ButtonNext.css'

function ButtonNext() {

    const continueClickHandler = () => {
        const values = getValuesOfFields()
        for (let i = 0; i < values.length; i++) {
            localStorage.setItem(Math.round(Math.random() * 99999), values[i])
        }
    }

    return <>
    
        <div className='btn-layout'>
            <div onClick={(e) => continueClickHandler(e.target.value)} className='btn-next'>Продолжить</div>
        </div>
    
    </>
}

export default ButtonNext
