import axios from 'axios';

export const GetBBIInformation = async (bi: string) => {
  const raw = await axios.get(`${process.env.SEPE}${bi}`);
  return raw;
};

export const GetNIFInformation = async (nif: number) => {
  const raw = await axios.get(`${process.env.NIF}${nif}`);
  return raw;
};

export const PROVINCES = [
  {
    designation: 'Luanda',
  },
  {
    designation: 'Benguela',
  },
  {
    designation: 'Huíla',
  },
  {
    designation: 'Huambo',
  },
  {
    designation: 'Bengo',
  },
  {
    designation: 'Kwanza Norte',
  },
  {
    designation: 'Kwanza Sul',
  },
  {
    designation: 'Cabinda',
  },
  {
    designation: 'Uíge',
  },
  {
    designation: 'Zaire',
  },
  {
    designation: 'Bié',
  },
  {
    designation: 'Moxico',
  },
  {
    designation: 'Lunda Norte',
  },
  {
    designation: 'Lunda Sul',
  },
  {
    designation: 'Malanje',
  },
  {
    designation: 'Cunene',
  },
  {
    designation: 'Namibe',
  },
];
