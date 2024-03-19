import { model, Model, Schema } from "mongoose";
import { genSaltSync, hashSync } from "bcryptjs";
// import { TeamSchemaDto } from "../dtos/user.dtos";

const teamSchema: Schema<any> = new Schema(
    {
        teamId : {
            type:String,
            required:true,
        },
        teamName: {
            type: String,
            required: true,
        },
        members : {
            type : Array<string>,
        },
        leader: {
            type: String,
            required: true,
            unique: true,
        },
        leaderEmail: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


const Team: Model<any> = model("Team", teamSchema);

export { Team };
