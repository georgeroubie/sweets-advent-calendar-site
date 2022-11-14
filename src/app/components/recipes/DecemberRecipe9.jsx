import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe9 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 9</Title>
    </Container>
  );
};

DecemberRecipe9.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe9;
