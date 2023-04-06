export default {
  components: {
    schemas: {
      Identification: {
        type: 'object',
        properties: {
          NIF: { type: 'string' },
          CompleteName: { type: 'string' },
          Fathers: { type: 'array' },
          Birth: { type: 'array' },
          socialEmission: { type: 'string' },
          dateEmission: { type: 'string' },
        },
      },
      Collective: {
        type: 'object',
        properties: {
          NIF: { type: 'string' },
          CompanyName: { type: 'string' },
        },
      },
      Provinces: {
        type: 'object',
        properties: {
          designation: { type: 'string' },
          foundationDate: { type: 'string' },
          area: { type: 'string' },
          capital: { type: 'string' },
          phoneDDDCode: { type: 'string' },
          officialGovernmentWebsite: { type: 'string' },
          counties: { type: 'array' },
        },
      },
      Banks: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          code: { type: 'string' },
          fullName: { type: 'string' },
          central: { type: 'string' },
          isPrivate: { type: 'boolean' },
        },
      },
      ExchangeCurrency: {
        type: 'object',
        properties: {
          AOA: { type: 'string' },
          EUR: { type: 'string' },
          USD: { type: 'string' },
          UAN: { type: 'string' },
          BRL: { type: 'string' },
        },
      },
      PhoneNumbers: {
        type: 'object',
        properties: {
          type: { type: 'string' },
          ddd: { type: 'string' },
          operator: { type: 'string' },
          operatorWebSite: { type: 'string' },
        },
      },
      SuperMarkets: {
        type: 'object',
        properties: {
          designation: { type: 'string' },
          tupology: { type: 'string' },
          details: { type: 'string' },
          rllt__details1: { type: 'string' },
          rllt__details2: { type: 'string' },
          image: { type: 'string' },
          Thumbnail: { type: 'string' },
        },
      },
    },
  },
};
