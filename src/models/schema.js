export const schema = {
  models: {
    Gallery: {
      name: 'Gallery',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: []
        },
        image: {
          name: 'image',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: []
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        }
      },
      syncable: true,
      pluralName: 'Galleries',
      attributes: [
        {
          type: 'model',
          properties: {}
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read']
              }
            ]
          }
        }
      ]
    },
    Registration: {
      name: 'Registration',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: []
        },
        total_cost: {
          name: 'total_cost',
          isArray: false,
          type: 'Float',
          isRequired: false,
          attributes: []
        },
        userinfoID: {
          name: 'userinfoID',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: []
        },
        Package: {
          name: 'Package',
          isArray: false,
          type: {
            model: 'Package'
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: 'HAS_ONE',
            associatedWith: ['id'],
            targetNames: ['registrationPackageId']
          }
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        },
        registrationPackageId: {
          name: 'registrationPackageId',
          isArray: false,
          type: 'ID',
          isRequired: false,
          attributes: []
        }
      },
      syncable: true,
      pluralName: 'Registrations',
      attributes: [
        {
          type: 'model',
          properties: {}
        },
        {
          type: 'key',
          properties: {
            name: 'byUserInfo',
            fields: ['userinfoID']
          }
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read']
              }
            ]
          }
        }
      ]
    },
    Review: {
      name: 'Review',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: []
        },
        name: {
          name: 'name',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: []
        },
        email: {
          name: 'email',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: []
        },
        review: {
          name: 'review',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: []
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        }
      },
      syncable: true,
      pluralName: 'Reviews',
      attributes: [
        {
          type: 'model',
          properties: {}
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read']
              }
            ]
          }
        }
      ]
    },
    Package: {
      name: 'Package',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: []
        },
        name: {
          name: 'name',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: []
        },
        contact: {
          name: 'contact',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: []
        },
        description: {
          name: 'description',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: []
        },
        location: {
          name: 'location',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: []
        },
        cost: {
          name: 'cost',
          isArray: false,
          type: 'Float',
          isRequired: true,
          attributes: []
        },
        image: {
          name: 'image',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: []
        },
        details_file: {
          name: 'details_file',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: []
        },
        is_premium_flag: {
          name: 'is_premium_flag',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: []
        },
        video_link: {
          name: 'video_link',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: []
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        }
      },
      syncable: true,
      pluralName: 'Packages',
      attributes: [
        {
          type: 'model',
          properties: {}
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['read']
              },
              {
                allow: 'private',
                operations: ['read']
              },
              {
                groupClaim: 'cognito:groups',
                provider: 'userPools',
                allow: 'groups',
                groups: ['ap-south-1_GnEmuWInD_Google'],
                operations: ['read']
              },
              {
                groupClaim: 'cognito:groups',
                provider: 'userPools',
                allow: 'groups',
                groups: ['admin'],
                operations: ['read', 'create', 'update', 'delete']
              }
            ]
          }
        }
      ]
    },
    UserInfo: {
      name: 'UserInfo',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: []
        },
        dob: {
          name: 'dob',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: []
        },
        phone_number: {
          name: 'phone_number',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: []
        },
        primary_phone: {
          name: 'primary_phone',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: []
        },
        secondary_phone: {
          name: 'secondary_phone',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: []
        },
        email: {
          name: 'email',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: []
        },
        Registrations: {
          name: 'Registrations',
          isArray: true,
          type: {
            model: 'Registration'
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: 'HAS_MANY',
            associatedWith: ['userinfoID']
          }
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true
        }
      },
      syncable: true,
      pluralName: 'UserInfos',
      attributes: [
        {
          type: 'model',
          properties: {}
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['read']
              },
              {
                allow: 'private',
                operations: ['create', 'update', 'delete', 'read']
              },
              {
                groupClaim: 'cognito:groups',
                provider: 'userPools',
                allow: 'groups',
                groups: ['ap-south-1_GnEmuWInD_Google'],
                operations: ['read', 'create', 'update', 'delete']
              }
            ]
          }
        }
      ]
    }
  },
  enums: {},
  nonModels: {},
  codegenVersion: '3.4.2',
  version: 'd895e45e6a136a74509e028d7ea5feb1'
}
