import SidebarNav from "./SidebarNav";
import NavOutlet from "./NavOutlet";
import {Outlet} from "react-router-dom";
import './Navigation.scss';
import {useState} from "react";

export default function NavigationComponent({outlet, firstNavPageList, secondNavPageList}) {

    const [isOpen, setIsOpen] = useState(true);

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