"use client";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { ReadMore } from "@/components/ReadMore";
import TeacherSlider from "@/components/TeacherSlider";
import AcademicOfferSlider from "@/components/AcademicOfferSlider";
import { Statistics } from "@/components/Statistics";
import Events from "@/components/Events";

export default function Home() {
  return (
    <>
      <Hero />
      <ReadMore />
      <TeacherSlider />
      <Events />
      <AcademicOfferSlider />
      <Statistics />
    </>
  );
}
