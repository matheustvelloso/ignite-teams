import { Container, Message } from "./styles"

interface IListEmptyProps {
    message: string;
}

export const ListEmpty: React.FC<IListEmptyProps> = ({ message }) => {
    return (
        <Container>
            <Message> {message}</Message>
        </Container>
    )
}