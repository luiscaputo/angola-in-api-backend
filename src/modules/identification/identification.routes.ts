import { Router } from "express";
import IdentificationController from "./IdentificationController";

const router: Router = Router();

router.get('/identification/:identificationNumber', new IdentificationController().handle);

export default router;
