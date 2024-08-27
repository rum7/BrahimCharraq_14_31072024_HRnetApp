import { z } from "zod"

const ageMin = 18
const currentDate = new Date()
const limitDate = new Date(currentDate.getFullYear() - ageMin, currentDate.getMonth(), currentDate.getDate())

export const formSchema = z.object({
    firstname: z.string().min(2, { message: "Firstname must be at least 2 characters." }).max(20, { message: "Firstname must be at most 20 characters." }),
    lastname: z.string().min(2, { message: "Lastname must be at least 2 characters." }).max(20, { message: "Lastname must be at most 20 characters." }),
    dateofbirth: z.date({ required_error: "A date of birth is required." }).max(limitDate, { message: `You should be at least ${ageMin} years old.` }),
    startdate: z.date({ required_error: "A start date is required." }),
    street: z.string().min(2, { message: "Street must be at least 2 characters." }).max(20, { message: "Street must be at most 20 characters." }),
    city: z.string().min(2, { message: "City must be at least 2 characters." }).max(20, { message: "City must be at most 20 characters." }),
    state: z.string(),
    zipcode: z.string().regex(/^\d{5}(-\d{4})?$/, { message: "5 or 9 digit"}),
    department: z.string(),

})

export const defaultFormValues = {
    firstname: "",
    lastname: "",
    street: "",
    city: "",
    zipcode: "",
}