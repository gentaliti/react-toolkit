import PageHeading from "../components/PageHeading";
import {Link} from "react-router-dom";

export default function HeadingPage() {

    const breadcrumbs = [
        <Link to={'/'}>Components</Link>,
        <Link to={'/heading'}> Buttons</Link>
    ];

    return <div>

        <PageHeading title="Heading" breadcrumbs={breadcrumbs}/>

        <div className="content">
            Content
        </div>
    </div>
}