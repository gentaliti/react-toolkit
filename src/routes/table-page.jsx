import PageHeading from "../components/heading/PageHeading";
import {Link} from "react-router-dom";
import SortableTable from "../components/table/SortableTable";

export default function TablePage() {

    const data = [
        {name: 'Orange', origin: 'eu', score: 5},
        {name: 'Apple', origin: 'eu', score: 3},
        {name: 'Banana', origin: 'eu', score: 1},
        {name: 'Lime', origin: 'eu', score: 1}
    ];

    const getSortValue = (data) => data.score;
    const sortOrder = 'asc';

    const sortDataByScore = () => {
        data.sort((a, b) => {
            const valA = getSortValue(a);
            const valB = getSortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valA === 'string') {
                return valA.localeCompare(valB) * reverseOrder;
            } else {
                return (valA - valB) * reverseOrder;
            }
        });
    }
    const config = [
        {
            label: 'Fruits',
            render: (row) => row.name,
            sortValue: (fruit) => fruit.name
        },
        {
            label: 'Origin',
            render: (row) => row.origin
        },
        {
            label: 'Score',
            render: (row) => row.score,
            sortValue: (fruit) => fruit.score
        }
    ];

    const keyFn = (fruit) => {
        return fruit.name
    }

    const breadcrumbs = [
        <Link to={'/'}>Components</Link>,
        <Link to={'/table'}>Table</Link>
    ];

    return <div>
        <PageHeading title="Table" breadcrumbs={breadcrumbs}/>

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

                    <SortableTable data={data} config={config} keyFn={keyFn}/>
                </section>
            </div>
        </div>
    </div>
}