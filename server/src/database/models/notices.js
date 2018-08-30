export default (sequelize, DataTypes) => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: 'normal',
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descriptions: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
  }
  const options = {
    tableName: 'notices',
    comment: 'notices info',
  }
  return sequelize.define('notices', attributes, options)
}
