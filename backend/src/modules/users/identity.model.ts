import mongoose from 'mongoose';


const identitySchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },

    provider:{
        type : String,
        enum:["google"],
        required:true
    },

    providerAccountId:{
        type : String,
        required:true
    },

},{timestamps:true});


identitySchema.index({provider:1,providerAccountId:1},{unique:true});

const Identity = mongoose.model('Identity',identitySchema);

export default Identity;