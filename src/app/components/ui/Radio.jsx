import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing.normal};
  z-index: 1;
  position: relative;
`;

const CheckboxInput = styled.input`
  margin-right: ${({ theme: { spacing } }) => spacing.normal};
  cursor: pointer;
  accent-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  width: ${({ theme: { fontSize } }) => fontSize.xlarge};
  height: ${({ theme: { fontSize } }) => fontSize.xlarge};
  flex-shrink: 0;
`;

const Label = styled.label`
  cursor: pointer;
`;

const Radio = ({ id, children }) => {
  const [checked, setChecked] = useState(false);

  function handleOnChange(e) {
    setChecked(Boolean(e.target?.checked));
  }

  return (
    <Wrapper>
      <CheckboxInput type="radio" id={id} name={id} checked={checked} onChange={handleOnChange} />
      <Label htmlFor={id}>{children}</Label>
    </Wrapper>
  );
};

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Radio;
