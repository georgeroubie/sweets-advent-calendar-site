import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe11 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 11</Title>
    </Container>
  );
};

DecemberRecipe11.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe11;
