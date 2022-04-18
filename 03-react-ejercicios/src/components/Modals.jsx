import React from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import ContactForm from "./ContactForm";
import SongSearch from "./SongSearch";
import ModalPortal from "./ModalPortal";

const Modals = () => {
  const [isOpen1, openModal1, closeModal1] =
    useModal(true); /* <-- No son useStates */
  const [isOpen2, openModal2, closeModal2] = useModal(false);
  const [isOpenForm, openModalForm, closeModalForm] = useModal(false);
  const [isOpenSearch, openModalSearch, closeModalSearch] = useModal(false);
  const [isOpenModal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpen1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido del modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpen2} closeModal={closeModal2}>
        <h3>Modal </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas
          pariatur non harum, quidem repellendus, fuga provident illo veniam
          enim repudiandae blanditiis explicabo nulla eligendi ipsa dolor est
          vel iusto!
        </p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal>
      <button onClick={openModalForm}>Formulario Contacto</button>
      <Modal isOpen={isOpenForm} closeModal={closeModalForm}>
        <ContactForm />
      </Modal>
      <button onClick={openModalSearch}>Buscador de Canciones</button>
      <Modal isOpen={isOpenSearch} closeModal={closeModalSearch}>
        <SongSearch />
      </Modal>
      <button onClick={openModalPortal}>Modal en portal</button>
      <ModalPortal isOpen={isOpenModal} closeModal={closeModalPortal}>
        <h3>Modal en Portal</h3>
        <p>
          Este es el contenido de un modal que carga en otro nodo del DOM
          diferente a donde carga nuestra App de React, gracias a un React
          <b>Portal</b>
        </p>
        <img src="https://placeimg.com/400/400/tech" alt="Technology" />
      </ModalPortal>
    </div>
  );
};

export default Modals;
