"use server";

import React from "react";
import { Resend } from "resend";
import emailjs from "@emailjs/browser";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend("re_K4NyzAAy_4v8efocT4rx2xYPmL37nsw52");

export const sendEmail = async (formData: any) => {
  const senderEmail = formData.senderEmail;
  const message = formData.message;

  // simple server-side validation
  // if (!validateString(senderEmail, 500)) {
  //   return {
  //     error: "Invalid sender email",
  //   };
  // }
  // if (!validateString(message, 5000)) {
  //   return {
  //     error: "Invalid message",
  //   };
  // }

  let data;
  try {
    emailjs.send(
      "service_n98qgep",
      "template_yyvrqqr",
      {
        email: "carlos@gmail.com",
        message: "Gola",
      },
      "N00Fs9C1hV_wWVj-x"
    );
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
