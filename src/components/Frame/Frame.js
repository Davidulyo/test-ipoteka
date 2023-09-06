import './Frame.css'

function Frame() {

    return <>

        <div className='box-frame'>

            <label className='label'>Стоимость недвижимости</label>
        
            <div className='frame'>
                <input className='input-price' type='number' placeholder='Введите число' defaultValue={100000000}/>
                <h1 className='symbol'>₪</h1>
            </div>
            
        </div>
        
    </>
}

export default Frame
