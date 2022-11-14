import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe24 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 24</Title>
    </Container>
  );
};

DecemberRecipe24.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe24;
