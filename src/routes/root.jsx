import {Link, Outlet, useLocation} from "react-router-dom";
import './root.scss';
import NavigationComponent from "../components/navigation/NavigationComponent";
import {routes} from "./route-list";


export default function Root() {
    const location = useLocation();
    const currentPath = location.pathname;


    const firstNav = <li>
        <Link to='/' className={currentPath === '/' ? 'active' : ''}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"/>
            </svg>
            Overview
        </Link>
    </li>

    const secondNav = routes.map(page => {
        return <li key={page.route}>
            <Link to={page.route}
                  className={currentPath === page.route ? 'active' : ''}>
                {page.logo}
                {page.name}
            </Link>
        </li>
    });

    const content = <Outlet/>;

    return <NavigationComponent firstNavPageList={firstNav} secondNavPageList={secondNav} outlet={content}/>
}