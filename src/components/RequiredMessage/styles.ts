import styled, { css } from "styled-components/native";


export const Required = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.red};
        font-family: ${theme.fontFamily.bold};
        font-size: ${theme.fontSize.md}px;
    `}
    
    margin-top: 2px;
`;