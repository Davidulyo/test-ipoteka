import Bottom from '../Bottom/Bottom'
import ButtonNext from '../ButtonNext/ButtonNext'
import Frame from '../Frame/Frame'
import InfoHover from '../InfoHover/InfoHover'
import InputList from '../InputList/InputList'
import InputWithSlider from '../InputWithSlider/InputWithSlider'
import WarningBoard from '../WarningBoard/WarningBoard'
import './Main.css'

function Main() {



    return <div className='main'>
    
        <div >
            <h1 className="title">Рассчитайте ипотеку быстро и просто</h1>
        </div>

        <div className='box'>
            <div className='box-first' >
                <Frame info={{label: 'Стоимость недвижимости'}}/>  
                <InputList info={{label: 'Город покупки недвижимости', list: ['Тель-Авив', 'Ариэль', 'Акко', "Выберите ответ"]}}/> 
                <InputList info={{label: 'Когда вы планируете оформить ипотеку?', list: ['В ближайший месяц', 'В ближайшие 2 месяца', 'В ближайшие 3 месяца', "Выберите период"]}}/>  
            </div>
            {/* <InfoHover/> */}
        </div>

        <div className='box'>
            <div className='box-second' >
                <InputWithSlider info={{label: 'Первоначальный взнос (!)', list: ['В ближайший месяц', 'В ближайшие 2 месяца', 'В ближайшие 3 месяца'], min: 100000, max: 1000000, step: 100000, default: 100000, adviseText: `Cумма финансирования:500,000 ₪ `, adviseText2: 'Процент финансирования:50%' }}/>  
                <InputList info={{label: 'Тип недвижимости', list: ['В ближайший месяц', 'В ближайшие 2 месяца', 'В ближайшие 3 месяца', "Выберите тип недвижимости"]}}/>  
                <InputList info={{label: 'Вы уже владеете недвижимостью?', list: ['В ближайший месяц', 'В ближайшие 2 месяца', 'В ближайшие 3 месяца', 'Выберите тип недвижимости']}}/>  
            </div>
        </div>

        <div className='hr'/>

        <div className='box'>
            <div className='box-third' style={{width: '60%', justifyContent: 'space-between'}}>
                <InputWithSlider info={{label: 'Cрок', list: ['В ближайший месяц', 'В ближайшие 2 месяца', 'В ближайшие 3 месяца', 'В ближайшие 6 месяцев'], min: 4, max: 30, step: 1, default: 30, lowest: '4 года', highest: "30 лет"}} />  
                <InputWithSlider info={{label: 'Ежемесячный платёж', min: 2654, max: 51130, step: 513, default: 2654, lowest: '2,654 ₪', highest: "51,130 ₪", adviseText: 'Увеличьте ежемесячный платеж и переплачивайте меньше'}}/>  
            </div>
        </div>

    </div>
}

export default Main
