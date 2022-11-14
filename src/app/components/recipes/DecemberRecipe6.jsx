import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe6 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 6</Title>
    </Container>
  );
};

DecemberRecipe6.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe6;
