import Button from '../Button/Button'
import useTelegram from '../../hooks/useTelegram'
import './Header.css'

const Header = () => {
    const { tg, user } = useTelegram()

    return <div className="header">
        <Button onClick={tg.close}>Close</Button>
        <span className="username">
            {user?.username}
        </span>
    </div>
}

export default Header