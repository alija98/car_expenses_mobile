let injectedStore: any;

const injectStore = (s: any) => {
  injectedStore = s;
};
const getUserToken = async () => {
  const access_token = injectedStore?.getState()?.user.token;
  return access_token;
};
export {injectStore, getUserToken};
