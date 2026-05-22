import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://dhamner-website.onrender.com/api/admin/login",
        form
      );

      localStorage.setItem("token", res.data.token);

      // ✅ IMPORTANT
      navigate("/admin", { replace: true });

    } catch (err) {
      console.log(err.response?.data);
      alert("Invalid email or password ❌");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* Left decorative column */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-green-800 to-emerald-950 text-white items-center justify-center p-12 relative overflow-hidden">
        {/* Decorative circle backdrop */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-md relative z-10">
          <div className="mb-6 flex justify-start">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
              <span className="text-3xl">🏛️</span>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold mb-4 font-devanagari tracking-tight text-white leading-tight">
            यशवंत ग्रामपंचायत <span className="text-amber-400 block mt-1">धामणेर</span>
          </h1>
          <div className="w-20 h-1 bg-amber-500 my-4 rounded-full"></div>
          <p className="text-lg text-green-100 font-medium">
            प्रशासकीय नियंत्रण कक्ष
          </p>
          <p className="text-sm text-green-200/80 mt-2 leading-relaxed">
            ग्रामपंचायत दाखले, योजना, प्रसिद्धी पत्रके आणि इतर डिजिटल सेवांच्या नियंत्रणासाठी लॉग इन करा.
          </p>
        </div>
      </div>

      {/* Right form column */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 p-6 md:p-12 relative">
        <form
          onSubmit={handleLogin}
          className="bg-white w-full max-w-md p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative z-10"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-devanagari">
              प्रशासकीय लॉगिन
            </h2>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">Admin Portal Sign In</p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">ईमेल / Email</label>
              <input
                type="email"
                name="email"
                placeholder="admin@dhamner.in"
                className="w-full p-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-gray-900 bg-gray-50/50 transition-all duration-300 text-sm"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">पासवर्ड / Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full p-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-gray-900 bg-gray-50/50 transition-all duration-300 text-sm"
                onChange={handleChange}
                required
              />
            </div>

            <button className="w-full bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 mt-4 font-devanagari">
              लॉगिन करा / Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}