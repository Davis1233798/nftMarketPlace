import React from 'react'
import Style from './HelpCenter.module.css'
import Link from 'next/link'
import helpCenter from './menuItems.json'
const HelpCenter = () => {

    return (
        <div className={Style.HelpCenter}>
            {
                helpCenter.map((eL, e) => (
                    <div key={e + 1} className={Style.helpCenter}>
                        <Link href={{ pathname: `${eL.link}` }}>{eL.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default HelpCenter