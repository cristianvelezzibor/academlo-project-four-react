import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import "./FormDataUser.css";

const FormDataUser = ({ onCloseModal, onSubmit, dataUser }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: dataUser,
  });

  const onHandleSubmit = (data) => {
    if (dataUser) {
      onSubmit({ id: dataUser.id, ...data });
    } else onSubmit(data);
  };

  return (
    <form className="userForm" onSubmit={handleSubmit(onHandleSubmit)}>
      <h2>{dataUser ? "Edit user" : "New user"}</h2>
      <button
        className="buttonCloseForm"
        type="button"
        onClick={() => onCloseModal()}
      >
        <i className="fa-solid fa-rectangle-xmark"></i>
      </button>
      <div className="dvInputs">
        <div className="dvInputForm">
          <label htmlFor="txtFirstName">First name</label>
          <input
            type="text"
            placeholder="Christian"
            id="txtFirstName"
            {...register("first_name")}
          />
        </div>
        <div className="dvInputForm">
          <label htmlFor="txtLastName">Last name</label>
          <input
            type="text"
            placeholder="Smith"
            id="txtLastName"
            {...register("last_name")}
          />
        </div>
        <div className="dvInputForm">
          <label htmlFor="txtEmail">Email</label>
          <input
            type="email"
            placeholder="example@example.com"
            id="txtEmail"
            {...register("email")}
          />
        </div>
        <div className="dvInputForm">
          <label htmlFor="txtPass">Password</label>
          <input
            type="password"
            placeholder="*********"
            id="txtPass"
            {...register("password")}
          />
        </div>
        <div className="dvInputForm">
          <label htmlFor="txtPass">Birthday</label>
          <input type="date" id="txtBirthday" {...register("birthday")} />
        </div>
      </div>
      <button className="buttonSubmit" type="submit">
        {dataUser ? "Save changes" : "Add new user"}
      </button>
    </form>
  );
};

FormDataUser.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  dataUser: PropTypes.object,
};

export default FormDataUser;
