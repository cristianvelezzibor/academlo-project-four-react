import { axiosInstance } from "../api/axiosInstance";

export const createUser = async (data) => {
  try {
    await axiosInstance.post("users/", data);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
