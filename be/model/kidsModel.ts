import {model, Schema, Document} from "mongoose"

interface iKids {
    name: string
    image: string
}

interface iKidData extends iKids, Document{}

const kidModel = new Schema<iKidData>({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
},
{timestamps: true}
);

export default model<iKidData>("kids", kidModel)