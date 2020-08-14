module.exports = function (sequelize, DataTypes) {
  const Restaurant = sequelize.define("Restaurant", {
    yelpId: {
      type: DataTypes.STRING,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address1: {
      type: DataTypes.STRING,
    },
    address2: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    reviewCount: {
      type: DataTypes.INTEGER,
      default: 0,
    },
  });
  Restaurant.associate = function (models) {
    // Associating restaurants with Posts
    // When a restaurant is deleted, also delete any associated Posts
    Restaurant.hasMany(models.Post, {
      onDelete: "cascade",
    });
  };
  return Restaurant;
};
