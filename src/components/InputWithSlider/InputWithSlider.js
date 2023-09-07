import './InputWithSlider.css'

function InputWithSlider({info}) {

    // const [isWarning, setWarnings] = useState(false) 


    return <>
    
    <div className='box-frame'>

            <label className='label'>{info.label}</label>
        
            <div className='frame'>
                <div className='flex'>
                    <input className='input-price' type='text' placeholder='Введите число' />
                    <h1 className='symbol'>₪</h1>
                </div>
                {/* {isWarning && <WarningBoard title={'Стоимость недвижимости не может превышать 10,000,000'}/>} */}
                <input name='slider' min={4} max={30} type="range" className='range-line'/>
                <div className='label-under-slider'>
                    <h4 htmlFor='slider'>4 year</h4>
                    <h4 htmlFor='slider'>30 year</h4>
                </div>
                
            </div>
            
        </div>
    
    </>
}

export default InputWithSlider
