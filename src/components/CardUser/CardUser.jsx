import Proptypes from "prop-types";
import "./CardUser.css";
import iconEdit from "../../assets/img/edit.png";

const CardUser = ({ user, onEditUser, onDeleteUser }) => {
  return (
    <article key={user.id} className="card">
      <div>
        <p>
          {user.first_name} {user.last_name}
        </p>
      </div>
      <hr />
      <div className="infoUser">
        <div>
          <span>EMAIL</span>
          <p>{user.email}</p>
        </div>
        <div>
          <span>BIRTHDAY</span>
          <p>
            <i id="iconBirthDay" className="fa-solid fa-gift"></i>
            {user.birthday}
          </p>
        </div>
      </div>
      <hr />
      <div className="buttonUser">
        <button onClick={() => onDeleteUser(user)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
        <button onClick={() => onEditUser(user)}>
          <img src={iconEdit} alt="edit" />
        </button>
      </div>
    </article>
  );
};

CardUser.propTypes = {
  user: Proptypes.object.isRequired,
  onEditUser: Proptypes.func.isRequired,
  onDeleteUser: Proptypes.func.isRequired,
};

export default CardUser;
