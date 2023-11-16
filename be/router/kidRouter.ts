import { Router } from "express";
import { createKids, readkid, readkids } from "../controller/kidsController";

const router: Router = Router();

router.route("/create-kid").post(createKids)
router.route("/read-kids").get(readkid)
router.route("/read-kid").get(readkids)


export default router