import emailjs from '@emailjs/browser';

type IEmailPayload = {
  name: string;
  email: string;
  message: string;
}

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const sendEmail = async (payload: IEmailPayload) => {
  const time =  new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
  const date = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  return emailjs.send(
    serviceId,
    templateId,
    {
      name: payload.name,
      email: payload.email,
      message: payload.message,
      time: `${time} on ${date}`,
    }
  );
};




