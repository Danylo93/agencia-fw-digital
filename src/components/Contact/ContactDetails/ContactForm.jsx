import { useState } from "react";
import { Formik, Form, Field, } from "formik";
import { InlineWidget } from 'react-calendly';

import Link from 'next/link';

const ContactForm = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errMessage, setErrMessage] = useState(null);

  const validateForm = (formValues) => {
    if (!formValues.name || !formValues.email || !formValues.message) {
      setErrMessage('Please fill in all fields');
      return false;
    }
    if (formValues.name.length < 5) {
      setErrMessage('Name must be at least 5 characters');
      return false;
    }
    if (formValues.message.length < 10) {
      setErrMessage('Message must be at least 10 characters');
      return false;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
      setErrMessage('Email is invalid');
      return false;
    }
    return true;
  }

  const handleSubmit = (values, { setSubmitting }) => {
    if (validateForm(values)) {
      setErrMessage(null);
      setTimeout(() => {
        setSubmitting(false);
        setFormData(values);
      }, 400);
    }
  };

  return (
    
    <div className="col-lg-6">

      <div className="form md-mb50">
        <h4 className="extra-title mb-50">Agende Uma Reunião conosco.</h4>
        <InlineWidget url="https://calendly.com/agencia-fw-digital/30min" />






      </div>

    </div>
    
  )
}

export default ContactForm