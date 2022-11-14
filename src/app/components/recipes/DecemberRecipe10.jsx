import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe10 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 10</Title>
    </Container>
  );
};

DecemberRecipe10.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe10;
