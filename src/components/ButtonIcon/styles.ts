import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import styled from "styled-components/native";

export type ButtonIconTypeStyleProps = 'CREATE' | 'REMOVE';

type Props = {
    type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

    margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === 'CREATE' ? theme.colors.green_700 : theme.colors.red,
}))``;