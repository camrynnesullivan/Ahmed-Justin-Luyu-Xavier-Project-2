module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define("Post", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    restaurantId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Post;
};
