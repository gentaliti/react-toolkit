import PageHeading from "../components/heading/PageHeading";
import {Link} from "react-router-dom";
import './intro-page.scss'


export default function IntroPage() {

    const breadcrumbs = [
        <Link to={'/'}>Components</Link>,
        <Link to={'/'}> Intro</Link>
    ];

    return <div>
        <PageHeading title="Overview" breadcrumbs={breadcrumbs}/>


        <div className="content">
            <div className="container flex-v gap-24">

                <section className="first-section flex-v gap-24">
                    <h2>Introduction</h2>

                    <p>
                        Atomica UI is a modern and flexible React UI components library designed to help developers
                        create
                        elegant and consistent user interfaces for their web applications. With a focus on simplicity,
                        flexibility, and performance, Atomica UI offers a wide range of customizable and reusable
                        components
                        that can be easily integrated into any React project.
                    </p>


                    <p>
                        Whether you're building a new web application from scratch or upgrading an existing one, Atomica
                        UI
                        provides a comprehensive set of UI building blocks that enable you to create responsive,
                        accessible,
                        and user-friendly interfaces. From basic layout and typography to more complex components like
                        modals, forms, and data visualization, Atomica UI has everything you need to create a seamless
                        user
                        experience.
                    </p>

                </section>


                <section className="second-section flex-v gap-24">
                    <h2>Advantages of Atomica UI</h2>

                    <div className="cards grid grid--5-cols gap-18">
                        <div className="card">

                            <div className="card-header">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"/>
                                </svg>
                            </div>

                            <div className="card-content">
                                <h4>Consistent and reusable</h4>
                                <p>A comprehensive set of reusable UI components.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
                                </svg>
                            </div>

                            <div className="card-content">
                                <h4>Faster development</h4>
                                <p>Modular architecture and intuitive API make it easy to use.</p>
                            </div>
                        </div>


                        <div className="card">
                            <div className="card-header">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"/>
                                </svg>
                            </div>

                            <div className="card-content">
                                <h4>Flexible and customizable</h4>
                                <p>Designed to be highly customizable and extensible.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"/>
                                </svg>
                            </div>

                            <div className="card-content">
                                <h4>Accessible</h4>
                                <p>Atomica UI is built with accessibility in mind.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"/>
                                </svg>
                            </div>


                            <div className="card-content">
                                <h4>Active community</h4>
                                <p>Up-to-date with the latest trends and technologies.</p>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>

    </div>
}