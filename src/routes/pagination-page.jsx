import PageHeading from "../components/heading/PageHeading";
import {Link} from "react-router-dom";
import Pagination from "../components/pagination/Pagination";

export default function PaginationPage() {

    const breadcrumbs = [
        <Link to={'/'}>Components</Link>,
        <Link to={'/pagination'}> Buttons</Link>
    ];

    return <div>
        <PageHeading title="Pagination" breadcrumbs={breadcrumbs}/>

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
                    This component is work in progress...

                    <Pagination></Pagination>
                </section>
            </div>
        </div>
    </div>
}