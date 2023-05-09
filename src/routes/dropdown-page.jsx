import PageHeading from "../components/heading/PageHeading";
import {Link} from "react-router-dom";

export default function DropdownPage() {

    const breadcrumbs = [
        <Link to={'/'}>Components</Link>,
        <Link to={'/Dropdown'}>Dropdown</Link>
    ];

    return <div>

        <PageHeading title="Dropdown" breadcrumbs={breadcrumbs}/>

        <div className="content">
            Content
        </div>
    </div>
}