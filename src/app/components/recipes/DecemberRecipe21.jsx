import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe21 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 21</Title>
    </Container>
  );
};

DecemberRecipe21.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe21;
