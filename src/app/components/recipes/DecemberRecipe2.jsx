import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe2 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 2</Title>
    </Container>
  );
};

DecemberRecipe2.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe2;
