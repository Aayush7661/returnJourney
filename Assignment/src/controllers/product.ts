import { Request, Response } from "express";
import { Product } from "../storeData/types";
import products from "../storeData/storeData";

export const createProduct = (req: Request, res: Response) => {
  try {
    const newProduct: Product = req.body;
    if (!newProduct.name || !newProduct.price) {
      return res.status(500).json({
        statusCode: 500,
        status: "error",
        message: "proper data send in req",
      });
    }
    const product = products.find((p) => p.name === newProduct.name);
    if (product) {
      return res.status(500).json({
        statusCode: 500,
        status: "error",
        message: "product already present",
      });
    }

    newProduct.id = products.length + 1;
    products.push(newProduct);
    res.status(200).json({
      statusCode: 200,
      status: "success",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      status: "error",
      message: (error as Error).toString(),
    });
  }
};
export const getProductsList = async (req: Request, res: Response) => {
  try {
    let productList = products;
    res.status(200).json({
      statusCode: 200,
      status: "success",
      data: productList,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      status: "error",
      message: (error as Error).toString(),
    });
  }
};
export const getProductDetails = (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.productId);
    if (!productId) {
      return res.status(400).json({
        status: "error",
        statusCode: 400,
        message: "proper data not send in req",
      });
    }
    let productdetails = {};
    for (let product of products) {
      if (product.id === productId) {
        productdetails = product;
      }
    }
    res.status(200).json({
      statusCode: 200,
      status: "success",
      data: productdetails,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      status: "error",
      message: (error as Error).toString(),
    });
  }
};

export const updateProduct = (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.productId);
    const updatedProduct: Product = req.body;

    if (!productId) {
      return res.status(400).json({
        statusCode: 400,
        status: "error",
        message: "proper data not send in req",
      });
    }

    const index = products.findIndex((p) => p.id === productId);

    if (index !== -1) {
      products[index] = { ...products[index], ...updatedProduct };
      res.status(200).json({
        statusCode: 200,
        status: "success",
        data: products[index],
      });
    } else {
      res.status(400).json({
        statusCode: 400,
        status: "error",
        message: "Product not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      status: "error",
      message: (error as Error).toString(),
    });
  }
};

export const deleteProduct = (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.productId);
    if (!productId) {
      return res.status(400).json({
        statusCode: 400,
        status: "error",
        message: "proper data not send in req",
      });
    }
    const index = products.findIndex((p) => p.id === productId);

    if (index !== -1) {
      const deletedProduct = products.splice(index, 1);
      res.status(200).json({
        statusCode: 200,
        status: "success",
        data: deletedProduct,
      });
    } else {
      res.status(400).json({
        statusCode: 400,
        status: "error",
        message: "Product not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      status: "error",
      message: (error as Error).toString(),
    });
  }
};
