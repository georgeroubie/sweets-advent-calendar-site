import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe17 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 17</Title>
    </Container>
  );
};

DecemberRecipe17.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe17;
