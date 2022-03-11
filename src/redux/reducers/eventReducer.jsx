const INITIAL_STATE = {
  dateValue: "",
  listEvents: [
    {
      id: 1,
      name_person: "Clément",
      stars_person: 3,
      sport_event: "Padel",
      club_event: "Stade Toulousain",
      date_event: "03/12",
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
      date_event: "03/11",
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
      date_event: "03/12",
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
      date_event: "12/03",
      time_event: "18h",
      nb_place_available: 2,
      city: "Paris",
    },
  ],
  
};

export default function eventReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DATEVALUE":
      
      const dateFormat = action.payload.split("-").slice(1).reverse().join('/');
    
      

      return {
        ...state,
        dateValue: dateFormat,
        
      };

    default:
      return state;
  }
}
