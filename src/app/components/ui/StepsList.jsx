import PropTypes from 'prop-types';
import styled from 'styled-components';
import SmallSubtitle from '../typography/SmallSubtitle';
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

const Description = styled.span``;

const StepsList = ({ id, title, list }) => {
  return (
    <>
      {title && <Subtitle>{title}</Subtitle>}
      <List>
        {list.map(({ subtitle, description }, index) => (
          <Radio key={index} id={`${id}_list_item_${index}`}>
            {subtitle && <SmallSubtitle>{subtitle}</SmallSubtitle>}
            <Description>{description}</Description>
          </Radio>
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
      subtitle: PropTypes.string,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

StepsList.defaultProps = {
  title: null,
};

export default StepsList;
