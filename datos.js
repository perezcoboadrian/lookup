db.articulos.drop()
db.articulos.insertMany([
    {cod: "001", nombre:'Pcs', precio: 100, cantidad: 2200},
    {cod: "002", nombre:'Portatiles', precio: 200, cantidad: 2000},
    {cod: "003", nombre:'Movil', precio: 80, cantidad: 2501},
    {cod: "004", nombre:'Tablet', precio: 85, cantidad: 2212}
])

db.ventas.drop()
db.ventas.insertMany([
    {cod: 'abc001', fecha: new Date("2020-02-20"), cliente: "Mediamark", detalle: {cod: "004", cantidad:200}},
    {cod: 'abc002', fecha: new Date("2020-02-20"), cliente: "Mediamark", detalle: {cod: "003", cantidad:100}},
    {cod: 'abc004', fecha: new Date("2020-02-21"), cliente: "ElCorteIngles", detalle: {cod: "001", cantidad:1000}},
    {cod: 'abc005', fecha: new Date("2020-02-21"), cliente: "ElCorteIngles", detalle: {cod: "002", cantidad:500}},
    {cod: 'abc006', fecha: new Date("2020-02-21"), cliente: "Mediamark", detalle: {cod: "004", cantidad:200}},
    {cod: 'abc007', fecha: new Date("2020-02-21"), cliente: "Mediamark", detalle: {cod: "002", cantidad:300}},
    {cod: 'abc008', fecha: new Date("2020-02-22"), cliente: "ElCorteIngles", detalle: {cod: "004", cantidad:200}},
    {cod: 'abc009', fecha: new Date("2020-02-22"), cliente: "Fnac", detalle: {cod: "003", cantidad:500}},
    {cod: 'abc010', fecha: new Date("2020-02-22"), cliente: "Fnac", detalle: {cod: "004", cantidad:100}},
    {cod: 'abc011', fecha: new Date("2020-02-22"), cliente: "Mediamark", detalle: {cod: "001", cantidad:200}},
    {cod: 'abc012', fecha: new Date("2020-02-22"), cliente: "ElCorteIngles", detalle: {cod: "002", cantidad:250}},
    {cod: 'abc013', fecha: new Date("2020-02-22"), cliente: "Fnac", detalle: {cod: "003", cantidad:100}},
])