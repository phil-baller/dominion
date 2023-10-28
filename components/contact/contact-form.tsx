import { contactForm } from "@/constants";
import React from "react";

const ContactForm = () => {
  const contacts = contactForm();
  return (
    <section className="padding text-[#111] bg-white">
      <section className="max-w-7xl mx-auto w-full flex gap-10 lg:flex-row flex-col-reverse">
        <section className="flex-[2] flex flex-col gap-10">
          <p className="lg:text-4xl text-xl font-bold ">Leave us a message</p>
          <form className="w-full flex items-center gap-5 flex-col">
            <section className="w-full flex lg:flex-row flex-col lg:items-center gap-5">
              <input
                type="text"
                className="flex outline-none border lg:flex-1 h-10 px-2"
                placeholder="Name"
              />
              <input
                type="text"
                className="flex outline-none border lg:flex-1 h-10 px-2"
                placeholder="Email"
              />
            </section>
            <textarea
              className="flex outline-none border w-full h-52 px-2 resize-none"
              placeholder="Message"
            ></textarea>
            <section className="w-full flex justify-end">
              <button className="bg-primary py-3 px-10 w-fit">Send</button>
            </section>
          </form>
        </section>
        <section className="flex-1 flex flex-col gap-10">
          <p className="text-4xl font-bold">Get to us now</p>
          <section className="flex flex-col gap-4">
            {contacts.map((contact, index) => (
              <section key={index} className="border-b">
                <p className="text-2xl text-primary font-medium">
                  {contact.name}
                </p>
                <section>
                  {contact.fields?.map((field, i) => (
                    <p key={i}>{field}</p>
                  ))}
                </section>
              </section>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default ContactForm;
