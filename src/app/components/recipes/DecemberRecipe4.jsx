import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe4 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 4</Title>
    </Container>
  );
};

DecemberRecipe4.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe4;
