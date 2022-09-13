const getAlltasks =(req,res)=>{
    res.send("タスクをすべて取得します")
}
const createTask =(req,res)=>{
    res.send("タスクを新規作成します")
}
const getSingleTask =(req,res)=>{
    res.send("ある特定のタスクを取得します")
}
const updatetasks =(req,res)=>{
    res.send("ある特定のタスクを取得します")
}
const deletetasks =(req,res)=>{
    res.send("タスクをすべて取得します")
}

module.exports = {
    getAlltasks,
    createTask,
    getSingleTask,
    updatetasks,
    deletetasks
};