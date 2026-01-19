const sleep = async (timeout: number) => {
  return await new Promise((resolve) => setTimeout(resolve, timeout));
};

export default sleep;
