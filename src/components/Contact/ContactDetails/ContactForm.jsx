import { useState } from "react";
import { Formik, Form, Field } from "formik";

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
        <h4 className="extra-title mb-50">Entre em contato.</h4>

        <Formik
          initialValues={{
            name: "",
            email: "",
            message: ""
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            {
              errMessage && <div className="messages">{ errMessage }</div>
            }

            <div className="controls">
              <div className="form-group">
                <Field
                  id="form_name"
                  type="text"
                  name="name"
                  placeholder="Nome"
                  required="required"
                />
              </div>

              <div className="form-group">
                <Field
                  id="form_email"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required="required"
                />
              </div>

              <div className="form-group">
                <Field
                  as="textarea"
                  id="form_message"
                  name="message"
                  placeholder="Mensagem"
                  rows="4"
                  required="required"
                />
              </div>

              <button type="submit" className="btn-curve btn-lit"><span>Enviar Mensagem</span></button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default ContactForm