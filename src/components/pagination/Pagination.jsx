import './Pagination.scss';
export default function Pagination() {
    return <div className="pagination">
        <button className="btn btn-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 btn-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
            </svg>
        </button>
        <a className="page-link">1</a>
        <a className="page-link ">2</a>
        <a className="page-link page-link--current">3</a>
        <a className="page-link">4</a>
        <a className="page-link">5</a>
        <a className="page-link">6</a>
        <span>...</span>
        <a className="page-link btn-page-number">23</a>
        <button className="btn btn-right">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 btn-icon ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
            </svg>
        </button>
    </div>
}