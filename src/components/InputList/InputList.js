import WarningBoard from '../WarningBoard/WarningBoard'
import './InputList.css'

function InputList({info}) {

    console.log();

    return <div className='box-frame'>

        <label className='label'>{info.label}</label>

    
        <form className='frame' onChange={event => '#'}>
            <select className='input-price default-option' id="city" name="city" placeholder='Выберите город' >
                {info.list.map( (item, i) => i < info.list.length-1 && <option key={i+55}>{item}</option>)}
                <option selected>{info.list[info.list.length-1]}</option >
            </select>
        </form>
        <WarningBoard title={'Выберите ответ'}/>
                
    
    </div>
}

export default InputList
