import Bottom from '../Bottom/Bottom'
import ButtonNext from '../ButtonNext/ButtonNext'
import Frame from '../Frame/Frame'
import InfoHover from '../InfoHover/InfoHover'
import InputList from '../InputList/InputList'
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
                <Frame info={{label: 'Первоначальный взнос', list: ['В ближайший месяц', 'В ближайшие 2 месяца', 'В ближайшие 3 месяца']}}/>  
                <InputList info={{label: 'Тип недвижимости', list: ['В ближайший месяц', 'В ближайшие 2 месяца', 'В ближайшие 3 месяца', "Выберите тип недвижимости"]}}/>  
                <InputList info={{label: 'Вы уже владеете недвижимостью?', list: ['В ближайший месяц', 'В ближайшие 2 месяца', 'В ближайшие 3 месяца', 'Выберите тип недвижимости']}}/>  
            </div>
        </div>

        <div className='hr'/>

        <div className='box'>
            <div className='box-third'>
                <Frame info={{label: 'Cрок', list: ['В ближайший месяц', 'В ближайшие 2 месяца', 'В ближайшие 3 месяца', 'В ближайшие 6 месяцев']}}/>  
                <Frame info={{label: 'Ежемесячный платеж', list: ['В ближайший месяц', 'В ближайшие 2 месяца', 'В ближайшие 3 месяца']}}/>  
            </div>
        </div>

    </div>
}

export default Main
