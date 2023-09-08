import { useMemo, useState } from 'react'
import './InputWithSlider.css'
import InfoHover from '../InfoHover/InfoHover';
import { addCommas } from '../../helpFuncs/helpFuncs';
import AdviseBoard from '../AdviseBoard/AdviseBoard';

function InputWithSlider({info}) {

    // const [isWarning, setWarnings] = useState(false) 
    const [sliderPosition, setSliderPosition] = useState(info.default) 
    const [showAdvise, setShowAdvise] = useState(false) 

    // const [sum, setSum] = useState() 

    const handler = (isOver) => {
        
        if (info.type && info.type === '!' && isOver){
            if (showAdvise) return
            setShowAdvise(true);
        } else{
            setShowAdvise(false);
        }
    }

    const sliderHandler = (value) => {
        addCommas(value, setSliderPosition)
    }


    return <>
    
    <div className='box-frame slider-box'>

            <label onMouseOver={() => handler(true)} onMouseOut={() => handler(false)} id={`${info.type && info.type === '!'}` && 'advise'} className='label'>{info.label}</label>
            {/* {showAdvise && <InfoHover/>} */}
            <div className='frame'>
                <div className='flex'>
                    <input className='input-price' type='text' value={sliderPosition} placeholder='Введите число' />
                    <h1 className='symbol'>₪</h1>
                </div>
                {/* {isWarning && <WarningBoard title={'Стоимость недвижимости не может превышать 10,000,000'}/>} */}
                <input name='slider' step={info.step} min={info.min} defaultValue={info.default} max={info.max} type="range" className='range-line' onChange={(e) => sliderHandler(e.target.value)}/>
                <div className='label-under-slider'>
                    <h4 htmlFor='slider'>{info.lowest}</h4>
                    <h4 htmlFor='slider'>{info.highest}</h4>
                </div>
                
            {info.adviseText && <AdviseBoard title={info.adviseText} title2={info.adviseText2}/>}
            </div>
            
        </div>
    
    </>
}

export default InputWithSlider
