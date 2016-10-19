module.exports = {
  up: (queryInterface, DataType) => {
    queryInterface.createTable('User', {
      id: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV1,
        primaryKey: true,
      },
      email: {
        type: DataType.STRING(255),
        validate: {isEmail: true},
      },
      emailConfirmed: {
        type: DataType.BOOLEAN,
        defaultValue: false,
      },
      created_at: {
        allowNull: false,
        type: DataType.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataType.DATE,
      },
    });

    queryInterface.createTable('UserClaim', {
      type: {
        type: DataType.STRING,
      },
      value: {
        type: DataType.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: DataType.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataType.DATE,
      },
    });

    queryInterface.createTable('UserLogin', {
      name: {
        type: DataType.STRING(50),
        primaryKey: true,
      },

      key: {
        type: DataType.STRING(100),
        primaryKey: true,
      },
      created_at: {
        allowNull: false,
        type: DataType.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataType.DATE,
      },
    });
    queryInterface.createTable('UserProfile', {
      userId: {
        type: DataType.UUID,
        primaryKey: true,
      },

      displayName: {
        type: DataType.STRING(100),
      },

      picture: {
        type: DataType.STRING(255),
      },

      gender: {
        type: DataType.STRING(50),
      },

      location: {
        type: DataType.STRING(100),
      },

      website: {
        type: DataType.STRING(255),
      },

      createdAt: {
        allowNull: false,
        type: DataType.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: DataType.DATE,
      },
    });
  },
  down: queryInterface => {
    queryInterface.dropTable('User');
    queryInterface.dropTable('UserClaim');
    queryInterface.dropTable('UserLogin');
    queryInterface.dropTable('UserProfile');
  },
};

