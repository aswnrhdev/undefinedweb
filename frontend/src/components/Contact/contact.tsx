"use client"
import { LabeledInputs } from "./LabeledInputs"
import { LabeledTextArea } from "./LabeledTextArea"
import { Formik } from "formik";
import * as Yup from "yup";



export const Contact = () => {
  return (
    <div className="w-full md:flex">
      <div className="md:w-2/3 w-full bg-black flex justify-center items-center">
        <div className=" h-4/5 w-4/5 mb-10">
          <div className="ml-5">
            <p className="text-3xl text-white">Give us a Hello!</p>
            <p className="text-primary">Let us know about your project</p>
          </div>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              details: ''

            }}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 0));
              console.log(values);

            }}

            validationSchema={Yup.object().shape({
              firstName: Yup.string()
                .min(2, "First name must be at least 2 characters")
                .max(50, "First name cannot exceed 50 characters")
                .required("First name is required"),
              lastName: Yup.string()
                .min(2, "Last name must be at least 2 characters")
                .max(50, "Last name cannot exceed 50 characters")
                .required("Last name is required"),
              email: Yup.string()
                .email("Enter a valid email")
                .required("Email is required"),
              phone: Yup.string()
                .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
                .required("Phone number is required"),
              details: Yup.string()
                .min(5, "Detail cannot be less than 5 characters")
                .max(250, "Detail cannot exceed 250 characters")
            })}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleSubmit,
              } = props;
              return (
                <>
                  <form onSubmit={handleSubmit}>
                    <div className="flex p-6 space-x-7">
                      <LabeledInputs label='First Name' id='firstName' type='text' value={values.firstName} onChange={handleChange} errorMsg={errors.firstName} touched={touched.firstName} />
                      <LabeledInputs label='Last Name' id='lastName' type='text' value={values.lastName} onChange={handleChange} errorMsg={errors.lastName} touched={touched.lastName} />
                    </div>
                    <div className="flex p-6 space-x-7">
                      <LabeledInputs label='Email' id='email' type='text' value={values.email} onChange={handleChange} errorMsg={errors.email} touched={touched.email} />
                      <LabeledInputs label='Phone' id='phone' type='number' value={values.phone} onChange={handleChange} errorMsg={errors.phone} touched={touched.phone} />
                    </div>
                    <div className="p-6">
                      <LabeledTextArea label='Details' id='details' value={values.details} onChange={handleChange} errorMsg={errors.details} touched={touched.details} />
                    </div>
                    <div className="flex justify-center w-full">
                      <button className="border border-primary bg-transparent text-primary hover:bg-primary hover:text-black p-2 mt-4 w-4/5 sm:w-1/3 transition-all duration-300 ease-in-out transform rounded-md">
                        Submit
                      </button>
                    </div>
                  </form>
                </>
              )
            }
            }
          </Formik>
        </div>
      </div>
      <div className="md:w-1/3 w-full bg-black flex justify-center items-center xl:mr-0 mr-10">
        <div className="p-10 bg-black md:border border-primary rounded-xl text-primary text-center">
          <p className="text-2xl mb-4"> Contact information</p>
          <div className="md:ml-4">
            <p className="">
              Kozhikode
            </p>
            <p className="">
              Kerala, India 673001
            </p>
          </div>
          <hr className="border-primary my-10 md:border-black"/>
          <p className="text-2xl mb-4"> Call us</p>
          <div className="md:ml-4">
            <p className="">
              90678876828
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

