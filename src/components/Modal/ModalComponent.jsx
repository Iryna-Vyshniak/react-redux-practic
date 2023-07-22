import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';
import { customStyles } from '../../styles/modalStyles';

Modal.setAppElement('#root');

export const ModalComponent = ({ children, modalIsOpen, closeModal }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
      <button
        onClick={closeModal}
        className='absolute top-2 right-2 flex items-center justify-center border-0 outline-none'
      >
        <IoMdClose className='w-4 h-4' />
      </button>
      {children}
    </Modal>
  );
};
