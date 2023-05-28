import Proptypes from "prop-types";
import "./Modal.css";

const Modal = ({ isVisible, children }) => {
  if (!isVisible) return;
  return <div className="modal">{children}</div>;
};

Modal.propTypes = {
  isVisible: Proptypes.bool.isRequired,
  children: Proptypes.object.isRequired,
};

export default Modal;
