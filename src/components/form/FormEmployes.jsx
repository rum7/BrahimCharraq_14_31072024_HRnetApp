import { formSchema, defaultFormValues } from '@/data/formSchema'
import { states, departments } from '@/data/formCreationData'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Datepicker } from '@/components/form/Datepicker'
import { InputField } from '@/components/form/InputField'
import { InputSelect } from '@/components/form/InputSelect'


export const FormEmployes = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: defaultFormValues
    })
    
    const dateRange = {
        fromyear: new Date().getFullYear() - 50,
        toyear: new Date().getFullYear() + 50
    }

    // function onSubmit(data) {
    //     console.log('data.firstname: ', data.firstname)
    //     console.log('data.lastname: ', data.lastname)
    //     console.log('data.dateofbirth: ', data.dateofbirth.toLocaleDateString())
    //     console.log('data.startdate: ', data.startdate.toLocaleDateString())
    //     console.log('data.street: ', data.street)
    //     console.log('data.city: ', data.city)
    //     console.log('data.state: ', data.state)
    //     console.log('data.zipcode: ', data.zipcode)
    //     console.log('data.department: ', data.department)
    // }

    function onSubmit(data) {
        const newUser = {
            firstname: data.firstname,
            lastname: data.lastname,
            dateofbirth: data.dateofbirth.toLocaleDateString(),
            startdate: data.startdate.toLocaleDateString(),
            street: data.street,
            city: data.city,
            state: data.state,
            zipcode: data.zipcode,
            department: data.department,
        }

        const existingUsers = JSON.parse(localStorage.getItem('users')) || []
        const updatedUsers = [...existingUsers, newUser]
        localStorage.setItem('users', JSON.stringify(updatedUsers))
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-8">
                    <InputField form={form} label="Firstname" name="firstname" />
                    <InputField form={form} label="Lastname" name="lastname" />
                    <Datepicker form={form} label="Date of birth" name="dateofbirth" daterange={dateRange} />
                    <Datepicker form={form} label="Start date" name="startdate" daterange={dateRange} />
                    <fieldset>
                        <legend>Address</legend>
                        <InputField form={form} label="Street" name="street" />
                        <InputField form={form} label="City" name="city" />
                        <InputSelect form={form} label="State" name="state" data={states} />
                        <InputField form={form} label="Zipcode" name="zipcode" placeholder ="01234-5678" />
                    </fieldset>
                    <InputSelect form={form} label="Department" name="department" data={departments} />
                    <Button type="submit" variant="formSubmit">Submit</Button>
                </form>
            </Form>
        </>
      )
}
