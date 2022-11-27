import PropTypes from 'prop-types';
import { useMemo } from 'react';
import styled from 'styled-components';
import { recipes } from '../../data/data';
import Container from '../layout/Container';
import Description from '../typography/Description';
import Title from '../typography/Title';
import CheckList from '../ui/CheckList';
import StepsList from '../ui/StepsList';

const Link = styled.a``;

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
      <Description>
        You can see the original recipe&nbsp;
        <Link href={recipe.url} target="_blank" rel="noreferrer">
          here
        </Link>
        .
      </Description>
    </Container>
  );
};

Recipes.propTypes = {
  activeRecipe: PropTypes.number.isRequired,
  setActiveRecipe: PropTypes.func.isRequired,
};

export default Recipes;
