const blobExpress = require('express');
const blobRouter = blobExpress.Router();
const blogController = require('../service/blogService');

// 创建博客
blobRouter.post('/create', blogController.createBlog);
// 查询博客列表
blobRouter.get('/query', blogController.getBlogList);
// 根据 id 查询博客详情
blobRouter.get('/query/:id', blogController.getBlogById);
// 根据 id 修改博客
blobRouter.patch('/update/:id', blogController.updateBlog);
// 根据 id 删除博客
blobRouter.delete('/delete/:id', blogController.deleteBlog);

module.exports = blobRouter;