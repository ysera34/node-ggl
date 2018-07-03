import { DataType } from 'sequelize';

export default define('users', {
  id: {
    type: DataType.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {

  },
  name: {

  },
  gender: {

  },
  phone: {

  },
  birth: {

  },
  image_path: {

  },
  id_image_path: {

  },
  card_image_path: {

  },
  created_at: {

  },
  updated_at: {

  }
}, {
  tableName: 'users',
});
