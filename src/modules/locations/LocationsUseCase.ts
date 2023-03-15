import { PROVINCES } from '~/helpers/apis';

export default class LocationsUseCase {
  async executeProvinces() {
    return PROVINCES.map((province) => {
      return province;
    });
  }
}
