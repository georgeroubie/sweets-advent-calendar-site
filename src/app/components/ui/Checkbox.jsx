import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing.xsmall};
`;

const CheckboxInput = styled.input`
  margin-right: ${({ theme: { spacing } }) => spacing.small};
  cursor: pointer;
`;

const Label = styled.label`
  cursor: pointer;
`;

const Checkbox = ({ id, children }) => {
  const [checked, setChecked] = useState(false);

  function handleOnChange(e) {
    setChecked(Boolean(e.target?.checked));
  }

  return (
    <Wrapper>
      <CheckboxInput type="checkbox" id={id} name={id} checked={checked} onChange={handleOnChange} />
      <Label htmlFor={id}>{children}</Label>
    </Wrapper>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Checkbox;
