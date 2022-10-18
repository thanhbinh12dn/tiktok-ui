import PropTypes from 'prop-types'
import classNames from "classnames/bind"
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Button({ 
        to, 
        href, 
        primary = false, 
        outline = false, 
        rounded = false,
        upload = false, 
        disabled = false,
        large = false, 
        small = false, 
        plusIcon,
        leftIcon,
        rightIcon,
        children, 
        className,
        onClick, 
        ...passProps 
    }) {
    let Comp = 'button'

    const props = {
        onClick,
        ...passProps
    }

    //Remove event listener when btn is disabled
    // if(disabled) {
    //     delete props.onClick
    // }
    if(disabled) {
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if(to) {
        props.to = to
        Comp = Link
    } else if(href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        upload,
        disabled,
        small,
        large
    })

    return (
        <Comp className={classes} {...props}>
            {plusIcon && <span className={cx('plusIcon')}>{plusIcon}</span>}
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    upload: PropTypes.bool,
    disabled: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
    plusIcon: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default Button