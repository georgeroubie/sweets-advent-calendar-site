import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe22 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 22</Title>
    </Container>
  );
};

DecemberRecipe22.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe22;
