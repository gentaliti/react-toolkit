import PageHeading from "../components/heading/PageHeading";
import {Link} from "react-router-dom";

export default function TablePage() {

    const breadcrumbs = [
        <Link to={'/'}>Components</Link>,
        <Link to={'/table'}>Table</Link>
    ];

    return <div>

        <PageHeading title="Table" breadcrumbs={breadcrumbs}/>

        <div className="content">
            Content
        </div>
    </div>
}