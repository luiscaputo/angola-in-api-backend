export default {
  get: {
    tags: ['Locations'],
    description: 'Provinces',
    operationId: 'AllProvinces',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                },
                data: {
                  type: 'array',
                  $ref: '#/components/schemas/Provinces',
                  null: true,
                },
                message: {
                  type: 'string',
                  null: true,
                },
              },
            },
          },
        },
      },
      400: {
        description: 'Bad Request',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  example: false,
                },
                message: {
                  type: 'string',
                  null: true,
                },
              },
            },
          },
        },
      },
      500: {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  example: false,
                },
                message: {
                  type: 'string',
                  null: true,
                },
              },
            },
          },
        },
      },
    },
  },
};
