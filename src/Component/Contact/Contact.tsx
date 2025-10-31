import { useEffect } from "react";
import toast from "react-hot-toast";
export default function Contact() {
  useEffect(()=>{
    document.title="Contact Me — Zaynab Mohamed"
  },[])
const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.append("access_key", "98038aa2-cd58-454b-862e-65acbdf798fa");
  const object = Object.fromEntries(formData.entries());
  const json = JSON.stringify(object);
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const res = await response.json();
    if (res.success) {
      console.log("✅ Success:", res);
      toast.success("Message sent successfully!", {
        position: "top-center",
        duration: 3000,
      });
    } else {
      toast.error("Failed to send 😢", {
        position: "top-center",
        duration: 3000,
      });
    }
  } catch (error) {
    console.error("❌ Error:", error);
    toast.error("Something went wrong!", {
      position: "top-center",
      duration: 3000,
    });
  }
};
  return (
    <div className="w-full min-h-screen relative bg-gradient-to-tr  via-purple-900 to-blue-900 from-black">
      <div className="mx-auto text-black relative pt-30  p-4">
        <h1 className="text-center text-2xl text-blue-600  mb-6">Contact Me</h1>
        <div className="rounded-2xl shadow-2xl sm:w-[40%]  mx-auto p-12 md:w-[60%] lg:w-[40%]">
        <form onSubmit={onSubmit} className=" mx-auto relative">
          <div className="relative z-0 w-full mb-5 group pb-6 ">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block  py-3 px-3 w-full text-sm text-gray-900 bg-transparent  rounded-2xl mt-2 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="  peer-focus:font-medium absolute text-xl text-gray-800  dark:text-gray-400 duration-300 transdm -translate-y-6 scale-75 bottom-12 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-800 peer-focus:dark:text-blue-00 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address 
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group pb-6">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-3 px-3 w-full text-sm  bg-transparent border-0 border-b-2 rounded-2xl mt-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-xl text-gray-800 dark:text-gray-400 duration-300 transdm -translate-y-6 scale-75 bottom-12 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group pb-6">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-3 px-3 w-full text-sm  bg-transparent border-0 border-b-2 rounded-2xl mt-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute  text-gray-800 text-xl dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 bottom-12 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group pb-6">
            <input
              type="Subject"
              name="floating_email"
              id="floating_email"
              className="block py-3 px-3 w-full text-sm bg-transparent border-0 border-b-2 rounded-2xl mt-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-xl text-gray-800 dark:text-gray-400 duration-300 transdm -translate-y-6 scale-75 bottom-12 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Subject
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-br  via-purple-800 to-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        </div>
      </div>
    </div>

  )}

