import fileExpress from "express"
import fileController from "../service/fileService"
const fileRouter = fileExpress.Router();

// 目前只有一个上传文件接口
fileRouter.post("/file", fileController.uploadFile);

export default fileRouter;