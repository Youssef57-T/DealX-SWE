module.exports = (sequelize, DataTypes) => {
    const PriceHistory = sequelize.define(
      'PriceHistory',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        product_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: 'Products', key: 'id' },
          validate: {
            isInt: { msg: 'Product ID must be an integer' },
          },
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
            isFloat: { msg: 'Price must be a valid number' },
            min: { args: [0.01], msg: 'Price must be greater than zero' },
          },
        },
        recorded_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        tableName: 'PriceHistory',
        timestamps: false,
      }
    );
  
    // Associations
    PriceHistory.associate = (models) => {
      PriceHistory.belongsTo(models.Product, { foreignKey: 'product_id' });
    };
  
    return PriceHistory;
  };
  