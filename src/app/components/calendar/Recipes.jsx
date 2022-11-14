import PropTypes from 'prop-types';
import { useMemo } from 'react';
import DecemberRecipe1 from '../recipes/DecemberRecipe1';
import DecemberRecipe10 from '../recipes/DecemberRecipe10';
import DecemberRecipe11 from '../recipes/DecemberRecipe11';
import DecemberRecipe12 from '../recipes/DecemberRecipe12';
import DecemberRecipe13 from '../recipes/DecemberRecipe13';
import DecemberRecipe14 from '../recipes/DecemberRecipe14';
import DecemberRecipe15 from '../recipes/DecemberRecipe15';
import DecemberRecipe16 from '../recipes/DecemberRecipe16';
import DecemberRecipe17 from '../recipes/DecemberRecipe17';
import DecemberRecipe18 from '../recipes/DecemberRecipe18';
import DecemberRecipe19 from '../recipes/DecemberRecipe19';
import DecemberRecipe2 from '../recipes/DecemberRecipe2';
import DecemberRecipe20 from '../recipes/DecemberRecipe20';
import DecemberRecipe21 from '../recipes/DecemberRecipe21';
import DecemberRecipe22 from '../recipes/DecemberRecipe22';
import DecemberRecipe23 from '../recipes/DecemberRecipe23';
import DecemberRecipe24 from '../recipes/DecemberRecipe24';
import DecemberRecipe25 from '../recipes/DecemberRecipe25';
import DecemberRecipe3 from '../recipes/DecemberRecipe3';
import DecemberRecipe4 from '../recipes/DecemberRecipe4';
import DecemberRecipe5 from '../recipes/DecemberRecipe5';
import DecemberRecipe6 from '../recipes/DecemberRecipe6';
import DecemberRecipe7 from '../recipes/DecemberRecipe7';
import DecemberRecipe8 from '../recipes/DecemberRecipe8';
import DecemberRecipe9 from '../recipes/DecemberRecipe9';

const Recipes = ({ activeRecipe, setActiveRecipe }) => {
  const RecipesComponents = useMemo(() => {
    return [
      DecemberRecipe1,
      DecemberRecipe2,
      DecemberRecipe3,
      DecemberRecipe4,
      DecemberRecipe5,
      DecemberRecipe6,
      DecemberRecipe7,
      DecemberRecipe8,
      DecemberRecipe9,
      DecemberRecipe10,
      DecemberRecipe11,
      DecemberRecipe12,
      DecemberRecipe13,
      DecemberRecipe14,
      DecemberRecipe15,
      DecemberRecipe16,
      DecemberRecipe17,
      DecemberRecipe18,
      DecemberRecipe19,
      DecemberRecipe20,
      DecemberRecipe21,
      DecemberRecipe22,
      DecemberRecipe23,
      DecemberRecipe24,
      DecemberRecipe25,
    ];
  }, []);

  const Recipe = useMemo(() => {
    return RecipesComponents[activeRecipe - 1];
  }, [activeRecipe, RecipesComponents]);

  return <Recipe />;
};

Recipes.propTypes = {
  activeRecipe: PropTypes.number.isRequired,
  setActiveRecipe: PropTypes.func.isRequired,
};

export default Recipes;
