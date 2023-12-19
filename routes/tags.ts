const tagExpress = require('express');
const tagRouter = tagExpress.Router();
const tagController = require('../service/tagService');

// 创建标签
tagRouter.post('/create', tagController.createTag);
// 查询所有标签
tagRouter.get('/query', tagController.getTags);
// 根据 id 删除标签
tagRouter.delete('/delete/:id', tagController.deleteTag);

module.exports = tagRouter;