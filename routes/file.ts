const fileExpress = require("express");
const fileRouter = fileExpress.Router();
const fileController = require("../service/fileService");

// 目前只有一个上传文件接口
fileRouter.post("/file", fileController.uploadFile);

module.exports = fileRouter;