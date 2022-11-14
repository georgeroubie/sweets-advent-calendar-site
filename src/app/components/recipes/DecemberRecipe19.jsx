import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';

const DecemberRecipe19 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>December Recipe 19</Title>
    </Container>
  );
};

DecemberRecipe19.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe19;
