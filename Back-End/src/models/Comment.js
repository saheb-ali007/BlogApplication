import {Schema,models,model} from  'mongoose'
const CommentSchema = new Schema({
    comment:String,
    blogPost:{
        type:Schema.Types.ObjectId,
        ref:'BlogPost',
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})