import WarningBoard from '../WarningBoard/WarningBoard'
import './Frame.css'

function Frame({frameInfo}) {

    return frameInfo && <>

        <div className='box-frame'>

            <label className='label'>{frameInfo.label}</label>
        
            {frameInfo.type === 'list' ? <><form className='frame' onChange={event => '#'}>
                    <select className='input-price' id="city" name="city">
                        {frameInfo.list.map( (item, i) => <option key={i+55}>{item}</option>)}
                    </select>
                </form>
                <WarningBoard/>
                </>
            :
            <div className='frame'>
                <div className='flex'>
                    <input className='input-price' type='number' placeholder='Введите число' defaultValue={100000000}/>
                    <h1 className='symbol'>₪</h1>
                </div>
                <WarningBoard/>
            </div>}
            
        </div>
        
    </>
}

export default Frame
