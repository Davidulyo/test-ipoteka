import Frame from '../Frame/Frame'
import './Main.css'

function Main() {



    return <div className='main'>
    
        <div style={{alignSelf: 'flex-start'}}>
            <h1 className="title">Рассчитайте ипотеку быстро и просто</h1>
        </div>

        <div>
            <div style={{justifyContent: 'space-between', display: 'flex', width: '1130px', height: '86px'}}>
                <Frame/>  
                <Frame/>  
                <Frame/>  
            </div>
        </div>

        <div>
            <div style={{justifyContent: 'space-between', display: 'flex', width: '1130px', height: '86px'}}>
                <Frame/>  
                <Frame/>  
                <Frame/>  
            </div>
        </div>

        <hr className='hr'/>

        <div>
            <div style={{alignSelf: 'flex-start', display: 'flex', width: '1130px', height: '86px'}}>
                <Frame/>  
                <Frame/>  
            </div>
        </div>

    
    </div>
}

export default Main
