
import tagExpress from "express"
import tagController from "../service/tagService"
const tagRouter = tagExpress.Router();

// 创建标签
tagRouter.post('/create', tagController.createTag);
// 查询所有标签
tagRouter.get('/query', tagController.getTags);
// 根据 id 删除标签
tagRouter.delete('/delete/:id', tagController.deleteTag);

export default tagRouter;