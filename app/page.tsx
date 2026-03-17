import FAQsThree from "@/components/faqs-3";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-3";
import StatsSection from "@/components/stats-3";
import TeamSection from "@/components/team";
import { Feature } from "motion";
import { div } from "motion/react-m";

export default function Home() {
  return  (
 <div>
     <HeroSection />
     <Features/>
     <IntegrationsSection />
     <StatsSection /> 
     <TeamSection />
     <FAQsThree />
     <FooterSection />
</div>
 );
} 