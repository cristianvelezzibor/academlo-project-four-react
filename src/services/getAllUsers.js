import { axiosInstance } from "../api/axiosInstance";

export const getAllUsers = async () => {
  try {
    const result = await axiosInstance.get("/users/");
    return result.data;
  } catch (error) {
    console.error(error);
  }
};
