module.exports = (sequelize, DataTypes) => {
    const PriceAlerts = sequelize.define(
      'PriceAlerts',
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
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        target_price: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
            isFloat: { msg: 'Target price must be a valid number' },
            min: { args: [0.01], msg: 'Target price must be greater than 0' },
          },
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        updated_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        tableName: 'PriceAlerts',
        timestamps: false,
      }
    );
  
    // Associations
    PriceAlerts.associate = (models) => {
      PriceAlerts.belongsTo(models.Product, { foreignKey: 'product_id' });
    };
  
    return PriceAlerts;
  };
  