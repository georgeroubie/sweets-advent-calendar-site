import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe18 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 18</Title>
    </Container>
  );
};

DecemberRecipe18.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe18;
