import { DataType } from 'sequelize';

export default define('member_extends', {
  id: {
    type: DataType.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  member_id: {
    type: DataType.INTEGER(11),
    allowNull: false,
  },
  job: {
    type: DataType.STRING(255),
    allowNull: false,
  },
  residence: {
    type: DataType.STRING(255),
    allowNull: false,
  },
  interest: {
    type: DataType.STRING(255),
    allowNull: false,
  },
  channel: {
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
  tableName: 'member_extends',
});
