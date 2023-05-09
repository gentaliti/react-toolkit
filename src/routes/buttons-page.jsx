import PageHeading from "../components/heading/PageHeading";
import {Link} from "react-router-dom";
import Button from "../components/button/Button";

export default function ButtonsPage() {

    const breadcrumbs = [
        <Link to={'/'}>Components</Link>,
        <Link to={'/buttons'}> Buttons</Link>
    ];

    return <div className="buttons-page">

        <PageHeading title="Buttons" breadcrumbs={breadcrumbs}/>

        <div className="content">
            <div className="container flex-v gap-24">


                <section className="first-section flex-v gap-24">
                    <h2>Description</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus est ut erat viverra, sed
                        rutrum quam pellentesque. Donec congue ligula a bibendum rutrum.
                        Sed et felis eu nisl interdum sagittis eu eu ante. Vestibulum mattis tortor enim, vitae cursus
                        justo finibus non. Fusce posuere sit amet erat eget dignissim.
                    </p>
                </section>

                <section className="second-section">
                    <h2>Base buttons</h2>

                    <div className="flex gap-18">
                        <Button primary>
                            Primary
                        </Button>

                        <Button secondary>
                            Secondary
                        </Button>

                        <Button success>
                            Success
                        </Button>

                        <Button warning>
                            Warning
                        </Button>

                        <Button danger>
                            Danger
                        </Button>
                    </div>
                </section>


                <section className="third-section">
                    <h2>Outline buttons</h2>

                    <div className="flex gap-18">
                        <Button primary outline>
                            Primary
                        </Button>

                        <Button secondary outline>
                            Secondary
                        </Button>

                        <Button success outline>
                            Success
                        </Button>

                        <Button warning outline>
                            Warning
                        </Button>

                        <Button danger outline>
                            Danger
                        </Button></div>
                </section>

                <section className="third-section">
                    <h2>Icons</h2>

                    <div className="flex gap-18">
                        <Button primary>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            Primary
                        </Button>

                        <Button secondary>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            Secondary
                        </Button>

                        <Button success>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            Success
                        </Button>

                        <Button warning>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            Warning
                        </Button>

                        <Button danger>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            Danger
                        </Button>
                    </div>
                </section>

                <section className="fourth-section">
                    <h2>Icons</h2>

                    <div className="flex gap-18">
                        <Button primary outline>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            Primary
                        </Button>

                        <Button secondary outline>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            Secondary
                        </Button>

                        <Button success outline>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            Success
                        </Button>

                        <Button warning outline>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            Warning
                        </Button>

                        <Button danger outline>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            Danger
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    </div>
}