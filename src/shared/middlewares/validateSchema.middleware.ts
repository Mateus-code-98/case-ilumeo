import * as Yup from "yup";
import { statusCodes } from "../utils/statusCodes";
import { NextFunction, Request, Response } from "express";
import { throwError } from "../services/throwError.service";
import { validateSchemaService } from "../services/validateSchema.service";

interface IValidateSchemaMiddlewareProps {
    bodySchema?: Yup.ObjectSchema<any>
    querySchema?: Yup.ObjectSchema<any>
}

const validate = async (data: Object, schema: Yup.ObjectSchema<any>) => {
    const { haveError, messages } = await validateSchemaService({ data, schema })
    if (haveError) {
        const message = messages.join(",\n")
        const status = statusCodes.BAD_REQUEST
        throwError({ message, status })
    }
}

export const validateSchemaMiddleware = (props: IValidateSchemaMiddlewareProps) => {
    const { bodySchema, querySchema } = props;

    return async (req: Request, res: Response, next: NextFunction) => {
        if (bodySchema) await validate(req.body, bodySchema)
        if (querySchema) await validate(req.query, querySchema)
        return next()
    }
}