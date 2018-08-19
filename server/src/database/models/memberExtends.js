export default (sequelize, DataTypes) => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    memberId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'member_id',
    },
    job: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    residence: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    interest: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    channel: {
      type: DataTypes.DATE,
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
    tableName: 'member_extends',
  }
  return sequelize.define('memberExtends', attributes, options)
}
