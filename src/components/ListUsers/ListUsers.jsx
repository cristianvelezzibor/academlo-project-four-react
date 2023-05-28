import PropTypes from "prop-types";
import CardUser from "../CardUser/CardUser";
import "./ListUsers.css";

const ListUsers = ({ listUsers, onEditUser, onDeleteUser }) => {
  return (
    <>
      <div>
        {!listUsers.length && <p id="lblWithoutUsers">Without users</p>}
        {Boolean(listUsers.length) && (
          <ul className="ulListUsers">
            {listUsers.map((user) => (
              <li key={user.id}>
                <CardUser
                  user={user}
                  onEditUser={onEditUser}
                  onDeleteUser={onDeleteUser}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

ListUsers.propTypes = {
  listUsers: PropTypes.array.isRequired,
  onEditUser: PropTypes.func.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};

export default ListUsers;
