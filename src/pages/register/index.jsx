import { useNavigate } from "react-router-dom";
import { Button, TextInput, Label } from "flowbite-react";
import { HiMail, HiEye } from "react-icons/hi";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { Spinner } from "flowbite-react";

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        password: Yup.string().required("Password is required"),
        // DOB: Yup.date().required("Date of Birth is required"),
    });

    const handleSubmit = async (values, { resetForm }) => {
        setLoading(true);
        setMessage('');
        setIsError(false);
        try {
            const response = await axios.post('https://online-cbt-server.onrender.com/api/v1/user', values);
            const { data } = response;
            if (response.status == 201) {
                setMessage('Registration successful!');
                resetForm();
                setTimeout(() => {
                    navigate("/")
                }, 1500)
                // navigate("/")
            } else {
                setMessage('An error occurred. Please try again.');
                setIsError(true);
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
            setIsError(true);
        } finally {
            setLoading(false);
        }


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
                    {({ isValid, dirty }) => (
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
                            <div className="w-full flex justify-end mt-3 md:mt-8">
                                <Button
                                    disabled={!(isValid && dirty)}
                                    className="bg-bgDArk w-full md:w-1/3" type="submit"
                                >
                                    {loading ? <Spinner size="sm" /> : 'Register'}
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
                {message && (
                    <div className={`mt-4 text-center ${isError ? 'text-red-500' : 'text-green-500'}`}>
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;
