import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { ButtonIconTypeStyleProps, Container, Icon } from "./styles"

type IButtonIconProps = TouchableOpacityProps & {
    type?: ButtonIconTypeStyleProps;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export const ButtonIcon: React.FC<IButtonIconProps> = ({ icon, type = 'CREATE', ...rest }) => {
    return (
        <Container
            type={type}
            {...rest}
        >
            <Icon
                name={icon}
                type={type}
            />
        </Container>
    )
}