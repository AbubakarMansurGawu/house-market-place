import {useNavigate, useLocation} from 'react-router-dom'
import { ReactComponent as OfferIcon} from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon} from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutLineIcon} from '../assets/svg/personOutlineIcon.svg'
import Explore from '../Pages/Explore'

function Navbar(){

    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchRoute = (route) => {
        if(route === location.pathname){
            return true
        }
    }

    return (
        <footer className='navbar'>
            <nav className='navbarNav'>
                <ul className='navbarListItems' >
                    <li className='navbarListItem' onClick={() => navigate('/')}>
                        <ExploreIcon fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'/>
                        <p className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'} >Explore</p>
                    </li>

                     <li className='navbarListItem' onClick={() => navigate('/Offers')}>
                        <OfferIcon fill={pathMatchRoute('/offer') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'/>
                        <p className={pathMatchRoute('/offer') ? 'navbarListItemNameActive' : 'navbarListItemName'} >Offers</p>
                    </li>

                     <li className='navbarListItem' onClick={() => navigate('/Profile')}>
                        <PersonOutLineIcon fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'/>
                        <p className={pathMatchRoute('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'} >Profile</p>
                    </li>
                </ul>
            </nav>
            
        </footer>
    )
}

export default Navbar