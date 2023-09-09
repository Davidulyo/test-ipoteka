import { useMemo, useState } from 'react'
import './InputWithSlider.css'
import InfoHover from '../InfoHover/InfoHover';
import { addCommas } from '../../helpFuncs/helpFuncs';
import AdviseBoard from '../AdviseBoard/AdviseBoard';
import { useDispatch, useSelector } from 'react-redux';
import { changeFirstPayment, changeMonthlyPayment, changePeriod, changePropertyCost } from '../../redux/calcSlice';

function InputWithSlider({info}) {

    // const [isWarning, setWarnings] = useState(false) 
    const [sliderPosition, setSliderPosition] = useState(info.default) 
    const [showAdvise, setShowAdvise] = useState(false) 
    // const [sum, setSum] = useState() 

    const dispatch = useDispatch()
    const state = useSelector(state => state.calcReducer.monthlyPayment)
    console.log(state);

    const handler = (isOver) => {
        if (info.type && info.type === '!' && isOver){
            if (showAdvise) return
            setShowAdvise(true);
        } else {
            setShowAdvise(false);
        }
    }
    
    const sliderHandler = (value) => {
        addCommas(value, setSliderPosition)
        switch (info.default) {
            // case 1000000: dispatch(changePropertyCost(value)); break;
            case 100000: dispatch(changeFirstPayment(value)); break;
            case 30: dispatch(changePeriod(value)); break;
            case 2654: dispatch(changeMonthlyPayment(value)); break;
            default: return;
        }
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
