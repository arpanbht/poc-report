import { Schema, model } from 'mongoose';

const Form = Schema({
    submittedBy: {
        type: Schema.Types.ObjectId,
        ref: "Admin"
    },
    approvedBy: {
        type: Schema.Types.ObjectId,
        ref: "Admin"
    },
    status: {
        type: String,
        enum: ["Pending", "Approved", "Denied"],
        default: "Pending"
    }
})

export default model("Form", Form);