// import { useNavigate } from "react-router-dom";

// import { Button, Label, TextInput } from "flowbite-react";
// import { HiMail, HiEye } from "react-icons/hi";

// const Login = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/register")
//   }
//   const handleSubmit = () => {
//     navigate("/trial")
//   }
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-400">
//       <div className="bg-white rounded shadow-2xl p-4 md:p-8 w-full md:w-[35%]">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>
//         </div>
//         <div className="flex flex-col gap-4">
//           <div>
//             <Label htmlFor="email2" value="Your email" />
//             <TextInput id="email2" type="email" icon={HiMail} placeholder="example@gmail.com" shadow />
//           </div>
//           <div className="mt-4">
//             <Label htmlFor="password2" value="Your password" />
//             <TextInput id="password2" icon={HiEye} placeholder="Password" type="password" shadow />
//           </div>
//           <div className="my-4">
//             <p className="text-base text-gray-500">
//               No account? 
//               <span className="underline cursor-pointer" onClick={handleClick}> Register</span>
//             </p>
//           </div>
//           <Button className="bg-bgDArk" type="submit" onClick={handleSubmit}>Login</Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login;



import { useNavigate } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
import { HiMail, HiEye } from "react-icons/hi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400 p-4">
      <div className="bg-white rounded shadow-2xl p-4 md:p-8 w-full md:w-[35%]">
        <div className="text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className="flex flex-col gap-4">
              <div>
                <Label htmlFor="email" value="Your email" />
                <Field
                  as={TextInput}
                  id="email"
                  name="email"
                  type="email"
                  icon={HiMail}
                  placeholder="example@gmail.com"
                  shadow
                  className={
                    errors.email && touched.email ? "border-red-500" : ""
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mt-4">
                <Label htmlFor="password" value="Your password" />
                <Field
                  as={TextInput}
                  id="password"
                  name="password"
                  type="password"
                  icon={HiEye}
                  placeholder="Password"
                  shadow
                  className={
                    errors.password && touched.password ? "border-red-500" : ""
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                {/* {errors} */}
              </div>
              <div className="my-4">
                <p className="text-base text-gray-500">
                  No account?{" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={handleClick}
                  >
                    Register
                  </span>
                </p>
              </div>
              <Button
                disabled={!(isValid && dirty)}
                className="bg-bgDArk" type="submit">
                Login
              </Button>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
