// components/FormDataContext.js
import React, { createContext, useState } from 'react';

export const FormDataContext = createContext();

export function FormDataProvider({ children }) {
    const [formData, setFormData] = useState({
        userDetails: { name: '', email: '', phone: '' },
        addressDetails: { city: '', state: '', zip: '' },
        paymentDetails: { cardnum: '', expdate: '', cvv: '' },
    });

    return (
        <FormDataContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormDataContext.Provider>
    );
}
