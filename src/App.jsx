import { useEffect, useState } from "react";
import { getAllUsers } from "./services/getAllUsers";
import { createUser } from "./services/createUser";
import { updateUser } from "./services/updateUser";
import { deleteUser } from "./services/deleteUser";
import Header from "./components/Header/Header";
import ListUsers from "./components/ListUsers/ListUsers";
import Modal from "./components/Modal/Modal";
import "./App.css";
import FormDataUser from "./components/FormDataUser/FormDataUser";
import PopupDeleteUser from "./components/PopupDeleteUser/PopupDeleteUser";

function App() {
  const [listUsers, setListUsers] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isVisibleModalDelete, setIsVisibleModalDelete] = useState(false);
  const [dataUser, setdataUser] = useState(null);

  const closeModal = () => {
    if (isVisibleModal == true) setIsVisibleModal(false);
    else setIsVisibleModalDelete(false);
  };
  const onCloseModal = () => {
    closeModal();
    setdataUser(null);
  };
  const loadAllUser = async () => {
    const dataAllUsers = await getAllUsers();
    dataAllUsers.sort((a, b) =>
      a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0
    );
    setListUsers(dataAllUsers);
  };
  const onSubmit = async (data) => {
    if (data.id) await updateUser(data.id, data);
    else await createUser(data);
    await loadAllUser();
    onCloseModal();
  };
  const onSubmitDelete = async (data) => {
    await deleteUser(data.id);
    await loadAllUser();
    onCloseModal();
  };
  const onEditUser = async (data) => {
    setdataUser(data);
    setIsVisibleModal(true);
  };
  const onDeleteUser = async (data) => {
    setdataUser(data);
    setIsVisibleModalDelete(true);
  };

  useEffect(() => {
    loadAllUser();
  }, []);

  return (
    <>
      <Header onCreateUser={() => setIsVisibleModal(true)} />
      <ListUsers
        listUsers={listUsers}
        onEditUser={onEditUser}
        onDeleteUser={onDeleteUser}
      ></ListUsers>
      <Modal isVisible={isVisibleModal}>
        <FormDataUser
          onCloseModal={() => onCloseModal()}
          onSubmit={onSubmit}
          dataUser={dataUser}
        />
      </Modal>
      <Modal isVisible={isVisibleModalDelete}>
        <PopupDeleteUser
          onCloseModal={() => onCloseModal()}
          onSubmitDelete={onSubmitDelete}
          userSelected={dataUser}
        />
      </Modal>
    </>
  );
}

export default App;
