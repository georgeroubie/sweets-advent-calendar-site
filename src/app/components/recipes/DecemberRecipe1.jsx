import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe1 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 1</Title>
    </Container>
  );
};

DecemberRecipe1.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe1;
