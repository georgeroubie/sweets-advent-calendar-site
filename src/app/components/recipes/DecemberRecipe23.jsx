import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe23 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 23</Title>
    </Container>
  );
};

DecemberRecipe23.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe23;
