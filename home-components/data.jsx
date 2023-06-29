import appColors from "../themes/appColors";
import { BsBox, BsCodeSlash } from "react-icons/bs";
import { MdOutlineQuestionMark } from "react-icons/md";
import Image from "next/image";

export const imgs = [
  { src: "/home/organisations/fincent.svg", width: 167, height: 48 },
  ,
  { src: "/home/organisations/apty.svg", width: 93, height: 48 },
  {
    src: "/home/organisations/revenuehero.svg",
    width: 207,
    height: 48,
  },
  { src: "/home/organisations/storylane.svg", width: 126, height: 48 },
  { src: "/home/organisations/oloid.svg", width: 87, height: 48 },
  { src: "/home/organisations/beacon.svg", width: 159, height: 48 },
  { src: "/home/organisations/bitespeed.svg", width: 170, height: 48 },
  { src: "/home/organisations/nirvana.svg", width: 272, height: 48 },
];

export const measureCritical = [
  {
    name: "Coding Simulator",
    para: "Advanced Coding Simulators to hire and develop the best coders",
    icon: <BsCodeSlash color={appColors.appblue["100"]} size={30} />,
  },
  {
    name: "Case Study Simulator",
    para: "Simulate exciting casestudies and business use-cases to get real-world experience.",
    icon: <Image src="/platform/box-assementimg.svg" width={30} height={30} alt="img"/>,
  },
  {
    name: "Various Question Format",
    para: "KBA, MCQs, Case Studies and Simulations specific to job roles and skills.",
    icon: <MdOutlineQuestionMark color={appColors.appblue["100"]} size={30} />,
  },
];

export const LxpData = [
  {
    heading: "Human Resources",
    title: "5 Things Recruiters can focus on during a tech hiring freeze",
    para: "Technology plays a crucial role in almost every industry in today’s rapidly evolving business landscape...",
    author: "by John Doe Kumar",
    date: "May 05, 2023",
    img: "/home/ipx-img.svg",
  },
  {
    heading: "Human Resources",
    title: "5 Things Recruiters can focus on during a tech hiring freeze",
    para: "Technology plays a crucial role in almost every industry in today’s rapidly evolving business landscape...",
    author: "by John Doe Kumar",
    date: "May 05, 2023",
    img: "/home/ipx-img.svg",
  },
  {
    heading: "Human Resources",
    title: "5 Things Recruiters can focus on during a tech hiring freeze",
    para: "Technology plays a crucial role in almost every industry in today’s rapidly evolving business landscape...",
    author: "by John Doe Kumar",
    date: "May 05, 2023",
    img: "/home/ipx-img.svg",
  },
];

export const digitalTransformation = [
  {
    bgcolor:
      "radial-gradient(50% 50% at 50% 50%, rgba(51, 157, 255, 0.12) 10%, rgba(51, 157, 255, 0.0075) 80%)",
    boxColor: appColors.appblue["90"],
    head: "Campus Engagement",
    src: "/home/blue-puzzle.svg",
    list: ["Screening Assessments", "Hackathons", "Graduate Hire"],
  },
  {
    bgcolor:
      "radial-gradient(50% 50% at 50% 50%, rgba(255, 161, 100, 0.12) 10%, rgba(255, 161, 100, 0.0075) 80%)",
    boxColor: appColors.apporange["90"],
    head: "Hiring",
    src: "/home/orange-diamond.svg",
    list: ["Pre-Hire Assessments", "Interview-As-Service", "New-Hire Training"],
    mt: { base: "0px", xl: "15px" },
  },
  {
    bgcolor:
      "radial-gradient(50% 50% at 50% 50%, rgba(166, 135, 255, 0.12) 10%, rgba(166, 135, 255, 0.0075) 80%)",
    boxColor: appColors.purple["90"],
    head: "Onboarding / Induction",
    src: "/home/purple-handshake.svg",
    list: ["Full Stack Skilling", "Role-Readiness"],
  },
  {
    bgcolor:
      "radial-gradient(50% 50% at 50% 50%, rgba(255, 117, 129, 0.12) 10%, rgba(255, 117, 129, 0.0075) 80%)",
    boxColor: appColors.red["90"],
    head: "Continuous Learning",
    src: "/home/red-bulb.svg",
    list: [
      "Stack-Based Learning",
      "LMS + Content + Assessments",
      "Role-Based Skilling",
    ],
    mt: { base: "0px", xl: "15px" },
  },
  {
    bgcolor:
      "radial-gradient(50% 50% at 50% 50%, rgba(14, 198, 10, 0.12) 10%, rgba(14, 198, 10, 0.0075) 80%)",
    boxColor: appColors.green["90"],
    head: "Talent Mobility",
    src: "/home/green-target.svg",
    list: ["Internal Job Movement", "Competence Matrix", "Skill Gap Analysis"],
  },
];
