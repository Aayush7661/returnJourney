API Documentation.
first create tsc config file using command : tsc.cmd --watch
in tscConfig file give root directory and distination directory details.
convert ts code in js formate than start js server using command node app.js and nodemon app.js
List of Available Endpoints:

1. post /api/product: add a new product.
   Request method and url: post http://localhost:4980/api/product
   Request Data : name, price, description send in body.
   Response data: {
   "statusCode": 200,
   "status": "success",
   "message": "product add successfully"
   }

2. get /api/product: get all product details list.
   Request method and url: get http://localhost:4980/api/product
   Request Data : --.
   Response data:
   {
        "statusCode": 200,
        "status": "success",
        "data": [
            {
                "name": "car",
                "price": 200,
                "description": "Hello",
                "id": 2
            }
        ]
    }

3. get /api/product/:productId: get product details.
   Request method and url: get http://localhost:4980/api/product/2
   Request Data : productId in req params.
   Response data:
   {
        "statusCode": 200,
        "status": "success",
        "data": [
            {
                "name": "car",
                "price": 200,
                "description": "Hello",
                "id": 2
            }
        ]
    }

4. patch /api/product/productId: update product details.
   Request method and url: get http://localhost:4980/api/product/2
   Request Data : productId in req params and update details send in body.
   Response data:
   {
        "statusCode": 200,
        "status": "success",
        "data": [
            {
                "name": "bike",
                "price": 200,
                "description": "Hello",
                "id": 2
            }
        ]
    }

5. delete /api/product/productId: delete product details.
   Request method and url: get http://localhost:4980/api/product/2
   Request Data : productId in req params.
   Response data:
   {
        "statusCode": 200,
        "status": "success",
        "data": [
            {
                "name": "bike",
                "price": 200,
                "description": "Hello",
                "id": 2
            }
        ]
    }    
