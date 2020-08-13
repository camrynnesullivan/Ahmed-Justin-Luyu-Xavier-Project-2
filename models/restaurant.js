module.exports = function(sequelize, DataTypes) {
  const Restaurant = sequelize.define("Restaurant", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    reviewCount: DataTypes.INTEGER
  });
  Restaurant.associate = function(models) {
    // Associating restaurants with Posts
    // When a restaurant is deleted, also delete any associated Posts
    Restaurant.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
  return Restaurant;
};
