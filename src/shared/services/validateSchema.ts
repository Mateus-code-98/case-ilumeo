interface IValidateSchemaProps {
    schema: any
    data: any
}

export const validateSchema = async (props: IValidateSchemaProps) => {
    const { schema, data } = props

    try {
        await schema.validate(data)

        return { haveError: false, message: "" }
    } catch (err: any) {

        return { haveError: true, message: err.errors ? err.errors[0] : "" }
    }

}