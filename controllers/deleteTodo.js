const Todo = require("../model/todo");

exports.deleteTodo = async (req, res) => {
    try {
        // Extract title from request parameters
        const { tit } = req.params;

        // Find and delete the todo
        const deletedTodo = await Todo.findOneAndDelete({ title: tit });

        if (!deletedTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        // Response for successful deletion
        res.status(200).json({
            success: true,
            message: "Todo deleted",
            deletedTodo,
        });

    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: e.message,
        });
    }
};
