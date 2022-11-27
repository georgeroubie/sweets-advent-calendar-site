import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import _SmallSubtitle from '../typography/SmallSubtitle';
import Subtitle from '../typography/Subtitle';
import Radio from './Radio';

const List = styled.div`
  position: relative;
  margin-bottom: ${({ theme: { spacing } }) => spacing.xlarge};

  &:before {
    content: '';
    display: flex;
    width: ${({ theme: { borderSize } }) => borderSize.small};
    height: 100%;
    background-color: ${({ theme: { colors } }) => colors.textPrimary};
    position: absolute;
    left: calc(${({ theme: { fontSize, borderSize } }) => `${fontSize.xlarge} / 2 - ${borderSize.small} / 2`});
    top: 0;
    z-index: 0;
  }
`;

const SmallSubtitle = styled(_SmallSubtitle)`
  margin-left: calc(${({ theme: { fontSize } }) => fontSize.xlarge} + ${({ theme: { spacing } }) => spacing.normal});
  margin-top: ${({ theme: { fontSize } }) => fontSize.large};
  margin-bottom: ${({ theme: { fontSize } }) => fontSize.large};
`;

const Description = styled.span``;

const StepsList = ({ id, title, list }) => {
  return (
    <>
      {title && <Subtitle>{title}</Subtitle>}
      <List>
        {list.map((item, index) => (
          <React.Fragment key={index}>
            {item.title ? (
              <SmallSubtitle>{item.title}</SmallSubtitle>
            ) : (
              <Radio id={`${id}_list_item_${index}`}>
                <Description>{item.description}</Description>
              </Radio>
            )}
          </React.Fragment>
        ))}
      </List>
    </>
  );
};

StepsList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};

StepsList.defaultProps = {
  title: null,
};

export default StepsList;
