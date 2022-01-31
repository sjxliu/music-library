export const logger = (store) => (next) => (action) => {
  console.log("dispatch", store.getState());
  next(action);
  console.log("after dispatch", store.getState());
};
