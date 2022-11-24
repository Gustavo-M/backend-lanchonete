const router = require("express").Router()

const ClientsController = require("../controllers/clients")
const ProductsController = require("../controllers/products")
const RequestsController = require("../controllers/requests")

router.get("/clientes/:id?", ClientsController.get)
router.post("/clientes", ClientsController.post)
router.put("/clientes/:id", ClientsController.put)
router.delete("/clientes/:id", ClientsController.remove)

router.get("/produtos/:id?", ProductsController.get)
router.post("/produtos", ProductsController.post)
router.put("/produtos/:id", ProductsController.put)
router.delete("/produtos/:id", ProductsController.remove)

router.get("/pedidos/:id?", RequestsController.get)
router.post("/pedidos", RequestsController.post)
router.put("/pedidos/:id", RequestsController.put)
router.delete("/pedidos/:id", RequestsController.remove)

module.exports = router