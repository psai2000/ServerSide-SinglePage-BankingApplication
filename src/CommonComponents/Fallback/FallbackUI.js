import 'bootstrap/dist/css/bootstrap.css';
import './FallbackUI.css';
import LinearProgress from '@mui/material/LinearProgress'

const FallbackUI = () => {
    return <div className='container-fluid fallback'>
        <div className='C-Bank__logo'>
        -Bank
        </div>
        <h5 className='fallback__title'>
            Loading your content...
        </h5>
        <LinearProgress className='linear-progress'/>
    </div>
}

export default FallbackUI;