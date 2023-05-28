import { axiosInstance } from "../api/axiosInstance";

export const deleteUser = async (id) => {
  try {
    await axiosInstance.delete(`users/${id}/`);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
