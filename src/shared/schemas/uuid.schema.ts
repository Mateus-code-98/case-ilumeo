import * as Yup from "yup";

const REQUIRED_MESSAGE = "This field is required";
const UUID_MESSAGE = "This field must be a valid UUID";

export const uuidSchema = Yup.object().shape({
    id: Yup.string().uuid(UUID_MESSAGE).required(REQUIRED_MESSAGE)
});