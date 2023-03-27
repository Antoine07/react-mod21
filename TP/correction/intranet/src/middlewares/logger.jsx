export default (store) => (next) => (action) => {
  if (action.type === "login") {
    if (true) {
      // store.dispatch(starSlice.actions.add({ number: step }));
    }
  }

  // permet d'effectuer précisémment les actions dans le reducer si on ne fait pas ça rien ne se passe ...
  const returnAction = next(action);

  return returnAction; // TODO pourquoi faut il retourner les actions ???
};
