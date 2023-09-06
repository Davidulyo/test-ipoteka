import Bottom from '../Bottom/Bottom'
import ButtonNext from '../ButtonNext/ButtonNext'
import Frame from '../Frame/Frame'
import InfoHover from '../InfoHover/InfoHover'
import WarningBoard from '../WarningBoard/WarningBoard'
import './Main.css'

function Main() {



    return <div className='main'>
    
        <div style={{alignSelf: 'flex-start', marginBottom: '44px'}}>
            <h1 className="title">Рассчитайте ипотеку быстро и просто</h1>
        </div>

        <div>
            <div style={{justifyContent: 'space-between', display: 'flex', width: '1130px'}}>
                <Frame frameInfo={{label: 'Стоимость недвижимости', type: 'sum'}}/>  
                <Frame frameInfo={{label: 'Город покупки недвижимости', type: 'list', list: ['Тель-Авив', 'Ариэль', 'Акко']}}/>  
                <Frame frameInfo={{label: 'Когда вы планируете оформить ипотеку?', type: 'list', list: ['В ближайший месяц', 'В ближайшие 2 месяца', 'В ближайшие 3 месяца']}}/>  
            </div>
            {/* <InfoHover/> */}
        </div>

        <div>
            <div style={{justifyContent: 'space-between', display: 'flex', width: '1130px'}}>
                <Frame frameInfo={{label: 'Когда вы планируете оформить ипотеку?', type: 'list', list: ['В ближайший месяц', 'В ближайшие 2 месяца', 'В ближайшие 3 месяца']}}/>  
                <Frame frameInfo={{label: 'Когда вы планируете оформить ипотеку?', type: 'list', list: ['В ближайший месяц', 'В ближайшие 2 месяца', 'В ближайшие 3 месяца']}}/>  
                <Frame frameInfo={{label: 'Когда вы планируете оформить ипотеку?', type: 'list', list: ['В ближайший месяц', 'В ближайшие 2 месяца', 'В ближайшие 3 месяца']}}/>  
            </div>
        </div>

        <hr className='hr'/>

        <div>
            <div style={{alignSelf: 'flex-start', display: 'flex', width: '1130px'}}>
                <Frame frameInfo={{label: 'Когда вы планируете оформить ипотеку?', type: 'list', list: ['В ближайший месяц', 'В ближайшие 2 месяца', 'В ближайшие 3 месяца']}}/>  
                <Frame frameInfo={{label: 'Когда вы планируете оформить ипотеку?', type: 'list', list: ['В ближайший месяц', 'В ближайшие 2 месяца', 'В ближайшие 3 месяца']}}/>  
            </div>
        </div>

        <Bottom/>
    </div>
}

export default Main
