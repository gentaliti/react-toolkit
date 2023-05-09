import PageHeading from "../components/heading/PageHeading";
import {Link} from "react-router-dom";

export default function ModalPage() {

    const breadcrumbs = [
        <Link to={'/'}>Components</Link>,
        <Link to={'/modal'}>Modal</Link>
    ];

    return <div>

        <PageHeading title="Modal" breadcrumbs={breadcrumbs}/>

        <div className="content">
            Content
        </div>
    </div>
}