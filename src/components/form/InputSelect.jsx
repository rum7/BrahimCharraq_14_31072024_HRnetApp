import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const InputSelect = ({ form, label, name, data}) => {
    return (
        <>
            <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <Select name={name} onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                                <SelectTrigger aria-label={`button for ${name}`}>
                                    <SelectValue placeholder={`Select a ${name}`} />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {dataSelect(name, data)}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}

const dataSelect = (name, data) => {
    if (name === "state") {
        return (
            data.map((state, index) => (
                <SelectItem key={`${state.abbreviation}-${index}`} value={state.abbreviation}>
                    {state.label}
                </SelectItem>
            ))
        )
    }

    if (name === "department") {
        return (
            data.map((department, index) => (
                <SelectItem key={`${department}-${index}`} value={department}>
                    {department}
                </SelectItem>
            ))
        )
    }
}