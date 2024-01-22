import { object, string, number } from 'yup';

export let userSchema = object({
    name: string().required().min(3),
    age: number().required().positive().integer().nullable(),
    sex: string().required().oneOf(['male', 'female']),
    mobile: string().required().matches(/[0-9]{10}/),
    idType: string().required().oneOf(['adhar', 'pan']),
    gov_id:string().matches(/[0-9]{6}/).when('idType', {
        is: (myStringFieldValue: string|undefined) => myStringFieldValue === 'adhar',
        then: (userSchema) => userSchema.required(),
      }),
  });

export let userAddressSchema = object({
    address: string(),
    state: string(),
    city: string(),
    country: string(),
    pincode: string().matches(/[0-9]{6}/)
  });