import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe20 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 20</Title>
    </Container>
  );
};

DecemberRecipe20.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe20;
