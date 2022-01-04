import { Item, Price, Stock } from "../Model/server";

const home = async (req, res) => {
  const items = await Item.findAll();
  const prices = await Price.findAll({ attributes: ["Buy", "Sell"] });
  const stocks = await Stock.findAll({ attributes: ["Goods"] });
  res.send({ items, prices, stocks });
  res.end();
};

const store = async (req, res) => {
  const { ItemName, ItemCode, ItemImage, Buy, Sell, Goods } = req.body;
  const item = await Item.create({
    ItemName,
    ItemCode,
    ItemImage,
  });
  const price = await Price.create({
    Buy,
    Sell,
    ItemId: item.ItemId,
  });
  const stock = await Stock.create({
    Goods,
    ItemId: item.ItemId,
  });
  res.sendStatus(201);
};

const edit = async (req, res) => {
  const id = req.params.id;
  const item = await Item.findAll({ where: { ItemId: id } });
  const price = await Price.findAll({
    attributes: ["Buy", "Sell"],
    where: { ItemId: id },
  });
  const stock = await Stock.findAll({
    attributes: ["Goods"],
    where: { ItemId: id },
  });
  res.send({ item, price, stock });
};

const update = async (req, res) => {
  const id = req.params.id;
  const { ItemName, ItemCode, ItemImage, Buy, Sell, Goods } = req.body;
  const item = await Item.update(
    {
      ItemName,
      ItemCode,
      ItemImage,
    },
    { where: { ItemId: id } }
  );
  const price = await Price.update(
    {
      Buy,
      Sell,
    },
    {
      where: { ItemId: id },
    }
  );
  const stock = await Stock.update(
    {
      Goods,
    },
    {
      where: { ItemId: id },
    }
  );
  res.sendStatus(200);
};

const destroy = async (req, res) => {
  const id = req.params.id;
  const item = await Item.destroy({ where: { ItemId: id } });
  const price = await Price.destroy({ where: { ItemId: id } });
  const stock = await Stock.destroy({ where: { ItemId: id } });
  res.sendStatus(200);
};

module.exports = {
  home,
  store,
  edit,
  update,
  destroy,
};
