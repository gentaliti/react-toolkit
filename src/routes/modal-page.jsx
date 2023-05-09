import PageHeading from "../components/heading/PageHeading";
import {Link} from "react-router-dom";
import Modal from "../components/modal/Modal";
import {useState} from "react";
import Button from "../components/button/Button";

export default function ModalPage() {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };


    const breadcrumbs = [
        <Link to={'/'}>Components</Link>,
        <Link to={'/modal'}>Modal</Link>
    ];

    return <div>
        <PageHeading title="Modal" breadcrumbs={breadcrumbs}/>

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

                    <div className="component">
                        <Button primary onClick={toggleModal}>Open modal</Button>
                        {showModal && <Modal onClose={toggleModal}/>}
                    </div>
                </section>
            </div>
        </div>
    </div>
}