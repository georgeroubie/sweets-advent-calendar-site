import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe14 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 14</Title>
    </Container>
  );
};

DecemberRecipe14.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe14;
