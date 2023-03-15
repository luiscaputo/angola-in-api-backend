import { GetNIFInformation } from '~/helpers/apis';
import { AppErrors } from '~/shared/errors/errors';

interface ICompanyIdentification {
  nif: number;
}

enum messages {
  invalidNifFormat = 'Formato de Número de Identificação Fiscal Inválido',
  nifNotFound = 'Número de Identificação Fiscal não encontrado',
}

export class CompanyValidationUseCase {
  async execute({ nif }: ICompanyIdentification) {
    if (!nif) {
      throw new AppErrors(messages.invalidNifFormat);
    }
    const raw = await GetNIFInformation(nif);

    if (raw.status !== 200) {
      throw new AppErrors(messages.nifNotFound, 400);
    }

    console.log(raw.data);

    const company: any = [];

    company.push({
      nif: raw.data.data.numero,
      designation: raw.data.data.nome,
    });

    return company;
  }
}
