export default (sequelize, DataTypes) => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM,
      values: ['active', 'pending', 'delete'],
      defaultValue: 'pending'
    },
    imagePath: {
      type: DataTypes.STRING(500),
      field: 'image_path',
    },
    idImagePath: {
      type: DataTypes.STRING(500),
      field: 'id_image_path',
    },
    cardImagePath: {
      type: DataTypes.STRING(500),
      field: 'card_image_path'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    }
  }
  const options = {
    tableName: 'members',
  }
  return sequelize.define('members', attributes, options)
}
