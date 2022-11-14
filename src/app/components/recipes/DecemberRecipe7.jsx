import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe7 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 7</Title>
    </Container>
  );
};

DecemberRecipe7.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe7;
