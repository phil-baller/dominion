import { contactForm } from "@/constants";
import React from "react";
import Header from "../header";

const ContactForm = () => {
  const contacts = contactForm();
  return (
    <section className="py-20 lg:py-28 px-4 lg:px-8 xl:px-20 text-[#111] bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Header content="Get in Touch" />
          <p className="mt-6 text-base lg:text-lg text-neutral-600 leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl lg:text-4xl font-black text-[#111]">Leave us a message</h2>
            <form className="w-full flex items-center gap-6 flex-col">
              <section className="w-full flex lg:flex-row flex-col gap-5">
                <input
                  type="text"
                  className="flex outline-none border border-neutral-200 lg:flex-1 h-12 px-4 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="flex outline-none border border-neutral-200 lg:flex-1 h-12 px-4 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  placeholder="Email"
                />
              </section>
              <textarea
                className="flex outline-none border border-neutral-200 w-full h-52 px-4 py-3 resize-none rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                placeholder="Message"
              />
              <section className="w-full flex justify-end">
                <button className="bg-primary text-white py-3 px-10 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg">
                  Send Message
                </button>
              </section>
            </form>
          </section>
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl lg:text-4xl font-black text-[#111]">Get to us now</h2>
            <section className="flex flex-col gap-6">
              {contacts.map((contact, index) => (
                <section key={index} className="p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                  <p className="text-xl lg:text-2xl text-primary font-bold mb-3">
                    {contact.name}
                  </p>
                  <section className="flex flex-col gap-2">
                    {contact.fields?.map((field, i) => (
                      <p key={i} className="text-neutral-600">{field}</p>
                    ))}
                  </section>
                </section>
              ))}
            </section>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
