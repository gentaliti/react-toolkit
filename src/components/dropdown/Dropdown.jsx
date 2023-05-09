import {useEffect, useRef, useState} from "react";
import './Dropdown.scss'

function Dropdown({options, value, onChange}) {

    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        if (!divEl.current) {
            return;
        }
        const handler = (event) => {
            if (!divEl?.current?.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        }
    });

    const downArrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                           stroke="currentColor" className="w-6 h-6 icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
    </svg>;

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(!isOpen);
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div className="item" onClick={() => handleOptionClick(option)}
                 key={option.value}>
                {option.label}
            </div>
        );
    });

    return (<div ref={divEl} className="dropdown">
            <div className="label flex align-center justify-content cursor-pointer"
                 onClick={handleClick}>{value?.label || 'Select...'}
                {downArrow}
            </div>
            {isOpen && <div className="options">{renderedOptions}</div>}
        </div>
    );
}

export default Dropdown;