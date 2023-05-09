import PageHeading from "../components/heading/PageHeading";
import {Link} from "react-router-dom";
import Dropdown from "../components/dropdown/Dropdown";
import {useState} from "react";

export default function DropdownPage() {

    const breadcrumbs = [
        <Link to={'/'}>Components</Link>,
        <Link to={'/Dropdown'}>Dropdown</Link>
    ];

    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    };

    const options = [{
        label: 'Red', value: 'red'
    }, {
        label: 'Green', value: 'green'
    }, {
        label: 'Blue', value: 'blue'
    }];

    return <div>
        <PageHeading title="Dropdown" breadcrumbs={breadcrumbs}/>

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
                    <p>Simple as that...</p>
                    <Dropdown  options={options} value={selection} onChange={handleSelect} />
                </section>
            </div>
        </div>
    </div>
}