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
            type : [
                {
                    espektroId  : String,
                },
                {
                    name : String,
                }
            ],
            required : true,
        },
        leader: {
            type: String,
            required: true,
        },
        leaderEmail: {
            type: String,
            unique: true,
        },
        espektroId : {
            type : String,
            required : true,
        },
        password: {
            type: String,
            required: true,
        },
        lives: {
            type: Number,
            default: 5,
        }
    },
    {
        timestamps: true,
    }
);


const Team: Model<any> = model("Team", teamSchema);

export { Team };
