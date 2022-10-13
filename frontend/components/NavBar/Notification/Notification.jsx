import React from 'react'
import Style from './Notification.module.css'
import images from '../../../img/index'
import Image from 'next/image'
const Notification = () => {
    return (
        <div className={Style.notification}>
            <p>Notification</p>
            <div className={Style.notification_box}>
                <div className={Style.notification_box_img}>
                    <Image src={images.user1} alt="profile image"
                        height={50}
                        width={50}
                        className={Style.notification_box_img} />
                </div>
                <div className={Style.notification_box_info}>
                    <h4>Shaw</h4>
                    <p>Measure</p>
                    <small>3minutes ago</small>
                </div>
                <span className={Style.notification_box_new}></span>
            </div>
        </div>
    )
}

export default Notification