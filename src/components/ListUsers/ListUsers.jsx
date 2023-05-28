import PropTypes from "prop-types";
import CardUser from "../CardUser/CardUser";
import { usePagination } from "../../hooks/usePagination";
import "./ListUsers.css";
import { useState } from "react";

const ListUsers = ({ listUsers, onEditUser, onDeleteUser }) => {
  const [quantityPagination, setQuantityPagination] = useState(5);
  const { currentPage, listTemp, pages, changePageTo } = usePagination(
    listUsers,
    quantityPagination
  );
  return (
    <>
      <div>
        {!listTemp.length && <p id="lblWithoutUsers">Without users</p>}
        {Boolean(listTemp.length) && (
          <ul className="ulListUsers">
            {listTemp.map((user) => (
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
      <div className="dvPagination">
        <select
          value={quantityPagination}
          onChange={(e) => setQuantityPagination(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <button onClick={() => changePageTo(currentPage - 1)}>Back</button>
        {pages.map((i) => (
          <button
            key={i}
            onClick={() => changePageTo(i)}
            style={{
              background: currentPage == i ? "#d85d5d" : undefined,
              color: currentPage == i ? "white" : undefined,
            }}
          >
            {i}
          </button>
        ))}
        <button onClick={() => changePageTo(currentPage + 1)}>Next</button>
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
