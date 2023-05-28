import { useEffect, useState } from "react";
import { getAllUsers } from "./services/getAllUsers";
import { createUser } from "./services/createUser";
import { updateUser } from "./services/updateUser";
import { deleteUser } from "./services/deleteUser";
import { toast, ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";
import ListUsers from "./components/ListUsers/ListUsers";
import Modal from "./components/Modal/Modal";
import FormDataUser from "./components/FormDataUser/FormDataUser";
import PopupDeleteUser from "./components/PopupDeleteUser/PopupDeleteUser";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

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
    let res;
    if (data.id) res = await updateUser(data.id, data);
    else res = await createUser(data);
    await loadAllUser();
    if (res) {
      toast.success("Congratulations.", { closeButton: true });
      onCloseModal();
    } else toast.error("Failed.", { closeButton: true });
  };
  const onSubmitDelete = async (data) => {
    let res = await deleteUser(data.id);
    await loadAllUser();
    if (res) {
      toast.success("Congratulations.", { closeButton: true });
      onCloseModal();
    } else toast.error("Failed.", { closeButton: true });
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
      <ToastContainer />
    </>
  );
}

export default App;
