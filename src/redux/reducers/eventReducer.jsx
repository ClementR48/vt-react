const INITIAL_STATE = {
  dateValue: "",
  sportInputValue: "",
  nbPlaceTaken: 0,
  listEvents: [
    {
      id: 1,
      name_person: "Clément",
      stars_person: 3,
      sport_event: "Tennis",
      club_event: "Stade Toulousain",
      date_event: "2022-03-23",
      time_event: "18h",
      nb_place_available: 2,
      city: "Toulouse",
    },
    {
      id: 2,
      name_person: "Marie",
      stars_person: 2,
      sport_event: "Padel",
      club_event: "Balma Tennis",
      date_event: "2022-03-23",
      time_event: "17h",
      nb_place_available: 1,
      city: "Toulouse",
    },
    {
      id: 3,
      name_person: "Patrick",
      stars_person: 2,
      sport_event: "Padel",
      club_event: "Stade Toulousain",
      date_event: "2022-03-23",
      time_event: "18h",
      nb_place_available: 2,
      city: "Toulouse",
    },
    {
      id: 4,
      name_person: "Clément",
      stars_person: 2,
      sport_event: "Padel",
      club_event: "Stade Toulousain",
      date_event: "2022-03-23",
      time_event: "18h",
      nb_place_available: 2,
      city: "Paris",
    },
  ],
};

export default function eventReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DATEVALUE":
      return {
        ...state,
        dateValue: action.payload,
      };

    case "SPORTFILTER":
      return {
        ...state,
        sportInputValue: action.payload,
      };

    case 'NBPLACETAKEN':
      return {
        ...state,
        nbPlaceTaken: action.payload
      }

    case "UPDATEEVENTS":
      const indexEvent = state.listEvents.findIndex(
        (ev) => ev.id === action.payload.id
      );
      
      let newArr = [...state.listEvents]

      const updateEvent = {
        ...state.listEvents[indexEvent],
        nb_place_available: action.payload.nb_place_available,
      };

      newArr.splice(indexEvent, 1, updateEvent);

      

      return {
        ...state,
        listEvents: newArr,
      };

    case 'CREATEEVENT' : 

     const newArrCreate = state.listEvents.slice();
     newArrCreate.push(action.payload)
     console.log(newArrCreate);
    

    return {
      ...state,
      listEvents: newArrCreate

    }

    default:
      return state;
  }
}
