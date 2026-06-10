import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    carBrand: "",
    carModel: "",
    message: "",
  });

  const whatsappNumber = "447909445101";

  const services = [
    "Powder Coating",
    "Diamond Cutting",
    "Wheel Refurbishment",
    "Wheel Straightening",
    "Crack Repairs",
    "Colour Changes",
    "Brake Caliper Painting",
    "Kerb Damage Repairs",
    "Custom Wheel Colours"

  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
*New Enquiry*
-------------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Car Brand: ${formData.carBrand}
Car Model: ${formData.carModel}
Message: ${formData.message}
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      carBrand: "",
      carModel: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="w-full py-14 bg-[linear-gradient(180deg,var(--bg)_0%,var(--surface)_100%)] transition-colors" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Get In <span className="text-[#E53E3E]">Touch</span>  
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Have questions? Contact Elite Wheels Glasgow today for a free quote or to schedule your repair.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <div className="bg-white/5 p-8 rounded-2xl shadow-lg space-y-8 border border-white/10" data-aos="fade-right">

            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold mb-2 text-white">Address</h3>
              <a
                href="https://maps.app.goo.gl/QhPQjNmN28A3c5gh8"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--muted)] hover:text-[var(--gold)] hover:underline"
              >
                15 Carmyle Avenue, Glasgow, United Kingdom
              </a>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
              <a
                href="tel:07909445101"
                className="text-[var(--muted)] hover:text-[var(--gold)] hover:underline"
              >
                07909 445101
              </a>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-semibold mb-2 text-white">Hours</h3>
              <div className="text-[var(--muted)] space-y-1">
                <p>Monday: 8:30 AM - 5:00 PM</p>
                <p>Tuesday: 8:30 AM - 5:30 PM</p>
                <p>Wednesday: 8:30 AM - 5:00 PM</p>
                <p>Thursday: 8:30 AM - 5:00 PM</p>
                <p>Friday: 8:30 AM - 5:00 PM</p>
                <p>Saturday: Closed</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Payment Methods
              </h3>
              <div className="grid grid-cols-3 gap-3">

                {/* Google Pay */}
                <div className="px-3 py-3 bg-black rounded-xl border border-white/10 shadow-sm flex items-center justify-center h-16" data-aos="zoom-in" data-aos-delay="50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 36" width="82" height="32">
                    <text x="0" y="25"  fontSize="17" fontWeight="500" fill="#5F6368">G</text>
                    <text x="12" y="25"  fontSize="17" fontWeight="500" fill="#EA4335">o</text>
                    <text x="23" y="25"  fontSize="17" fontWeight="500" fill="#FBBC05">o</text>
                    <text x="34" y="25"  fontSize="17" fontWeight="500" fill="#4285F4">g</text>
                    <text x="45" y="25"  fontSize="17" fontWeight="500" fill="#34A853">l</text>
                    <text x="52" y="25"  fontSize="17" fontWeight="500" fill="#EA4335">e</text>
                    <text x="63" y="25"  fontSize="17" fontWeight="400" fill="#5F6368">Pay</text>
                  </svg>
                </div>

                {/* Apple Pay */}
                <div className="px-3 py-3 bg-black rounded-xl border border-white/10 shadow-sm flex items-center justify-center h-16" data-aos="zoom-in" data-aos-delay="100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 32" width="68" height="30">
                    <path d="M14 6.8c1-1.2 1.6-2.9 1.4-4.6-1.5.1-3.2 1-4.2 2.2-.9 1.1-1.7 2.8-1.5 4.4 1.6.2 3.2-.7 4.3-2z" fill="#000"/>
                    <path d="M15.5 9.2c-2.3-.1-4.3 1.3-5.4 1.3-1.1 0-2.8-1.2-4.7-1.2C3 9.3.8 10.7-.4 12.8c-2.5 4.3-.6 10.7 1.8 14.2 1.2 1.7 2.6 3.6 4.4 3.5 1.7-.1 2.4-1.1 4.5-1.1 2.1 0 2.7 1.1 4.5 1.1 1.9-.1 3.1-1.7 4.3-3.4.7-1.1 1.3-2.3 1.7-3.6-4.3-1.6-5-7.9-.5-10.2-1.1-1.4-2.8-2.2-4.3-2.1z" fill="#000"/>
                    <text x="22" y="22"  fontSize="16" fontWeight="500" fill="#000">Pay</text>
                  </svg>
                </div>

                {/* Visa */}
                <div className="px-3 py-3 bg-black rounded-xl border border-white/10 shadow-sm flex items-center justify-center h-16" data-aos="zoom-in" data-aos-delay="150">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 30" width="64" height="26">
                    <text x="2" y="22"  fontSize="24" fontWeight="800" fontStyle="italic" fill="#1A1F71" letterSpacing="2">VISA</text>
                  </svg>
                </div>

                {/* Mastercard */}
                <div className="px-3 py-3 bg-black rounded-xl border border-white/10 shadow-sm flex items-center justify-center h-16" data-aos="zoom-in" data-aos-delay="200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 36" width="56" height="34">
                    <circle cx="20" cy="18" r="14" fill="#EB001B"/>
                    <circle cx="38" cy="18" r="14" fill="#F79E1B"/>
                    <path d="M29 7a14 14 0 0 1 0 22A14 14 0 0 1 29 7z" fill="#FF5F00"/>
                  </svg>
                </div>

                {/* Contactless */}
                <div className="px-3 py-3 bg-black rounded-xl border border-white/10 shadow-sm flex items-center justify-center h-16" data-aos="zoom-in" data-aos-delay="250">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="38" height="38" fill="none" strokeLinecap="round">
                    <circle cx="20" cy="20" r="3" fill="#5F6368"/>
                    <path d="M20 20 a8 8 0 0 0 0-0" stroke="none"/>
                    <path d="M26 14 a10 10 0 0 1 0 12" stroke="#5F6368" strokeWidth="2.5" fill="none" opacity="0.9"/>
                    <path d="M30 10 a14 14 0 0 1 0 20" stroke="#5F6368" strokeWidth="2.5" fill="none" opacity="0.6"/>
                    <path d="M34 6 a18 18 0 0 1 0 28" stroke="#5F6368" strokeWidth="2.5" fill="none" opacity="0.3"/>
                  </svg>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10" data-aos="fade-down">
            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <InputField label="Full Name *" place="Enter Your Name" name="name" value={formData.name} onChange={handleChange} required />
                <InputField label="Email *" place="Enter Your Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              {/* Phone & Service */}
              <div className="grid md:grid-cols-2 gap-6">
                <InputField label="Phone" place="Enter Your Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} />

                <div>
                  <label className="block font-medium mb-2 text-white">
                    Select Service *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black text-white focus:ring-2 focus:ring-[var(--cta)] outline-none transition"
                  >
                    <option value="">Choose a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Car Brand & Model */}
              <div className="grid md:grid-cols-2 gap-6">
                <InputField label="Car Brand *" place="Enter Your Car Brand" name="carBrand" value={formData.carBrand} onChange={handleChange} required />
                <InputField label="Car Model *" place="Enter Your Car Model" name="carModel" value={formData.carModel} onChange={handleChange} required />
              </div>

              {/* Message */}
              <div>
                <label className="block font-medium mb-2 text-white">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your vehicle issue..."
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black text-white focus:ring-2 focus:ring-[var(--cta)] outline-none resize-none transition"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[var(--cta)] text-white font-semibold py-4 rounded-lg hover:brightness-90 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
              >
                Send Message
              </button>

              <p className="text-xs text-center text-[var(--muted)]">
                By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Input Component */
function InputField({ label, name, type = "text", place, value, onChange, required }) {
  return (
    <div>
      <label className="block font-medium mb-2 text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={place}
        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black text-white focus:ring-2 focus:ring-[var(--cta)] outline-none transition"
      />
    </div>
  );
}
