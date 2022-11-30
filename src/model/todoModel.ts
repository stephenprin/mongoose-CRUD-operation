import mongoose, { Schema } from "mongoose";

interface todoInstance{
    _id: string,
    description: string,
    status: boolean,
    date: Date,
} 
export const todoSchema = new Schema({

        description: { type: String, required: true },
        status: { type: Boolean, required: true },
}, {
    timestamps: true,

})
 
const Todo = mongoose.model<todoInstance>("Todo", todoSchema);
export default Todo;
