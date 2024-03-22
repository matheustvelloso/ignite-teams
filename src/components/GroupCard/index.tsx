import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Title } from "./styles"

type IGroupCardProps = TouchableOpacityProps & {
    title: string;
}

export const GroupCard: React.FC<IGroupCardProps> = ({ title, ...rest }) => {
    return (
        <Container {...rest}>
            <Icon />
            <Title>{title}</Title>
        </Container>
    )
}