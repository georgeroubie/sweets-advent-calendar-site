import { useState } from 'react';
import Days from './Days';
import Recipes from './Recipes';

const Calendar = () => {
  const [activeRecipe, setActiveRecipe] = useState(undefined);

  return activeRecipe ? (
    <Recipes activeRecipe={activeRecipe} setActiveRecipe={setActiveRecipe} />
  ) : (
    <Days setActiveRecipe={setActiveRecipe} />
  );
};

export default Calendar;
