import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useEmployeesStore = create(
    persist(
        (set, get) => ({
            employees: [],
            addEmployee: (newUser) => set((state) => (
                {
                    employees : [...get().employees,
                        {
                            firstname: newUser.firstname,
                            lastname: newUser.lastname,
                            dateofbirth: newUser.dateofbirth,
                            startdate: newUser.startdate,
                            street: newUser.street,
                            city: newUser.city,
                            state: newUser.state,
                            zipcode: newUser.zipcode,
                            department: newUser.department,
                        }
                    ]
                }
            )),
        }),
        {
            name: 'current-employees',
            // storage: createJSONStorage(() => sessionStorage),
        }
    )
)