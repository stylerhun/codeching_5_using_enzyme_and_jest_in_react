import React, { Fragment } from "react";
import { useCarState, useCarDispatch } from "../state/context";
import { getCars, deleteCar } from "../state/actions";
import { useAsync } from "react-async";

const CarList = () => {
  const { cars } = useCarState();
  const dispatch = useCarDispatch();

  const { isLoading } = useAsync({ promiseFn: getCars, dispatch });

  const removeCar = id => {
    deleteCar({ dispatch, id });
  };

  if (isLoading) return <Fragment>Loading...</Fragment>;

  return (
    <div className="App">
      This is the car list which is coming from the backend test:
      <div className="car-list" data-testid="car-list">
        {cars.map(car => {
          return (
            <div key={car.name} data-testid="car">
              <b>{car.name}</b>, color: {car.color}{" "}
              <button
                data-testid="btn-delete"
                onClick={() => removeCar(car.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarList;
