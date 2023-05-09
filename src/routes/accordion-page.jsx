import PageHeading from "../components/heading/PageHeading";
import {Link} from "react-router-dom";

export default function AccordionPage() {

    const breadcrumbs = [
        <Link to={'/'}>Components</Link>,
        <Link to={'/buttons'}> Accordion</Link>
    ];

    return <div>

        <PageHeading title="Accordion" breadcrumbs={breadcrumbs}/>

        <div className="content">
            Content
        </div>
    </div>
}