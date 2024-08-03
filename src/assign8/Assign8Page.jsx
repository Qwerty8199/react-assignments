import { useState } from "react"
import Modal from "./Portal";


export const Assign8Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal   
   = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div>
        <button onClick={handleOpenModal}>Open Modal</button>
        {isModalOpen   
   && <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <h2>
                Modal Content
            </h2>
        </Modal>}
      </div>
    );
  

}