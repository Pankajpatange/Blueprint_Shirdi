import React from "react";
import { Hero } from "@/components/Hero";
import { IntroAndTypologies } from "@/components/IntroAndTypologies";
import { FilmAndShirdi } from "@/components/FilmAndShirdi";
import { HospitalityAndCompare } from "@/components/HospitalityAndCompare";
import { JourneyAndAmenities } from "@/components/JourneyAndAmenities";
import { GalleryCarousel } from "@/components/GalleryCarousel";
import { TrustAndLocation } from "@/components/TrustAndLocation";
import { InvitationFaqBlogContact } from "@/components/InvitationFaqBlogContact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroAndTypologies />
      <FilmAndShirdi />
      <HospitalityAndCompare />
      <JourneyAndAmenities />
      <GalleryCarousel />
      <TrustAndLocation />
      <InvitationFaqBlogContact />
    </>
  );
}
