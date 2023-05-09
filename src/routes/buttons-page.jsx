import PageHeading from "../components/heading/PageHeading";
import {Link} from "react-router-dom";

export default function ButtonsPage() {

    const breadcrumbs = [
        <Link to={'/'}>Components</Link>,
        <Link to={'/buttons'}> Buttons</Link>
    ];

    return <div>

        <PageHeading title="Buttons" breadcrumbs={breadcrumbs}/>

        <div className="content">
            Content
        </div>
    </div>
}