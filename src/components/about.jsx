import Image from "next/image";
import Card from "./card";
import javaScriptLogo from "../assets/logos/JavaScript-Logo.svg";
import javaScriptLogoWhite from "../assets/logos/JavaScript-Logo-white.svg";
import reactLogo from "../assets/logos/React-Logo.svg";
import reactLogoWhite from "../assets/logos/React-Logo-white.svg";
import nextLogo from "../assets/logos/Next-Logo.svg";
import nextLogoWhite from "../assets/logos/Next-Logo-white.svg";
import tailwindLogo from "../assets/logos/Tailwind-Logo.svg";
import tailwindLogoWhite from "../assets/logos/Tailwind-Logo-white.svg";
import gitLogo from "../assets/logos/Git-Logo.svg";
import gitLogoWhite from "../assets/logos/Git-Logo-white.svg";
import javaLogo from "../assets/logos/Java-Logo.svg";
import javaLogoWhite from "../assets/logos/Java-Logo-white.svg";
import MySQLLogo from "../assets/logos/Mysql-logo.svg";
import MySQLLogoWhite from "../assets/logos/Mysql-logo-white.svg";
import ExpressLogo from "../assets/logos/Express-logo.svg";
import ExpressLogoWhite from "../assets/logos/Express-logo-white.svg";
import { useTheme } from '@/context/themeContext';
import "../stylesheets/about.css";

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark' || theme === 'midnight';
  const javaScriptSrc = isDark ? javaScriptLogoWhite : javaScriptLogo;
  const reactSrc = isDark ? reactLogoWhite : reactLogo;
  const nextSrc = isDark ? nextLogoWhite : nextLogo;
  const tailwindSrc = isDark ? tailwindLogoWhite : tailwindLogo;
  const mysqlSrc = isDark ? MySQLLogoWhite : MySQLLogo;
  const expressSrc = isDark ? ExpressLogoWhite : ExpressLogo;
  const gitSrc = isDark ? gitLogoWhite : gitLogo;
  const javaSrc = isDark ? javaLogoWhite : javaLogo;
  const imgWidth = 35;
  const imgHeight = 35;

  return (
    <Card
      navTitle={`/specifications/about`}
      contentFirst={"About Me"}
      contentText={[
        <span key={`about-span`}>
          I’m a web developer with over a year of experience working both
          independently and as part of a team, creating visually engaging and
          highly functional websites and applications.
          <br /> I’m now seeking new opportunities to apply my skills, take on
          new challenges, and grow professionally in the field of web
          development.
        </span>,
      ]}
      id={`specificationsCard`}
      minWidth={300}
      maxWidth={400}
    >
      <footer className="w-full bg-[var(--card-bg)] aboutContainer">
        <h2 className="py-1 text-lg font-bold text-center text-brown">
          This is my current stack
        </h2>
        <hr className="w-full border-2 breakLine" />
        <ul className="grid grid-cols-4 gap-2 mx-2 my-3 justify-items-center">
          <li>
            <Image
              src={javaScriptSrc}
              alt="JavaScript Logo"
              width={imgWidth}
              height={imgHeight}
              title="JavaScript"
            />
          </li>

          <li>
            <Image
              src={reactSrc}
              alt="React Logo"
              width={imgWidth}
              height={imgHeight}
              title="React"
            />
          </li>

          <li>
            <Image
              src={nextSrc}
              alt="Next Logo"
              width={imgWidth}
              height={imgHeight}
              title="Next.js"
            />
          </li>

          <li>
            <Image
              src={tailwindSrc}
              alt="TailwindCSS Logo"
              width={imgWidth}
              height={imgHeight}
              title="TailwindCSS"
            />
          </li>

          <li>
            <Image
              src={mysqlSrc}
              alt="MySQL Logo"
              width={imgWidth}
              height={imgHeight}
              title="MySQL"
            />
          </li>

          <li>
            <Image
              src={expressSrc}
              alt="Express.js Logo"
              width={imgWidth}
              height={imgHeight}
              title="Express.js"
            />
          </li>

          <li>
            <Image
              src={gitSrc}
              alt="Git Logo"
              width={imgWidth}
              height={imgHeight}
              title="Git"
            />
          </li>

          <li>
            <Image
              src={javaSrc}
              alt="Java Logo"
              width={imgWidth}
              height={imgHeight}
              title="Java"
            />
          </li>
        </ul>
      </footer>
    </Card>
  );
}
