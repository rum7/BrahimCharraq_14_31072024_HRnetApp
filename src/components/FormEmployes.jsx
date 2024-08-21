import { states, departments } from '../data/formCreationData'
import { Button, DatePicker, Input, Select, SelectItem } from '@nextui-org/react'

export const FormEmployes = () => {
    const handleStateSelect = (e) => {
        // console.log('e.target.value: ', e.target.value)
    }

    const handleDepartmentSelect = (e) => {
        // console.log('e.target.value: ', e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        console.log("SUCCESS", formData)
        const firstname = formData.get("firstname")
    }

    return (
        <>
            <form onSubmit={(e) => onSubmit(e)} className='w-full flex flex-col gap-8'>
                <Input name="firstname" type="firstname" label="Firstname" variant="bordered" />  
                <Input name="lastname" type="lastname" label="Lastname" variant="bordered" />
                <DatePicker name="birthdate" label="Birth date" className="datepicker" />
                <DatePicker name="startdate" label="Start date" className="datepicker" />
                <fieldset>
                    <legend>Address</legend>
                    <Input name="street" type="street" label="Street" variant="bordered" />
                    <Input name="city" type="city" label="City" variant="bordered" />
                    <Select name="state" label="Select a state" onChange={handleStateSelect} >
                        {states.map((state) => (
                            <SelectItem key={state.abbreviation}>
                                {state.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Input name="zipcode" type="number" label="Zipcode" />
                </fieldset>
                <Select name="department" label="Select a department" onChange={handleDepartmentSelect} >
                    {departments.map((department) => (
                        <SelectItem key={department}>
                            {department}
                        </SelectItem>
                    ))}
                </Select>
                <Button type='submit' className='min-w-[calc(100%/3)] self-end' color="primary" variant='ghost'>Save</Button>
            </form>
        </>
    )
}
