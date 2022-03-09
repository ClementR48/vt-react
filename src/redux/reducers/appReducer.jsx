const INITIAL_STATE = {
  openMenu: true,
  navlink: [
    { path: "/", value: "Evenement" },
    { path: "/create-event", value: "Créer ton évenement" },
    { path: "/messages", value: "Messages" },
    { path: "/list-club", value: "Liste Club" },
  ],
};

export default function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "OPENMENU":
      let payload = action.payload !== "" ? action.payload : !state.openMenu
     
      return {
        ...state,
        openMenu: payload,
      };

    default:
      return state;
  }
}
