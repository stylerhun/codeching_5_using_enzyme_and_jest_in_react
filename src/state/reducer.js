import constants from "./constants";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case constants.GET_CARS: {
      return {
        ...state,
        cars: payload
      };
    }
    case constants.REMOVE_CAR: {
      return {
        ...state,
        cars: state.cars.filter(car => car.id !== payload)
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
