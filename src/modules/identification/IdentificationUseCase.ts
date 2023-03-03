import axios from 'axios'

interface IIdentificationProps {
    identificationNumver: string;
}

export default class IdentificationUseCase {
    async execute({ identificationNumver }: IIdentificationProps) {
        const formatIdentificationNumber = identificationNumver.toUpperCase();
        const raw = await axios.get(`${process.env.SEPE}${formatIdentificationNumber}`);
        return raw;
    }
}