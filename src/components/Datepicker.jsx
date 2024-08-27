import { useState } from 'react'
import { cn } from '@/lib/utils'
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"


export const Datepicker = ({ form, label, name, daterange }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [date, setDate] = useState(null)
    const [month, setMonth] = useState(new Date());
    
    return (
        <>
            <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                        <FormLabel>{label}</FormLabel>
                        <Popover open={isOpen} onOpenChange={setIsOpen}>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button variant={"outline"} className={cn( "w-full font-normal", !field.value && "text-muted-foreground" )}>
                                        {field.value ? (
                                            `${format(field.value, "dd/MM/yyyy")}`
                                        ) : (
                                            <span>Pick your date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="center">
                                <Calendar
                                    mode="single"
                                    captionLayout="dropdown"
                                    selected={date || field.value}
                                    onSelect={(selectedDate) => {
                                        setDate(selectedDate)
                                        setMonth(selectedDate)
                                        field.onChange(selectedDate)
                                    }}
                                    onDayClick={() => setIsOpen(false)}
                                    month={month}
                                    onMonthChange={(selectedDate) => { 
                                        setDate(selectedDate)
                                        setMonth(selectedDate)
                                        field.onChange(selectedDate)
                                    }}
                                    fromYear={daterange.fromyear}
                                    toYear={daterange.toyear}
                                    // disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                                />
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}
