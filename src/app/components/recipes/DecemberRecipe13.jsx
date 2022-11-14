import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe13 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 13</Title>
    </Container>
  );
};

DecemberRecipe13.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe13;
