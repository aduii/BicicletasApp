var Bicicleta = require('../../models/bicicleta');

exports.bicicleta_list = (req, res) => {
  res.status(200).json({
    bicicletas: Bicicleta.allBicis,
  });
};

exports.bicicleta_create = (req, res) => {
  var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
  bici.ubicacion = [req.body.lat, req.body.lng];

  Bicicleta.add(bici);
  res.status(200).json({
    bicicleta: bici,
  });
};

exports.bicicleta_update = (req, res) => {
  var bici = Bicicleta.findById(req.body.id);
  bici.id = req.body.id;
  bici.color = req.body.color;
  bici.modelo = req.body.modelo;
  bici.ubicacion = [req.body.lat, req.body.lng];
  res.status(203).json({
    bicicletaUpdate: bici,
  });
};

exports.bicicleta_delete = (req, res) => {
  Bicicleta.removeById(req.body.id);
  res.status(204).send();
};
