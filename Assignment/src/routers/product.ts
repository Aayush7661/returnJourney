import express from "express";
import  {
    createProduct,
    getProductsList,
    getProductDetails,
    updateProduct,
    deleteProduct,
} from '../controllers/product'

const router = express.Router();

router.route("/product").post(createProduct);
router.route("/product").get(getProductsList);
router.route("/product/:productId").get(getProductDetails);
router.route("/product/:productId").patch(updateProduct);
router.route("/product/:productId").delete(deleteProduct);

export default router;
