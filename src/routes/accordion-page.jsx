import PageHeading from "../components/heading/PageHeading";
import {Link} from "react-router-dom";
import Accordion from "../components/accordion/Accordion";

export default function AccordionPage() {

    const breadcrumbs = [
        <Link to={'/'}>Components</Link>,
        <Link to={'/buttons'}> Accordion</Link>
    ];

    const items = [
        {
            id: '1',
            label: 'Can I use React on a project?',
            content: ' You can use React on any project you wantYou can use React on any project you wantYou can use React on any project you wantYou can use React on any project you wantYou can use React on any project you wantYou can use React on any project you want'
        },
        {
            id: '2',
            label: 'Can I use React on a project?',
            content: ' You can use React on any project you wantYou can use React on any project you wantYou can use React on any project you wantYou can use React on any project you wantYou can use React on any project you wantYou can use React on any project you want'
        },
        {
            id: '3',
            label: 'Can I use React on a project?',
            content: ' You can use React on any project you wantYou can use React on any project you wantYou can use React on any project you wantYou can use React on any project you wantYou can use React on any project you wantYou can use React on any project you want'
        }
    ];

    return <div>
        <PageHeading title="Accordion" breadcrumbs={breadcrumbs}/>

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


                <section className="first-section flex-v gap-24">
                    <h2>Component</h2>

                    <Accordion items={items}/>
                </section>
            </div>
        </div>
    </div>
}