import "@components/Modal/modal.css";
import { useState } from "react"
import { useForm } from '@formspree/react';
interface ModalProps {
    OpenModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ OpenModal, setOpenModal }) => {
    const [state, handleSubmit] = useForm("xbjvvrbv");
    const [formData, SetFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const handledata = (e: any) => {
        SetFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleReset = () => {
        SetFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };
    return (
        <>{OpenModal && (
            <div className="modal-content">
                <form action="" id='contactus' onSubmit={(e) => {
                    handleReset();
                    handleSubmit(e);
                    setOpenModal(false)

                }}>
                    <i id='crossForm' className="fa-solid fa-xmark" onClick={() => setOpenModal(false)}></i>
                    <div className="input-box">
                        <i className="fa-solid fa-user"></i> <input type="text" name="name" required placeholder="Enter full name" onChange={handledata} value={formData.name} />
                    </div>
                    <div className="input-box">
                        <i className="fa-solid fa-envelope"></i><input type="email" name="email" required placeholder="Enter email address" onChange={handledata} value={formData.email} />
                    </div>
                    <div className="input-box">
                        <i className="fa-solid fa-phone"></i> <input type="text" name="phone" required placeholder="Enter phone number" onChange={handledata} value={formData.phone} />
                    </div>
                    <div className="input-box">
                        <i className="fa-solid fa-message"></i> <input type="text" name="message" required placeholder="message..." onChange={handledata} value={formData.message} />
                    </div>
                    <button type='submit' className="submitbtn" disabled={state.submitting}> <i className="fa fa-paper-plane"></i>Send </button>
                </form>

            </div>)}</>
    )
}
export default Modal;