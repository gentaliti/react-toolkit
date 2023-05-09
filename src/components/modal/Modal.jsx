import ReactDOM from "react-dom";
import Button from "../button/Button";

function Modal({onClose}) {
    return ReactDOM.createPortal(<div>
            <div onClick={onClose} className="absolute inset-0 bg-grey"></div>
            <div className="absolute inset-40 p-10 bg-white flex-v justify-content align-center gap-24">
                <h1>I am a modal</h1>
                <Button primary onClick={onClose}>Accept</Button>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );
}

export default Modal;