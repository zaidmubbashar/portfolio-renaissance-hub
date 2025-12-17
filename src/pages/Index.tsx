import HeroSection from "@/components/resume/HeroSection";
import ProfileSection from "@/components/resume/ProfileSection";
import ExperienceSection from "@/components/resume/ExperienceSection";
import SkillsSection from "@/components/resume/SkillsSection";
import ProjectsSection from "@/components/resume/ProjectsSection";
import EducationSection from "@/components/resume/EducationSection";
import FooterSection from "@/components/resume/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProfileSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <FooterSection />
    </main>
  );
};

export default Index;