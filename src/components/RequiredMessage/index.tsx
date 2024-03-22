import { Required } from "./styles"

interface IRequiredMessageProps {
    required: boolean;
}



export const RequiredMessage: React.FC<IRequiredMessageProps> =
    ({ required }) => required && <Required>Preencha este campo</Required>





