# Filtros combinados

La idea principal radica en crear un diccionario tipo cláusula para luego aplicar en la condición (cláusula) WHERE en la búsqueda
```js
const whereClause = {};
  if (name) {
    whereClause.name = {
      [Op.iLike]: `%${name}%`
    };
  }
  if (price) {
    whereClause.price = {
      [Op.gte]: price
    };
  }
  if (available) {
    whereClause.available = available 
  }
```

El código completo sería algo así:
```js
const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const Product = require('../models/product');

router.get('/products', async (req, res) => {
  const { name, price, available } = req.query;

  const whereClause = {};
  if (name) {
    whereClause.name = {
      [Op.iLike]: `%${name}%`
    };
  }
  if (price) {
    whereClause.price = {
      [Op.gte]: price 
      //  el operador Op.gte es una abreviatura de "Greater Than or Equal" (Mayor o igual)
    };
  }
  if (available) {
    whereClause.available = available === 'true' ? true : false;
    // esta manera de asignar el boolean es para checkear que desde el front realmente
    // nos pasan para este param un booleano
  }

  const products = await Product.findAll({
    where: whereClause
  });

  res.json(products);
});

module.exports = router;
```


*** availble es disponibilidad y puede ir directamente como: 
```js
whereClause.availble = availble
```