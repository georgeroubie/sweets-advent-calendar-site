import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe16 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 16</Title>
    </Container>
  );
};

DecemberRecipe16.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe16;
