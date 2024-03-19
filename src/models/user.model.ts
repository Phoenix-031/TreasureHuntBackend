// import { model, Model, Schema } from "mongoose";

// const userSchema: Schema<any> = new Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true,
//         },
//         phoneNumber: {
//             type: String,
//         },
//         password: {
//             type: String,
//             required: true,
//         },
//         isApproved: {
//             type: Boolean,
//             default: false,
//         },
//         role: {
//             type: Schema.Types.ObjectId,
//             ref: "Role",
//         },
//         approvedBy: {
//             type: Schema.Types.ObjectId,
//             ref: "User",
//         },
//         approvalDate: Date,
//         resetToken: {
//             type: String,
//             default: "",
//         },
//         isBanned: {
//             type: Boolean,
//             default: false,
//         },
//     },
//     {
//         timestamps: true,
//     }
// );



// const User: Model<any> = model("User", userSchema);

// export { User };
