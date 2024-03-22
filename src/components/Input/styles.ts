import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput).attrs(({ theme }) => ({
    placeholderTextColor: theme.colors.gray_300,
}))`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    ${({ theme }) => css`
        background-color: ${theme.colors.gray_700};
        color: ${theme.colors.white};

        font-family: ${theme.fontFamily.regular};
        font-size: ${theme.fontSize.md}px;
    `}

    
    border-radius:6px;
    padding: 16px;
`;