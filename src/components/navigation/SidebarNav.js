import {ReactComponent as AtomicaLogo} from "../../atomica-svg.svg";
import {SocialIcon} from "react-social-icons";

export default function SidebarNav({onCollapse, className, firstNavPageList, secondNavPageList}) {
    return <div className={`sidebar ${className}`}>

        <div className="sidebar-layout">
            <div className="header">
                <AtomicaLogo className="logo"></AtomicaLogo>

                <button onClick={onCollapse} className="btn-collapse">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
                    </svg>

                </button>
            </div>

            <div className={`sidebar-content--open ${className}`}>

                <nav>

                    <div className="nav-info-box">
                        <h3>UI elements</h3>
                        <span>Unique UI elements</span>
                    </div>
                    <ul className="navigation-page-list">
                        {firstNavPageList}
                    </ul>

                    <div className="nav-info-box">
                        <h3>Components</h3>
                        <span>Reusable general components</span>
                    </div>
                    <ul className="navigation-page-list">{secondNavPageList}</ul>
                </nav>
            </div>

            <div className="creator-info">
                <div className="nav-info-box">
                    <span>created by</span>
                    <h3>Gent Aliti</h3>
                    <div className="social-icons">
                        <SocialIcon class="social-icon"
                                    style={{ height: 20, width: 20 }}
                                    url="https://linkedin.com/in/gentaliti" />
                        <SocialIcon class="social-icon"
                                    style={{ height: 20, width: 20 }}
                                    url="https://github.com/gentaliti" />
                    </div>
                </div>
            </div>
        </div>
    </div>;
}