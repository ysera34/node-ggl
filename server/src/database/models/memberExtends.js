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
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    residence: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    interest: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    channel: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at',
      defaultValue: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
    }
  }
  const options = {
    tableName: 'member_extends',
  }
  return sequelize.define('memberExtends', attributes, options)
}
