'use strict';
module.exports = (sequelize, DataTypes) => {
  var Reserva = sequelize.define('Reserva', {
    fecha_inicio_reserva: {
        type: DataTypes.DATE, //YYYY-DD-MM HH:MM:SS
        allowNull: false
    }
    fecha_fin_reserva: {
      type: DataTypes.DATE, //YYYY-DD-MM HH:MM:SS
      defaultValue: null
    }
    estado: { //Esto no debe ingresarse, solo puede ser cambiado si es necesario
      type: DataTypes.BOOLEAN, //TRUE = Mesa está efectivamente tomada
      defaultValue: true
   }

  });

  Reserva.associate = (models) => {
        Reserva.belongsTo(Usuario) //Cada reserva se asocia a un usuario
        Reserva.belongsTo(Mesa) //Pero también a una mesa
    };
  return Reserva;
};