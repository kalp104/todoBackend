const Todo = require("../model/todo");

exports.updateTodo = async (req, res) => {
    try{
        const {tit} = req.params;
        const {description} = req.body;

        const todos = await Todo.findOneAndUpdate({title:tit},
            {description,updatedAt:Date.now()});

        res.status(200).json({
            success: true,
            data: todos,
            message: "updated successfully"
        })
        
    }catch(e){
        console.log(e);
        console.error(e);
        res.status(500).json({
            success:false,
            data: "internal server error",
            message:e.message,
        })
    }
}