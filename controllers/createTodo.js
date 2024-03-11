// import the model
const Todo = require("../model/todo");

//define route handler
exports.createTodo = async(req,res) => {
    try{
        // extract title and description from req body by destructuring from req.body which is sended by postman server
        const {title,description} = req.body;

        // create new todo obj and insert in DB
        const response = await Todo.create({title,description});

        // send a json resopnse with success flag
        res.status(200).json({
            success:true,
            data: response,
            message:"entery created successfully"
        });
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

