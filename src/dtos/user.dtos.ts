import { Document, Types } from "mongoose";

type UserDto = {
    name: string;
    username: string;
    email: string;
    phoneNumber?: string;
    password: string;
    isApproved: boolean;
    role: Types.ObjectId;
    approvedBy?: Types.ObjectId;
    approvalDate?: Date;
    resetToken: string;
    isBanned?: boolean;
};

type UserCacheDto = {
    _id: Types.ObjectId;
    handle: string;
    name: string;
    email: string;
    phone?: string;
    picture: string;
    profile: Types.ObjectId;
    role: Types.ObjectId;
};

type UserUpdateDto = Partial<UserDto>;
type UserSchemaDto = Document & UserDto;


export {
    UserDto,
    UserCacheDto,
    UserSchemaDto,
    UserUpdateDto,
};
