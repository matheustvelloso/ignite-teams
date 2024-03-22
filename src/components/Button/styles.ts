import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'CREATE' | 'REMOVE'

type Props = {
    type: ButtonTypeStyleProps;
}


export const Container = styled(TouchableOpacity) <Props>`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({ theme, type }) => type === 'CREATE' ? theme.colors.green_700 : theme.colors.red_dark};

    border-radius: 6px;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fontSize.md}px;
        font-family: ${theme.fontFamily.bold};
        color: ${theme.colors.white};
    `}   
`;