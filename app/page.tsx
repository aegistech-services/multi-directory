import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { FAQSection } from "@/components/sections/faq"
import { ContactSection } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
