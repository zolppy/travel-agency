import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { Section } from "@/app/components/Section";
import { H2 } from "@/app/components/H2";
import { ContactWrapper } from "@/app/components/ContactWrapper";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";

export const Contact = () => {
  return (
    <Section>
      <H2>Contact</H2>
      <p>Let us book your next trip!</p>
      <ul>
        <ContactWrapper>
          <FaMapMarkerAlt />
          <p>Chicago, US</p>
        </ContactWrapper>
        <ContactWrapper>
          <FaPhone />
          <p>Phone: +00 151515</p>
        </ContactWrapper>
        <ContactWrapper>
          <FaEnvelope />
          <p>Email: mail@mail.com</p>
        </ContactWrapper>
      </ul>
      <form className={twMerge(clsx("flex flex-col gap-y-3"))}>
        <Input type="text" placeholder="Name" required={true} />
        <Input type="email" placeholder="E-mail" required={true} />
        <textarea
          placeholder="Message"
          required={true}
          className={twMerge(clsx("bg-white px-2 py-4 border border-[#ccc]"))}
        ></textarea>
        <Button type="submit" className="uppercase">
          Send message
        </Button>
      </form>
    </Section>
  );
};

Contact.displayName = "Contact";
