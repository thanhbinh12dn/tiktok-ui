import { useEffect, useState } from 'react';
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faCircleXmark, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faMagnifyingGlass, faPlus, faSignOut, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss'
import images from '~/assets/images'
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu'
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image'

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
    const [searchResult, setSearchResult] = useState([])

    const currentUser = true

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

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
            <img src={images.logo} alt="tiktok"/>
            <HeadlessTippy
                interactive 
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h3 className={cx('search-title')}>
                                Tài khoản
                            </h3>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm tài khoản và video" spellCheck={false}/>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                </div>
            </HeadlessTippy>
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
                            <button className={cx('action-btn')}>
                                <MessageIcon/>
                            </button>
                        </Tippy>
                        <Tippy 
                            content="Hộp thư" 
                            placement="bottom"
                            delay={[0, 200]}
                        >
                            <button className={cx('action-btn')}>
                                <InboxIcon/>
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
                            src="ahttps://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1665558000&x-signature=5YrbYkBtX6T346oBqd1MLmA5HYg%3D" 
                            fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1665644400&x-signature=QvwPZAqj9G%2FU4bJeZnOL%2FmZgFsQ%3D"
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