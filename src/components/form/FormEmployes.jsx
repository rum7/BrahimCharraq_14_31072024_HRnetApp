import { useState } from "react"
import { formSchema, defaultFormValues } from '@/data/formSchema'
import { states, departments } from '@/data/formCreationData'
import { useEmployeesStore } from '@/stores/employeesStore'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Datepicker } from '@/components/form/Datepicker'
import { InputField } from '@/components/form/InputField'
import { InputSelect } from '@/components/form/InputSelect'
import { Dialog } from "@rum7/react-dialog"

export const FormEmployes = () => {

    const [isDialogOpen, setisDialogOpen] = useState(false)
    const toggleDialog = () => setisDialogOpen(!isDialogOpen)
    const valueDialogSettings = {
        isDialogOpen: isDialogOpen,
        onClose: toggleDialog,
        dialogTitle: "Employee created",
        dialogText: "A new employee has been created and added to the database.",
        btnCloseType: "textBtn",
        btnCloseLabel: "Close",
        customClass: "dialog-custom"
    }

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: defaultFormValues
    })

    const dateRange = {
        fromyear: new Date().getFullYear() - 50,
        toyear: new Date().getFullYear() + 50
    }

    const addEmployee = useEmployeesStore((state) => state.addEmployee)
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

        addEmployee(newUser)

        toggleDialog()
        
        form.reset()
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

            <Dialog value={valueDialogSettings} />
        </>
      )
}