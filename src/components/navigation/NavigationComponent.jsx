import SidebarNav from "./SidebarNav";
import NavOutlet from "./NavOutlet";
import {Outlet} from "react-router-dom";
import './Navigation.scss';
import {useEffect, useState} from "react";

export default function NavigationComponent({outlet, firstNavPageList, secondNavPageList}) {

    const [isOpen, setIsOpen] = useState(true);

    // we use the useEffect hook to listen to the window resize event
    useEffect(() => {
        if (window.innerWidth < 744 && isOpen) {
            setIsOpen(false);
        }
    }, []);


    const onCollapse = () => {
        setIsOpen(!isOpen);
    }


    return <div>
        <SidebarNav
            firstNavPageList={firstNavPageList}
            secondNavPageList={secondNavPageList}
            onCollapse={onCollapse} className={isOpen ? 'open' : ''}/>

        <NavOutlet className={isOpen ? 'open' : ''}>
            <Outlet/>
        </NavOutlet>
    </div>
}