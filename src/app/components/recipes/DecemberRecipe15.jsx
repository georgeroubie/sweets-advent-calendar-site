import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe15 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 15</Title>
    </Container>
  );
};

DecemberRecipe15.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe15;
