import ContactForm from "@/components/forms/contact";
import { Dot, Home, Mail, Phone } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Contact us",
};

function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative min-h-[40vh] flex items-center justify-center flex-col">
        <h2 className="text-center text-4xl section-title font-createRound">
          <span>Contact</span>
        </h2>

        <div className="flex gap-1 items-center mt-4">
          <Home className="w-4 h-4" />
          <Link
            href={"/"}
            className="opacity-90 hover:underline hover:opacity-100"
          >
            Home
          </Link>
          <Dot />
          <p className="text-muted-foreground">Contact</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 mt-6">
        <div className="flex flex-col">
          <h1 className="text-4xl font-creteRound">Contact Team</h1>
          <p className="mt-2 text-muted-foreground">
            I am here to help and answer any question you might have. I look
            forward to hearing from you
          </p>

          <div className="mt-12 flex items-center gap-3">
            <Mail className="w-4 h-4" />
            <p className="text-sm">info@asqarbekdev.uz</p>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <Phone className="w-4 h-4" />
            <p className="text-sm">+998 50 008 8708</p>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-creteRound mb-2">Contact form</h1>
          <div className="flex flex-col space-y-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
