import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { recipes } from '../../data/data';
import Container from '../layout/Container';
import Title from '../typography/Title';
import CheckList from '../ui/CheckList';
import StepsList from '../ui/StepsList';

const Recipes = ({ activeRecipe, setActiveRecipe }) => {
  const recipe = useMemo(() => {
    return recipes[activeRecipe - 1];
  }, [activeRecipe]);

  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>{recipe.title}</Title>
      <CheckList id={`ingredients_dec_${activeRecipe}`} title="Ingredients" list={recipe.ingredients} />
      <StepsList id={`directions_dec_${activeRecipe}`} title="Directions" list={recipe.directions} />
    </Container>
  );
};

Recipes.propTypes = {
  activeRecipe: PropTypes.number.isRequired,
  setActiveRecipe: PropTypes.func.isRequired,
};

export default Recipes;
