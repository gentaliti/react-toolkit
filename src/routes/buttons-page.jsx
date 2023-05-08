import PageHeading from "../components/PageHeading";
import {Link} from "react-router-dom";

export default function ButtonsPage() {

    const breadcrumbs = [
        <Link to={'/'}>Components</Link>,
        <Link to={'/buttons'}> Buttons</Link>
    ];

    return <div>

        <PageHeading title="Overview" breadcrumbs={breadcrumbs}/>

        Button Page
    </div>
}