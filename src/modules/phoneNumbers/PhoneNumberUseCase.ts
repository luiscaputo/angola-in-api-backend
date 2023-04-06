import { AppErrors } from "~/shared/errors/errors";

type IPhoneNumberProps = {
    phoneNumber: string
}

enum errorsMessage {
    invalidPhoneNumber = 'Número de Telefone INválido',
    invalidAngolanPhoneNumber = 'Número Inválido em Angola',

}

export class PhoneNumberUseCase {
    async execute({ phoneNumber }: IPhoneNumberProps) {
        if(phoneNumber === ""){
            throw new AppErrors(errorsMessage.invalidPhoneNumber, 400);
        }

        const phoneNumberLength = phoneNumber.length;

        if (!phoneNumber.match(/^[0-9]*$/)) {
            throw new AppErrors(errorsMessage.invalidAngolanPhoneNumber, 400);
        }

        if (phoneNumberLength < 9 || phoneNumberLength > 9) {
            throw new AppErrors(errorsMessage.invalidAngolanPhoneNumber, 400);
        }
        const firstDigit = phoneNumber.substring(0, 1);

        if (firstDigit !== '9') {
            throw new AppErrors(errorsMessage.invalidPhoneNumber, 400);
        }
        const secondDigit = phoneNumber.substring(1, 2);

        if(secondDigit === '2' || secondDigit === '3' || secondDigit === '4' ){
            return {
                type: 'Valid',
                ddd: '+244',
                operator: 'Unitel SA',
                operatorWebSite: 'https://www.unitel.ao/'
            }
        } 
        else if(secondDigit === '1' || secondDigit === '9'){
            return {
                type: 'Valid',
                ddd: '+244',
                operator: 'Movicel SA',
                operatorWebSite: 'https://movicel.co.ao/'
            }
        }
        else if(secondDigit === '5'){
            return {
                type: 'Valid',
                ddd: '+244',
                operator: 'Africell SA',
                operatorWebSite: 'https://africell.ao/por'
            }
        }else
        throw new AppErrors(errorsMessage.invalidPhoneNumber, 400);
    }
}