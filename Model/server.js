import db from "../resources/database";
import { DataTypes } from "sequelize";

const Item = db.define(
  "items",
  {
    ItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ItemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ItemCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ItemImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

const Price = db.define(
  "prices",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    Buy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Sell: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

const Stock = db.define(
  "stocks",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    Goods: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ItemId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);
Price.belongsTo(Item, {
  foreignKey: "ItemId",
  onDelete: "cascade",
  onUpdate: "cascade",
});

Stock.belongsTo(Item, {
  foreignKey: "ItemId",
  onUpdate: "cascade",
  onDelete: "cascade",
});

db.sync({ logging: false });

module.exports = {
  Item,
  Price,
  Stock,
};
