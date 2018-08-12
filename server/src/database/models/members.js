export default (sequelize, DataTypes) => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    image_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id_image_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    card_image_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
    }
  }
  const options = {
    tableName: 'members',
  }
  return sequelize.define('members', attributes, options)
}
