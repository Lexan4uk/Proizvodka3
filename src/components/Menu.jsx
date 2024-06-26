import './../styles/Menu.scss';
import React, { useState, useEffect } from 'react';



function Menu(data) {
    const [hoveredChildren, setHoveredChildren] = useState([]);
    const [hoveredElement, setHoveredElement] = useState([])
    useEffect(() => {
        const activeLink = document.querySelectorAll(".menu__left-menu-link");
        activeLink[0].classList.add("menu__left-menu-link_active")
        const defaultElement = data.message[0]
        setHoveredElement(defaultElement)
        if (defaultElement.children) {
            setHoveredChildren(defaultElement.children)
        }
    }, [])
    const handleMouseEnter = (item, element) => {
        const activeLink = document.querySelector(".menu__left-menu-link_active");
        if (activeLink) {
            activeLink.classList.remove("menu__left-menu-link_active");
        }
        if (item.children && item.children.length > 0) {
            setHoveredChildren(item.children);
        } else {
            setHoveredChildren([]);
        }
        setHoveredElement(item)
        console.log(hoveredElement.icons.static_icon)
        element.classList.add("menu__left-menu-link_active")
    };

    return (
        <div className="menu menu_props">
            <div className="menu__holder ">
                <div className="menu__block block-normalizer">
                    <div className="menu__left-menu">
                        {data.message.map(item => (
                            <a class="menu__left-menu-link" key={item.id} href={'/' + item.tech_name} onMouseEnter={(e) => handleMouseEnter(item, e.target)}>{item.name}</a>
                        ))}
                    </div>
                    <div className="menu__right">
                        <div className="menu__right-article-holder">
                            <div className="menu__right-article-img-holder">
                                <img className="menu__right-article-img default-image" src={hoveredElement.icons?.static_icon} key={1} />
                            </div>
                            <h2 className="menu__right-article weight-xl font-l">{hoveredElement.name}</h2>
                        </div>
                        <div className="menu__right-content">
                            {hoveredChildren.length > 0 ? (
                                hoveredChildren.map(child => (
                                    <div className="menu__right-content-block">
                                        <a key={child.id} href={child.tech_name ? child.tech_name : "/"} className="menu__right-link menu__right-article-link weight-xl">{child.name}</a>
                                        {child.children ? child.children.map(subChild => (
                                            <a key={subChild.id} href={subChild.tech_name ? subChild.tech_name : "/"} className="menu__right-link menu__right-base-link">
                                                {subChild.name}
                                            </a>
                                        )) : (null)
                                        }
                                    </div>
                                ))
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;