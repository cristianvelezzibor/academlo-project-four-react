import { axiosInstance } from "../api/axiosInstance";

export const updateUser = async (id, data) => {
  try {
    await axiosInstance.put(`userss/${id}/`, data);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
