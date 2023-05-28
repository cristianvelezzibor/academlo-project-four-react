import Proptypes from "prop-types";
import { useForm } from "react-hook-form";
import "./PopupDeleteUser.css";

const PopupDeleteUser = ({ onCloseModal, onSubmitDelete, userSelected }) => {
  const { handleSubmit } = useForm();

  const onHandleSubmitDelete = () => {
    onSubmitDelete(userSelected);
  };

  return (
    <form
      className="userFormDelete"
      onSubmit={handleSubmit(onHandleSubmitDelete)}
    >
      <h2>Delete user</h2>
      <button
        className="buttonCloseForm"
        type="button"
        onClick={() => onCloseModal()}
      >
        <i className="fa-solid fa-rectangle-xmark"></i>
      </button>
      <div className="textDelete">
        <p>
          El usuario {userSelected.first_name} {userSelected.last_name} se ha
          eliminado.
        </p>
      </div>
      <button className="buttonSubmit" type="submit">
        Accept
      </button>
    </form>
  );
};

PopupDeleteUser.propTypes = {
  onCloseModal: Proptypes.func.isRequired,
  userSelected: Proptypes.object,
  onSubmitDelete: Proptypes.func.isRequired,
};

export default PopupDeleteUser;
