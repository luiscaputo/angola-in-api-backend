import { Request, Response } from 'express';

import LocationsUseCase from './LocationsUseCase';

export default class LocationsControllers {
  async handleProvinces(_: Request, res: Response) {
    const useCase = new LocationsUseCase();
    const result = await useCase.executeProvinces();

    return res
      .status(200)
      .json({ success: true, message: 'Angolan  Provinces', data: result });
  }
}
