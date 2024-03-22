import { TouchableOpacityProps } from "react-native"
import { FilterStyleProps, Container, Title } from "./styles"

type IFilterProps = TouchableOpacityProps & FilterStyleProps & {
    title?: string;
}

export const Filter: React.FC<IFilterProps> = ({ title, isActive = false, ...rest }) => {
    return (
        <Container
            isActive={isActive}
            {...rest}
        >
            <Title>
                {title}
            </Title>
        </Container>
    )
}