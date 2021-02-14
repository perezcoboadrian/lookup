
// Unión de ventas y articulos.
db.ventas.aggregate(
    [
        {
            $lookup: {
                from: "articulos",
                localField: "ventas.cod",
                foreignField: "cod",
                as: "articulos"
            }
        }
    ]
).pretty()

// Proyectar una venta, con su Cliente, codigo de compra, mes, año y día de la compra, 
db.ventas.aggregate(
    [
        {
            $lookup: {
                from: "articulos",
                localField: "ventas.cod",
                foreignField: "cod",
                as: "articulos"
            }
        },
        {
            $project: {
                _id:0,
                codigoCompra: "$cod",
                dia: {$dayOfMonth: "$fecha"},
                month: { $month: "$fecha" },
                ano: { $year: "$fecha" },
                cliente: 1,
                codigoArticulo: "$ventas.cod",
                nombreArticulo: "$nombre",
                precioArticulo: {$arrayElemAt: ["$articulos.precio", 0]},            }
        }
    ]
).pretty()