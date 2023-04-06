export default {
    get: {
      tags: ['PhoneNumbers'],
      description: 'Validate Angolan Phone Number',
      operationId: 'get',
      parameters: [
        {
          name: 'phoneNumber',
          in: 'params',
          required: true,
          schema: {
            type: 'string',
            description: 'Your phone number',
            example: '924242529',
          },
        },
      ],
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
                    type: 'object',
                    $ref: '#/components/schemas/PhoneNumbers',
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
  