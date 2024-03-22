import { TouchableOpacityProps } from 'react-native'

import { ButtonTypeStyleProps, Container, Title } from "./styles"

type IButtonProps = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps
}


export const Button: React.FC<IButtonProps> = ({ title, type = 'CREATE', ...rest }) => {
    return (
        <Container
            type={type}
            {...rest}
        >
            <Title>
                {title}
            </Title>
        </Container>
    )
}