import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const port = 3003;
app.use(express.json());
app.use(cors());
const { Schema } = mongoose;
const restSchema = new Schema({
  image: String,
  title: String,
  detail: String,
  price: Number,
});
const MenuModel = mongoose.model("newMenu", restSchema);

app.get("/", async (req, res) => {
  try {
    const menu = await MenuModel.find({});
    res.send(menu);
  } catch (error) {
    res.send(error.message);
  }
});
app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await MenuModel.findById(id);
    res.send(menu);
  } catch (error) {
    res.send(error.message);
  }
});
app.post("/", async (req, res) => {
  try {
    const { image, title, detail, price } = req.body;
    const newMenu = new MenuModel({ image, title, detail, price });
    await newMenu.save();
    res.send("Got a POST request");
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await MenuModel.findByIdAndDelete(id);
    res.send("Got a DELETE request at /user");
  } catch (error) {
    res.send(error.message);
  }
});
mongoose
  .connect("mongodb+srv://samir:samir@cluster0.ywgcy8n.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connect!"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
