const Todo = require("../model/todo");

exports.getTodo = async(req,res) => {
    try{
        // extract all data form db used find()
        const todos = await Todo.find({});

        // respose update
        res.status(200).json({
            success: true,
            data: todos,
            message: "entire message we get"
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

exports.getTodoByTitle = async (req,res) => {

    
    try{
        const tit= req.params.tit;
        // const {id} = req.params;
        const todos = await Todo.find({title : tit});
        if(!todos) {
            return res.status(404).json({
                success: false,
                message:"no data found"
            })
        }else{
            res.status(200).json({
                success: true,
                data: todos,
                message: `data found successfully with id ${id}`
            })
        }
    }
    catch(e){
        console.log(e);
        console.error(e);
        res.status(500).json({
            success:false,
            data: "internal server error",
            message:e.message,
        })
    }
}
