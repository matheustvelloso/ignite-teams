import { TextInput, TextInputProps, View } from "react-native"
import { Container } from "./styles"

type IInputProps = TextInputProps & {
    inputRef?: React.RefObject<TextInput>
}


export const Input: React.FC<IInputProps> = ({ inputRef, ...rest }) => {
    return (
        <Container
            ref={inputRef}
            {...rest}
        />
    )
}