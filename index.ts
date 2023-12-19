import sequelize from "./config/database"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import path from "path"
import authRoutes from "./routes/auth"
import blogRoutes from "./routes/blogs"
import tagRoutes from "./routes/tags"
import fileRoutes from "./routes/file"

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/tempFiles", express.static(path.join(__dirname, "tempFiles")));

app.use("/auth", authRoutes);
app.use("/blogs", blogRoutes);
app.use("/tags", tagRoutes);
app.use("/upload", fileRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((error: any) => {
    console.error("Error syncing database:", error);
  });

const port = process.env.PORT || 6666;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});