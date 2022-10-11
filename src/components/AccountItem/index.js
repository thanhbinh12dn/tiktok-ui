import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import Image from "~/components/Image"
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1665288000&x-signature=%2Bujj4tZqB6VEJSg2dl0nvIRp3uw%3D" alt="Hoa"/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Le Phuong Hoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>daolephuonghoa</span>
            </div>
        </div>
    )
}

export default AccountItem