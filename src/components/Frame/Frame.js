import { useEffect, useState } from 'react'
import WarningBoard from '../WarningBoard/WarningBoard'
import './Frame.css'
import { addCommas, checkNumber, removeCommas } from '../../helpFuncs/helpFuncs'

function Frame({info}) {

    const [sum, setSum] = useState('1,000,000')
    const [isWarning, setWarnings] = useState(false) 

    const inputSumHandler = (number) => {
        const pureNumber = removeCommas(number)
        const isCorrect = checkNumber(pureNumber) 

        if (isCorrect){
          addCommas(pureNumber, setSum)
          setWarnings(false)  
        } else {
            setWarnings(true)
        }
    }



    return info && <>

        <div className='box-frame'>

            <label className='label'>{info.label}</label>
        
            <div className='frame'>
                <div className='flex'>
        
                    <input className='input-price' onChange={e => inputSumHandler(e.target.value)} type='text' placeholder='Введите число' value={sum}/>
                    <h1 className='symbol'>₪</h1>
                </div>
                {isWarning && <WarningBoard title={'Стоимость недвижимости не может превышать 10,000,000'}/>}
            </div>
            
        </div>
        
    </>
}

export default Frame
