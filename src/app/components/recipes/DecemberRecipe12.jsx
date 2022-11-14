import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe12 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 12</Title>
    </Container>
  );
};

DecemberRecipe12.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe12;
