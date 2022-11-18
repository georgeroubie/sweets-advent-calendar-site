import React from 'react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckboxInput = styled.input`
  margin-right: ${({ theme: { spacing } }) => spacing.small};
  cursor: pointer;
`;

const Label = styled.label`
  cursor: pointer;
`;

const Checkbox = () => {
  return (
    <Wrapper>
      <Checkbox type="checkbox" id={id} name={id} checked={theme === DARK_THEME_KEY} onChange={handleOnChange} />
      <Label htmlFor={id}>Dark theme</Label>
    </Wrapper>
  );
};

export default Checkbox;
