import { Request, Response } from "express";
import kidsModel from "../model/kidsModel";

export const createKids = async(req: Request, res: Response) =>{
    try {
        const {name, image} = req.body
        const kids = await kidsModel.create({
            name, image
        })

        return res.status(200).json({
            message: "Success",
            data: kids
        })
    } catch (error) {
        return res.status(404).json({
            message: "Error creating kids"
        })
    }
}
export const readkid = async(req: Request, res: Response) =>{
    try {
        const kids = await kidsModel.find()

        return res.status(200).json({
            message: "Success",
            data: kids
        })
    } catch (error) {
        return res.status(404).json({
            message: "Error creating kids"
        })
    }
}
export const readkids = async(req: Request, res: Response) =>{
    try {
        const kids = await kidsModel.find().sort({name: 1});

        return res.status(200).json({
            message: "Read sorted",
            data: kids
        })
    } catch (error) {
        return res.status(404).json({
            message: "Error creating kids"
        })
    }
}