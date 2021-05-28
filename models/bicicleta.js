var Bicicleta = function (id, color, modelo, ubicacion) {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.ubicacion = ubicacion;
};

Bicicleta.prototype.toString = () => {
  `id:  ${this.id} | color: ${this.color}`;
};

Bicicleta.allBicis = [];

Bicicleta.add = (aBici) => {
  Bicicleta.allBicis.push(aBici);
};

Bicicleta.findById = (biciId) => {
  var abici = Bicicleta.allBicis.find((x) => x.id == biciId);
  if (abici) {
    return abici;
  } else {
    throw new Error(`No existe una bicicleta con el id ${biciId}`);
  }
};

Bicicleta.removeById = (biciId) => {
  // var bici = Bicicleta.findById(biciId);
  for (let i = 0; i < Bicicleta.allBicis.length; i++) {
    if (Bicicleta.allBicis[i].id == biciId) {
      Bicicleta.allBicis.splice(i, 1);
      break;
    }
  }
};

var a = new Bicicleta(1, 'rojo', 'urbana', [-11.4874328, -77.2325403]);
var b = new Bicicleta(2, 'blanca', 'urbana', [-11.498627, -77.202863]);

Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;
