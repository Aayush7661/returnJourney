import request from "supertest";
import app from "../app";
describe("Product API Endpoints", () => {
  it("get a list of products", async () => {
    const response = await request(app).get("/api/getproduct");
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toHaveLength(0);
  });

  it("create a new product", async () => {
    const newProduct = {
      name: "Testing",
      price: 100,
      description: "Hello",
    };

    const response = await request(app)
      .post("/api/postproduct")
      .send(newProduct);
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toHaveProperty("id");
    expect(response.body.data.name).toBe(newProduct.name);
    expect(response.body.data.price).toBe(newProduct.price);
    expect(response.body.data.description).toBe(newProduct.description);
  });
});
