import { PROVINCES } from '~/helpers/apis';

export default class LocationsUseCase {
  async execute() {
    const provinces: any = [];
    PROVINCES.map((province) => {
      provinces.push({
        designation: province.nome,
        fundationDate: province.fundada,
        area: province.area,
        capital: province.capital,
        phoneDDDCode: province.prefixo_telefonico,
        officialGovernmentWebsite: province.site_governo_provincial,
        counties: province.municipios,
      });
    });
    return provinces;
  }
}
