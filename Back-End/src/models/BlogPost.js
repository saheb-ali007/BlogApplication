import mongoose, {Schema,models,model} from 'mongoose'
const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 150
    },
    body: {
        type: String,
        required: true,
        minlength: 50
    },
    image: {
        type: String,
        default: '', // Could also be a default image URL
    },
    tags: [{
        type: String,
        trim: true,
        lowercase: true
    }],
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isPublished: {
        type: Boolean,
        default: false
    },
},{timestamps:true})
const BlogPost = models.BlogPost || model('BlogPost',BlogPostSchema)
export default BlogPost