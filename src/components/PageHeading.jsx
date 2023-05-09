import './PageHeading.scss'

export default function PageHeading({title, breadcrumbs}) {
    const breadcrumbsElement = breadcrumbs.map((breadcrumb, index, row) => {
        if (index + 1 === row.length) {
            return <li key={index}>
                {breadcrumb}
            </li>
        }
        return <li key={index}>
            {breadcrumb} <span>></span>
        </li>
    });
    return <div className="page-heading">
        <ul className='breadcrumb'>{breadcrumbsElement}</ul>
        <h1>{title}</h1>
    </div>
}