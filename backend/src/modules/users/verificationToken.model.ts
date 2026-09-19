import mongoose from "mongoose";

const verificationTokenSchema = new mongoose.Schema({
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },

    type:{
        type: String,
        required: true,
        enum: ['EMAIL_VERIFICATION', 'PASSWORD_RESET'],
    },

    tokenHash :{
        type : String,
        required : true
    },

    expiresAt : {
        type : Date,
        required : true
    }
},{ timestamps : true})

// Create an index on the expiresAt field to automatically delete expired tokens
verificationTokenSchema.index(
  { expiresAt: 1 },
  { expireAfterSeconds: 0 },
);

const verificationToken = mongoose.model("VerificationToken", verificationTokenSchema);
export default verificationToken;