import PropTypes from 'prop-types';
import styled from 'styled-components';
import Subtitle from '../typography/Subtitle';
import Checkbox from './Checkbox';

const List = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing.xlarge};
`;

const Unit = styled.strong``;

const Description = styled.span``;

const CheckList = ({ id, title, list }) => {
  return (
    <>
      {title && <Subtitle>{title}</Subtitle>}
      <List>
        {list.map(({ unit, description }, index) => (
          <Checkbox key={index} id={`${id}_list_item_${index}`}>
            {unit && <Unit>{unit}&nbsp;</Unit>}
            <Description>{description}</Description>
          </Checkbox>
        ))}
      </List>
    </>
  );
};

CheckList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      unit: PropTypes.string,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

CheckList.defaultProps = {
  title: null,
};

export default CheckList;
