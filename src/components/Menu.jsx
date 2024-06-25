import './../styles/Menu.scss';
import React, { useState } from 'react';



function Menu(data) {
    console.log(data)
    const [hoveredChildren, setHoveredChildren] = useState([]);

    const handleMouseEnter = (children) => {
        if (children && children.length > 0) {
            setHoveredChildren(children);
          } else {
            setHoveredChildren([]);
          }
    };

    const handleMouseLeave = () => {
        setHoveredChildren([]);
    };
    return (
        <div className="menu menu_props">
            <div className="menu__holder ">
                <div className="menu__block block-normalizer">
                    <div className="menu__left-menu">
                        {data.message.map(item => (
                            <a class="menu__left-menu-link" key={item.id} href={'/' + item.tech_name} onMouseEnter={() => handleMouseEnter(item.children)} onMouseLeave={handleMouseLeave}>{item.name}</a>
                        ))}
                    </div>
                    <div className="menu__right">
                        {hoveredChildren.length > 0 ? (
                            <ul>
                                {hoveredChildren.map(child => (
                                    <li key={child.id}>{child.name}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>Нет данных</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;