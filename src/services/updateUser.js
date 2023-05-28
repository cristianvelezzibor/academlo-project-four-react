import { axiosInstance } from "../api/axiosInstance";

export const updateUser = async (id, data) => {
  try {
    await axiosInstance.put(`users/${id}/`, data);
  } catch (error) {
    console.error(error);
  }
};
