import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe25 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 25</Title>
    </Container>
  );
};

DecemberRecipe25.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe25;
