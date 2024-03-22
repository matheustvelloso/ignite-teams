import styled, { css } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin: 32px 0;
`

export const Title = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        font-size: ${theme.fontSize.xl}px;
        font-family: ${theme.fontFamily.bold};
        color: ${theme.colors.white};
    `};
       
`;

export const Subtitle = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        font-size: ${theme.fontSize.md}px;
        font-family: ${theme.fontFamily.regular};
        color: ${theme.colors.gray_300};
    `};

`;