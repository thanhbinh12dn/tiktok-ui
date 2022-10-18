import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faPlus, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import config from '~/config'
import Button from '~/components/Button';
import styles from './Header.module.scss'
import images from '~/assets/images'
import Menu from '~/components/Popper/Menu'
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image'
import Search from '~/layouts/components/Search'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng anh'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím'
    }
]

function Header() {

    const currentUser = true

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch(menuItem.type) {
            case 'language':
                //Handle change language 
                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Nhận xu',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true
        },
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to={config.routes.home} className={cx('logo-link')}><img src={images.logo} alt="tiktok"/></Link>
            
            {/* Search */}
            <Search />

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Button upload plusIcon={<FontAwesomeIcon icon={faPlus} />}>
                            Tải lên
                        </Button>
                        <Tippy 
                            content="Tin nhắn" 
                            placement="bottom"
                            delay={[0, 200]}
                        >
                            <button className={cx('action-message')}>
                                <MessageIcon/>
                            </button>
                        </Tippy>
                        <Tippy
                            content="Hộp thư" 
                            placement="bottom"
                            delay={[0, 200]}
                        >
                            <button className={cx('action-inbox')}>
                                <InboxIcon/>
                                <span className={cx('action-notice')}>24</span>
                            </button>
                        </Tippy>
                    </>
                ) : (
                <>
                    <Button upload plusIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Button>
                    <Button primary>Đăng nhập</Button>
                    
                </>
                )}
                <Menu
                    items={currentUser ? userMenu : MENU_ITEMS}
                    onChange={handleMenuChange}
                >
                    {currentUser ? (
                        <Image 
                            className={cx('user-avatar')} 
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1666173600&x-signature=MoqWr5lIzXJ3%2BjHG7QkWs87hxx4%3D" 
                        />
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )} 
                </Menu>
            </div>
        </div>
    </header>
}

export default Header;