import PropTypes from 'prop-types';
import Container from '../layout/Container';
import Title from '../typography/Title';
import CheckList from '../ui/CheckList';

const DecemberRecipe1 = ({ setActiveRecipe }) => {
  function resetActiveRecipe() {
    setActiveRecipe(undefined);
  }

  const ingredients = [
    {
      unit: '2 cups',
      description: 'graham cracker crumbs',
    },
    {
      unit: '1/2 cup',
      description: 'butter, melted',
    },
    {
      unit: '2 tablespoons',
      description: 'white sugar',
    },
    {
      unit: '3 (8 ounce) packages',
      description: 'cream cheese, softened',
    },
    {
      unit: '1 cup',
      description: 'white sugar',
    },
    {
      unit: '3',
      description: 'eggs',
    },
    {
      unit: '1 (8 ounce) container',
      description: 'sour cream',
    },
    {
      unit: '1/4 cup',
      description: 'brewed espresso or strong coffee',
    },
    {
      unit: '2 teaspoons',
      description: 'vanilla extract',
    },
    {
      description: 'pressurized whipped cream',
    },
    {
      description: 'caramel ice cream topping',
    },
  ];

  const directions = [
    {
      description:
        'Preheat oven to 350 degrees F (175 degrees C). Lightly coat a 9-inch springform pan with nonstick cooking spray.',
    },
    {
      description:
        'Mix together the graham cracker crumbs, melted butter, and 2 tablespoons of sugar until well combined. Press into the bottom of the prepared springform pan, and 1 inch up the sides. Bake in preheated oven for 8 minutes, then remove to cool on a wire rack.',
    },
    {
      description: 'Reduce oven temperature to 325 degrees F (165 degrees C).',
    },
    {
      description:
        'Beat the softened cream cheese in a large bowl with an electric mixer until fluffy. Gradually add 1 cup of sugar, beating until blended. Add eggs one at a time, beating well after each addition. Stir in sour cream, espresso and vanilla. Pour batter into the baked and cooled crust.',
    },
    {
      description:
        'Bake cheesecake in the preheated oven for 1 hour and 5 minutes; then turn the oven off, partially open the door and allow the cheesecake to rest for 15 minutes more. Remove from the oven, and run a knife around the edges. Cool cheesecake on a wire rack to room temperature, then cover the springform pan with plastic wrap, and chill in the refrigerator for 8 hours.',
    },
    {
      description:
        'To serve, cut the cheesecake into wedges and garnish each slice with whipped cream and caramel sauce.',
    },
  ];

  return (
    <Container>
      <Title onBack={resetActiveRecipe}>Caramel Macchiato Cheesecake</Title>
      <CheckList id="ingredients_dec_1" title="Ingredients" list={ingredients} />
      <CheckList id="directions_dec_1" title="Directions" list={directions} />
    </Container>
  );
};

DecemberRecipe1.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default DecemberRecipe1;
