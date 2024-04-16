"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const mongoose_1 = require("mongoose");
// import { TeamSchemaDto } from "../dtos/user.dtos";
const teamSchema = new mongoose_1.Schema({
    teamId: {
        type: String,
        required: true,
    },
    teamName: {
        type: String,
        required: true,
    },
    members: {
        type: [{
                espektroId: String,
                name: String,
            }],
        required: true,
    },
    leader: {
        type: String,
        required: true,
    },
    espektroId: {
        type: String,
        required: true,
        unique: true,
    },
    lives: {
        type: Number,
        default: 12,
    },
    spotArray: {
        type: (Array),
        default: [],
    },
    answerString: {
        type: String,
        default: ''
    },
    isDisqualified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
});
const Team = (0, mongoose_1.model)("Team", teamSchema);
exports.Team = Team;
//# sourceMappingURL=team.model.js.map