import Menu, { MenuItem } from './Menu'
import classNames from 'classnames/bind'
import styles from './SideBar.module.scss'
import config from '~/config'
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function SideBar() {
    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon/>} activeIcon={<HomeActiveIcon />}></MenuItem>
            <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon />}></MenuItem>
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon />}></MenuItem>
        </Menu>
    </aside>
}

export default SideBar