"use client";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";

import { benefitOne, benefitTwo } from "@/components/data";
import { ReadMore } from "@/components/ReadMore";
import TeacherSlider from "@/components/TeacherSlider";
import AcademicOfferSlider from "@/components/AcademicOfferSlider";
import { Statistics } from "@/components/Statistics";

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <ReadMore />
        <TeacherSlider />
      </Container>
      <AcademicOfferSlider />
      <Container>
        <Statistics />
      </Container>
    </>
  );
}
