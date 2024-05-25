import { useNavigate } from "react-router-dom";
import { Button, TextInput, Label } from "flowbite-react";
import { HiMail, HiEye } from "react-icons/hi";
import { Datepicker } from "flowbite-react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        password: Yup.string().required("Password is required"),
        // DOB: Yup.date().required("Date of Birth is required"),
    });

    const handleSubmit = (values) => {
        console.log("ran>>>>");
        console.log(values);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-400">
            <div className="m-7 bg-white rounded shadow-2xl p-4 md:p-8 w-full md:w-[45%] flex flex-col">
                <div className="text-left mb-3 md:mb-5">
                    <h1 className="text-2xl font-bold sm:text-3xl">Register</h1>
                </div>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        // DOB: null,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({  isValid, dirty }) => (
                        <Form className="flex flex-col md:flex-row flex-wrap gap-4">
                            <div className="w-full md:w-[48%]">
                                <Field as={TextInput} name="firstName" className="focus:border-blue-500 w-full" type="text" placeholder="First Name" shadow />
                                <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs" />
                            </div>
                            <div className="w-full md:w-[48%]">
                                <Field as={TextInput} name="lastName" className="focus:border-blue-500 w-full" type="text" placeholder="Last Name" shadow />
                                <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs" />
                            </div>
                            <div className="w-full md:w-[48%]">
                                <Field as={TextInput} name="email" className="focus:border-blue-500 w-full" type="email" icon={HiMail} placeholder="Email" shadow />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                            </div>
                            <div className="w-full md:w-[48%]">
                                <Field as={TextInput} name="password" className="focus:border-blue-500 w-full" icon={HiEye} type="password" placeholder="Password" shadow />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
                            </div>
                            {/* <div className="w-full md:w-[48%]">
                                <Label htmlFor="DOB" value="Date Of Birth" />
                                <Field name="DOB">
                                    {({ field }) => (
                                        <input
                                            type="date"
                                            id="DOB"
                                            {...field}
                                            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full"
                                            onChange={(e) => setFieldValue("DOB", e.target.value)}
                                        />
                                    )}
                                </Field>
                                <ErrorMessage name="dateOfBirth" component="div" className="text-red-500 text-xs" />
                            </div> */}
                            <div className="w-full flex justify-end mt-3 md:mt-8">
                                <Button
                                    disabled={!(isValid && dirty)}
                                    className="bg-bgDArk w-full md:w-1/3" type="submit"
                                >
                                    Register
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Register;
