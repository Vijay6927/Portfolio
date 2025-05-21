import { useState } from "react";
const First = () => {
    const [formData, setFormData] = useState({
        name: "",
        whatsapp: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState(null);

    const endpoint = "https://formspree.io/f/xjkwznzr";

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("sending");

        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", whatsapp: "", email: "", message: "" });

                setTimeout(() => setStatus(null), 3000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus(null), 3000);
            }
        } catch (err) {
            setStatus("error");
            setTimeout(() => setStatus(null), 3000);
        }
    };
    return (
        <div>
            <h1 className="text-3xl md:text-5xl mt-30 font-bold ">
                <span className="text-blue-500 text-xl md:text-3xl">--------------------</span> Contact
            </h1>
            <div className="min-h-screen px-4 py-16 flex flex-col justify-center items-center">

                <div className="text-center mt-40 mb-50">
                    <h2 className="text-3xl md:text-6xl font-bold">Let's Build</h2>
                    <h1 className="text-4xl md:text-8xl leading-[rem] font-bold bg-gradient-to-b from-purple-400 to-purple-700 bg-clip-text text-transparent -mt-7">
                        Something Great
                    </h1>

                    <p className="text-base md:text-xl -mt-2 text-gray-700">
                        Your great ideas deserve to become reality
                    </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10 text-black animate-bounce mx-auto mt-8"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25L12 15.75 4.5 8.25" />
                    </svg>

                </div>

                <div className="w-full max-w-3xl px-2">
                    <h1 className="text-2xl md:text-5xl font-bold text-center mb-10">Let's Talk</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="What is your name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-black text-black text-lg py-2"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="tel"
                                name="whatsapp"
                                placeholder="Your WhatsApp"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-black text-black text-lg py-2"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-black text-black text-lg py-2"
                                required
                            />
                        </div>

                        <div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-black text-black text-lg py-2 h-24 resize-none"
                                required
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-6 py-2 rounded-xl bg-blue-500 font-semibold text-white hover:bg-blue-400 transition duration-300"
                                disabled={status === "sending"}
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </button>
                        </div>

                        {status === "success" && (
                            <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-600 text-center mt-4">Oops! Something went wrong.</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default First;
