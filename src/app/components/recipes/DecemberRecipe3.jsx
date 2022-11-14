import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe3 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 3</Title>
    </Container>
  );
};

DecemberRecipe3.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe3;
