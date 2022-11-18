import PropTypes from 'prop-types';
import styled from 'styled-components';
import Subtitle from '../typography/Subtitle';

const List = styled.ul``;

const ListItem = styled.li``;

const Measure = styled.strong``;

const Description = styled.span``;

const CheckList = ({ title, list }) => {
  return (
    <>
      {title && <Subtitle>{title}</Subtitle>}
      <List>
        {list.map(({ measure, description }, index) => (
          <ListItem key={index}>
            {measure && <Measure>{measure}</Measure>}
            <Description>{description}</Description>
          </ListItem>
        ))}
      </List>
    </>
  );
};

CheckList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      measure: PropTypes.string,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

CheckList.defaultProps = {
  title: null,
};

export default CheckList;
