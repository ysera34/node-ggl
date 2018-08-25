export default (sequelize, DataTypes) => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    site: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    startAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'start_at',
    },
    endAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'end_at',
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'due_date',
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    limit: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    limitMale: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'limit_male',
    },
    limitFemale: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'limit_female',
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
    tableName: 'parties',
  }
  return sequelize.define('parties', attributes, options)
}
