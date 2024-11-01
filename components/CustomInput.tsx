import React from 'react'
import { FormField, FormLabel,FormControl, FormMessage } from './ui/form'
import { Input } from './ui/input'

import {Control} from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'




interface CustomInput {
    control: Control<z.infer<typeof authFormSchema>> ,
    name: string,
    label: string,
    placeholder:string
}


const CustomInput = ({control, name, label, placeholder}:CustomInput) => {
  return (
    <FormField
    control={control}
    name="password"
    render={({ field }) => (
      <div className="form-item">
        <FormLabel className="form-label">
            {label}
        </FormLabel>
        <div className="flex-w-full flex-col">
          <FormControl>
            <Input
            placeholder='Enter your password'
            className="input-class"
            type="password"
            {...field}
           />
          </FormControl>
          <FormMessage
          className="form-message" />

        </div>
      </div>
    )}
  />
  )
}



export default CustomInput
