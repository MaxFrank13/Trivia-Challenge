const User = require('./User');
const Role = require('./Role');

User.hasOne(Role, {
  foreignKey: 'role_id',
  onDelete: 'CASCADE'
});

Role.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Role };
