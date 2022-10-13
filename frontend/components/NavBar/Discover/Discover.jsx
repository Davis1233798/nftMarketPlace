import React from 'react'
import Link from 'next/link'
import Style from './Discover.module.css'
import discover from './menuItems.json'
const Discover = () => {
    //Discover Navigation Menu

    return (
        <div>
            {discover.map((eL, i) => (
                <div key={i + 1} className={Style.discover}>
                    <Link href={{ pathname: `${eL.link}` }}>{eL.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default Discover