import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe5 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 5</Title>
    </Container>
  );
};

DecemberRecipe5.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe5;
