import {useState} from "react";
import './Accordion.scss'

function Accordion({items}) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const downArrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                           stroke="currentColor" className="w-6 h-6 icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
    </svg>;

    const leftArrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                           stroke="currentColor" className="w-6 h-6 icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
    </svg>


    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className="text-xl">
            {isExpanded ? downArrow : leftArrow}
        </span>

        const handleClick = (nextIndex) => {
            if (expandedIndex === nextIndex) {
                setExpandedIndex(-1);
            } else {
                setExpandedIndex(nextIndex)
            }
        }

        return (
            <div key={item.id} className="accordion">
                <div className={`item ${isExpanded ? 'open' : ''}`} onClick={() => handleClick(index)}>
                    <p className="number">0{item.id}</p>
                    <p className="text">{item.label}</p>
                    {icon}

                    <div className="hidden-box">
                        {isExpanded && <p>{item.content}</p>}
                    </div>
                </div>

            </div>
        );
    });

    return (
        <div className="flex-v gap-24">{renderedItems}</div>
    );
}

export default Accordion;