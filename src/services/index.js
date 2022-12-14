import instance from "./config";

export const get = async (url) => {
  try {
    return await (
      await instance.get(url)
    ).data;
  } catch (error) {
    return error;
  }
};
