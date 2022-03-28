import React from 'react';

//Import Components
import List from './components/list';

function Props() {
  const car = 'BMW White';
  const color = 'White';
  const year = 2017;
  const detailCar = {
    author: 'Mr. Alvin',
    desc: 'The purpose of a gasoline car engine is to convert gasoline into motion so that your car can move. Currently the easiest way to create motion from gasoline is to burn the gasoline inside an engine. Therefore, a car engine is an internal combustion engine — combustion takes place internally.',
  };

  function handleClick() {
    alert('Hello World');
  }

  return (
    // Code Inside div
    <div>
      <List nama={car} color={color} year={year} detailCar={detailCar} />
      <List nama="Mercedes-Benz" />
      <List nama="Ducati" handleClick={handleClick} />
    </div>
  );
}

export default Props;
