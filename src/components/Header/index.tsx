import { useNavigation } from "@react-navigation/native"
import { Container, Logo, BackButton, BackIcon } from "./styles"
import LogoImg from "@assets/logo.png"
import { useCallback } from "react"

interface IHeaderProps {
    showBackButton?: boolean
}

export const Header: React.FC<IHeaderProps> = ({ showBackButton = false }) => {
    const { navigate } = useNavigation()

    const handleHomeScreen = useCallback(() => {
        navigate('Groups')
    }, [])

    return (
        <Container>
            {showBackButton &&
                <BackButton onPress={handleHomeScreen}>
                    <BackIcon color="#fff" size={32} />
                </BackButton>
            }
            <Logo source={LogoImg} />
        </Container>
    )
}