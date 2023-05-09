import './Footer.scss';
import {SocialIcon} from "react-social-icons";

export default function Footer() {
    return <footer className="footer">
        <div className="footer-container container flex align-center justify-content">
            <div className="flex-v gap-8">
                <div className="creator">
                    <p>
                        Created by <span>Gent Aliti</span>
                    </p>
                </div>

                <div className="social-icons flex align-center justify-content gap-8">
                    <SocialIcon className="social-icon"
                                style={{height: 20, width: 20}}
                                url="https://linkedin.com/in/gentaliti"/>
                    <SocialIcon className="social-icon"
                                style={{height: 20, width: 20}}
                                url="https://github.com/gentaliti"/>
                </div>
            </div>
        </div>
    </footer>
}