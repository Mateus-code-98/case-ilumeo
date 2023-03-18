import * as Yup from "yup";

interface IValidateSchemaProps {
    schema: Yup.ObjectSchema<any>
    data: Object
}

export const validateSchemaService = async (props: IValidateSchemaProps) => {
    const { schema, data } = props;

    try {
        await schema.validate(data, { abortEarly: false });

        return { haveError: false, messages: "" };
    } catch (err: any) {

        return { haveError: true, messages: err.errors ?? [] };
    }

};