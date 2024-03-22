import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./styles"

interface IPlayerCard {
    name: string;
    handlePlayerRemove: () => void;
}

export const PlayerCard: React.FC<IPlayerCard> = ({ name, handlePlayerRemove }) => {
    return (

        <Container>
            <Icon
                name="person"
            />
            <Name>
                {name}
            </Name>
            <ButtonIcon
                icon="close"
                type="REMOVE"
                onPress={handlePlayerRemove}
            />
        </Container>
    )
}