import React, {Fragment, useState} from "react";

const Register = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log( firstName, lastName, phoneNumber, email, password);
  // console.log("lastname", lastName);
  // console.log("phonenumber", phoneNumber);
  // console.log("Email", email);
  // console.log("passwod", password);

  let userDetail = {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
  };

  let detailsArray = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    detailsArray.push(userDetail);
    console.log(userDetail);
    console.log(detailsArray);
  };
  return (
    <Fragment>
      <div className="h-screen w-screen bg-blue-600 flex justify-center items-center   pb-20">
      <div className="bg-white p-5 rounded-xl mt-20">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="first_name"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                placeholder="John"
                className="bg-gray-50 border border-grey-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 w-[100%] p-3"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="last_name"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                placeholder="Doe"
                className="bg-gray-50 border border-grey-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 w-[100%] p-3"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="phone_number"
              >
                Phone number
              </label>
              <input
                type="text"
                id="phone_number"
                placeholder="+234 806-735-2466"
                className="bg-gray-50 border border-grey-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 w-[100%] p-3"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="email_adress"
              >
                Email address
              </label>
              <input
                type="text"
                id="email_adress"
                placeholder="johndoe@gmail.com"
                className="bg-gray-50 border border-grey-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 w-[100%] p-3"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="t9#8298y&"
                className="bg-gray-50 border border-grey-300 text-gray-900 text-sm rounded-lg focus:border-blue-500  w-[100%] p-3"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="md:self-center">
              <input id="checkbox" type="checkbox" />
              <label className="px-2" htmlFor="checkbox">
                I agree with the{" "}
                <span className="text-blue-600 cursor-pointer">
                  terms and condition
                </span>
                .
              </label>
            </div>
            <div>
              <button className="bg-blue-500 px-5 py-3 rounded-lg font-bold text-white">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </Fragment>
  );
};

export default Register;
