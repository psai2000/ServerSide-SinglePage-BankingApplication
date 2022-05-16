import '../Material-Icons.css'
import './Header.css'
function Header() {
    return (
        <header className='header'>
            <div className="header__label" tabIndex="0">-Bank</div>
            <div className='header__icon-wrapper'>
                <i className="material-icons header__icon header__bell-icon" tabIndex="0">notifications</i>
                <i className="material-icons header__icon header__user-icon" tabIndex="0">account_circle</i>
                <i className="material-icons header__icon header__caret-down" tabIndex="0">expand_more</i>
            </div>
        </header>
    )
}

export default Header
