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
      values: ['active', 'pending', 'cancel'],
      defaultValue: 'pending'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at',
    }
  }
  const options = {
    tableName: 'registrations',
  }
  return sequelize.define('registrations', attributes, options)
}
