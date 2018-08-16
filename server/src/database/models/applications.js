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
    partyId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'party_id',
    },
    state: {
      type: DataTypes.ENUM,
      values: ['active', 'pending', 'deletes'],
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
    tableName: 'applications',
  }
  return sequelize.define('applications', attributes, options)
}
