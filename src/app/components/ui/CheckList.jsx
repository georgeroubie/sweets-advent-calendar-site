import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import _SmallSubtitle from '../typography/SmallSubtitle';
import Subtitle from '../typography/Subtitle';
import Checkbox from './Checkbox';

const List = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing.xlarge};
`;

const SmallSubtitle = styled(_SmallSubtitle)`
  margin-top: ${({ theme: { spacing } }) => spacing.normal};
`;

const Unit = styled.strong``;

const Description = styled.span``;

const CheckList = ({ id, title, list }) => {
  return (
    <List>
      {title && <Subtitle>{title}</Subtitle>}
      {list.map((item, index) => (
        <React.Fragment key={index}>
          {item.title ? (
            <SmallSubtitle>{item.title}</SmallSubtitle>
          ) : (
            <Checkbox id={`${id}_list_item_${index}`}>
              {item.unit && <Unit>{item.unit}&nbsp;</Unit>}
              <Description>{item.description}</Description>
            </Checkbox>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

CheckList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      unit: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};

CheckList.defaultProps = {
  title: null,
};

export default CheckList;
