import { Container, Title, Subtitle } from "./styles"

interface IHighlightProps {
    title: string;
    subtitle: string;
}

export const Highlight: React.FC<IHighlightProps> = ({ title, subtitle }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}