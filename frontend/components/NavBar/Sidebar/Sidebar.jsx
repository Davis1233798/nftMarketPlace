import React, { useState } from 'react'
import Image from '../../../img/index'
import Button from '../../Button/Button'
import Link from 'next/link'
import { Grclose } from 'react-icons/gr'
import {
    TiSocialFacebook,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialLinkedin,
    TiSocialInstagram,
    TiArrowSortedDown
} from 'react-icons/ti'
import Style from './Sidebar.module.css'
import discover from '../Discover/menuItems.json'
import help from '../HelpCenter/menuItems.json'

const Sidebar = ({ setOpenSideMenu }) => {
    const [openDiscover, setOpenDiscover] = useState(false);
    const [openHelp, setOpenHelp] = useState(false);

    const openDiscoverMenu = () => {
        (!discover) ? setOpenDiscover(true) : setOpenDiscover(false);
    }
    const openHelpMenu = () => {
        (!help) ? setOpenHelp(true) : setOpenHelp(false);
    }
    const closeSideBar = () => {
        setOpenSideMenu(false);
    }

    return (
        <div className={Style.sidebar}>
            <Grclose className={Style.sidebar_closeBtn} onClock={() => closeSideBar()} />Sidebar
            <div className={Style.sidebar_box}>
                <Image src={Image.logo} alt="logo" width={150} height={150} />
                <p>Discover the most popular decentralized assets</p>
                <div className={Style.sidebar_social}></div>
            </div>
            <div className={Style.sidebar_social}>
                <a href='#'>
                    <TiSocialFacebook />
                </a>
                <a href='#'>
                    <TiSocialTwitter />
                </a>
                <a href='#'>
                    <TiSocialInstagram />
                </a>
                <a href='#'>
                    <TiSocialLinkedin />
                </a>
                <a href='#'>
                    <TiSocialYoutube />
                </a>
                <a href='#'>
                    <TiSocialYoutube />
                </a>
            </div>
            <div className={Style.sidebar_menu}>
                <div>
                    <div className={Style.sidebar_menu_box} onClick={() => openDiscoverMenu()}>
                        <p>Discover</p>
                        <TiArrowSortedDown />
                    </div>
                    {openDiscover && <div className={Style.sidebar_menu_box}>
                        {discover.map((eL, e) =>
                            <div key={e + 1} className={e + 1}>
                                <Link href={{ $pathname: `${eL.link}` }}>{eL.name}</Link>
                            </div>
                        )}
                    </div>}
                </div>
                <div className={Style.sidebar_menu_box} onClick={() => openHelpMenu()}>
                    <p>Help Center</p>
                    <TiArrowSortedDown />
                </div>
                {openHelp && <div className={Style.sidebar_menu_box}>
                    {help.map((eL, e) =>
                        <div key={e + 1} className={e + 1}>
                            <Link href={{ $pathname: `${eL.link}` }}>{eL.name}</Link>
                        </div>
                    )}
                </div>}
            </div>
            <div className={Style.sidebar_menu_button}>
                <Button btnName="Create" />
                <Button btnName="Connect Wallet" />
            </div>
        </div >

    )
}

export default Sidebar