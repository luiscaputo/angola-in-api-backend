import { AppErrors } from '~/shared/errors/errors';
import axios from 'axios';

interface IIdentificationProps {
  identificationNumver: string;
}
enum messages {
  invalidIdentificationNumber = 'Bilhete de Identidade Inválido',
  invalidIndentificationNmberFormat = 'Formato de Bilhete de Identidade não reconhecido',
}

export default class IdentificationUseCase {
  async execute({ identificationNumver }: IIdentificationProps) {
    if (!identificationNumver || identificationNumver.length !== 14) {
      throw new AppErrors(messages.invalidIndentificationNmberFormat, 400);
    }
    const formatIdentificationNumber = identificationNumver.toUpperCase();

    const raw = await axios.get(
      `${process.env.SEPE}${formatIdentificationNumber}`
    );

    if (raw.status !== 200) {
      throw new AppErrors(messages.invalidIdentificationNumber, 400);
    }

    const person: any = [];

    person.push({
      NIF: raw.data.data.nif,
      CompleteName: raw.data.data.nome,
      Fathers: {
        FatherName: raw.data.data.pai_nome_completo,
        MotherName: raw.data.data.mae_nome_completo,
      },
      Birth: {
        naturality: raw.data.data.naturalidade,
        birthDate: raw.data.data.data_nasc,
        gender: raw.data.data.genero,
        civilStatus: raw.data.data.estado_civil,
      },
      socialEmission: raw.data.data.emissao_local,
      dateEmission: raw.data.data.data_emissao,
    });

    return person;
  }
}
