import { DataType } from 'sequelize';

export default define('members', {
  id: {
    type: DataType.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataType.STRING(64),
    allowNull: false,
  },
  name: {
    type: DataType.STRING(64),
    allowNull: false,
  },
  gender: {
    type: DataType.STRING(64),
    allowNull: false,
  },
  phone: {
    type: DataType.STRING(64),
    allowNull: false,
  },
  birth: {
    type: DataType.DATE,
    allowNull: false,
  },
  image_path: {
    type: DataType.STRING(255),
    allowNull: false,
  },
  id_image_path: {
    type: DataType.STRING(255),
    allowNull: false,
  },
  card_image_path: {
    type: DataType.STRING(255),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  tableName: 'members',
});
