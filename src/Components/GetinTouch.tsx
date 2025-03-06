// GetinTouch.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  fullName: string;
  email: string;
  company: string;
  message: string;
}

const GetinTouch: React.FC = () => {
  const initialValues: FormValues = {
    fullName: '',
    email: '',
    company: '',
    message: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required('Full name is required')
      .min(2, 'Full name must be at least 2 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    company: Yup.string().required('Company is required'),
    message: Yup.string()
      .required('Message is required')
      .min(10, 'Message must be at least 10 characters'),
  });

  const handleSubmit = (values: FormValues) => {
    console.log('Form submitted with values:', values);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="min-h-[1020px] bg-[#0A6ABF] text-white p-20 md:px-[200px] grid md:grid-cols-2 gap-8">
      {/* Left Section (Contact Information) */}
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-5xl font-[500] font-sans leading-tight">Get in touch</h2>
        <div className="w-14 border-b-[4px] border-white my-5"></div>
        <p className="text-lg font-sans">For general enquiries</p>

        <div className="mt-6 space-y-10">
          <p className="leading-relaxed">
            <span className="font-sans font-[400] text-[24px]">Address:</span>
            <br />
            <span className="font-sans text-[18px] font-[300]">
              110, 16th Road, Chembur, Mumbai - 400071
            </span>
          </p>
          <p className="leading-relaxed">
            <span className="font-sans font-[400] text-[24px]">Phone:</span>
            <br />
            <span className="font-sans text-[18px] font-[300]">+91 22 25280822</span>
          </p>
          <p className="leading-relaxed">
            <span className="font-sans font-[400] text-[24px]">Email:</span>
            <br />
            <span className="font-sans text-[18px] font-[300]">info@supremegroup.co.in</span>
          </p>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="flex flex-col justify-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <Field
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  className="w-full py-1 bg-transparent border-b border-white text-white placeholder-white outline-none font-sans text-lg"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-sm font-sans mt-1"
                />
              </div>

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full py-1 bg-transparent border-b border-white text-white placeholder-white outline-none font-sans text-lg"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm font-sans mt-1"
                />
              </div>

              <div>
                <Field
                  type="text"
                  name="company"
                  placeholder="Company"
                  className="w-full py-1 bg-transparent border-b border-white text-white placeholder-white outline-none font-sans text-lg"
                />
                <ErrorMessage
                  name="company"
                  component="div"
                  className="text-red-500 text-sm font-sans mt-1"
                />
              </div>

              <div>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  className="w-full py-1 bg-transparent border-b border-white text-white placeholder-white outline-none font-sans text-lg"
                  rows={4}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm font-sans mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 border border-white text-white rounded-full font-sans text-lg hover:bg-white hover:text-[black] transition"
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default GetinTouch;