import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe8 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 8</Title>
    </Container>
  );
};

DecemberRecipe8.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe8;
