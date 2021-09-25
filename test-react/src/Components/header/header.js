import React from 'react';
import './header.css'
import HeaderItem from './headerItem';

const Header = (props) => {
    return (
        <div className="Header">
            { props.items.map(item => {
                return <HeaderItem item={item} key={item.ind}/>
            }) }
        </div>
    )
}

export default Header