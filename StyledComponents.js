// StyledComponents.js

import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  //   border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 250px;
  width: 40vw;
`;

export const StyledField = styled.div`
  margin-bottom: 10px;

  label {
    display: block;
    font-weight: 500;
  }

  input,
  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const StyledButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #0062cc;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 50px;
  margin-right: 20px;
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
`;

export const StyledFooter = styled.footer`
  background: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  justify-content: center;
`;
