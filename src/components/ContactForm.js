import React, { useState } from 'react'
import { send } from 'emailjs-com'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [toSend, setToSend] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    })
    const [emailStatus, setEmailStatus] = useState(false)
    const [loader, setLoader] = useState(false)

    const SERVICE = process.env.REACT_APP_SERVICE_ID
    const TEMPLATE = process.env.REACT_APP_TEMPLATE_ID
    const USER = process.env.REACT_APP_USER_ID

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value})
        // console.log(toSend)
    }

    const onSubmit = () => {
        setLoader(true)
        send(
            SERVICE,
            TEMPLATE,
            toSend,
            USER
        )
        .then((response) => {
            // console.log('SUCCESS!', response.status, response.text);
            setToSend({
                fullName: '',
                email: '',
                phone: '',
                company: '',
                message: ''
            })
            setEmailStatus('Success!')
            setLoader(false)
            setTimeout(() => setEmailStatus(false), 3000) 
        })
        .catch((err) => {
            console.log('FAILED...', err)
        })
    }

    return (
        <form 
            className="form"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="form__row">
                <input
                type="text"
                {...register("fullName", { required: true })}
                value={toSend.fullName}   
                onChange={handleChange}
                />
                <div className="form__label">
                    <label>Full Name *</label>
                    {errors.fullName && <p className="form__label--error">Required</p>}
                </div>
            </div>

            <div className="form__row">
                <input
                    type="text"
                    {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}   
                    value={toSend.email} 
                    onChange={handleChange}
                />
                <div className="form__label">
                    <label>Email *</label>
                    {errors.email && <p className="form__label--error">Please enter valid email</p>}
                </div>
            </div>
            
            <div className="form__row">
                <input
                    type="text"
                    {...register("phone", { required: true })}
                    value={toSend.phone}   
                    onChange={handleChange}
                />
                <div className="form__label">
                    <label>Phone *</label>
                    {errors.phone && <p className="form__label--error">Required</p>}
                </div>
            </div>

            <div className="form__row">
                <input
                    type="text"
                    {...register("company", { required: false })}
                    value={toSend.company}   
                    onChange={handleChange}
                />
                <div className="form__label">
                    <label>Company</label>
                </div>
            </div>

            <div className="form__row">
                <textarea 
                    {...register("message", { required: true })}
                    value={toSend.message} 
                    onChange={handleChange}
                />
                <div className="form__label">
                    <label>Message *</label>
                    {errors.message && <p className="form__label--error">Required</p>}
                </div>
            </div>

            <div className="form__submit">
                <p className="form__submit--success">{emailStatus}</p>
                {loader ? (
                    <span class="loader"></span>
                ) : ""}
                <button 
                className="btn u-margin-left"
                type="submit"    
                >
                    Submit
                </button>
            </div>
            
        </form>
    )
}

export default ContactForm