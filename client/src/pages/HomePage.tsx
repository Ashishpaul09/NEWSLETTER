import { useQuery } from "@tanstack/react-query";
import NewsletterHeader from "@/components/NewsletterHeader";
import FeaturedNews from "@/components/FeaturedNews";
import WorkSection from "@/components/WorkSection";
import IdeasSection from "@/components/IdeasSection";
import StuffSection from "@/components/StuffSection";
import SubscribeSection from "@/components/SubscribeSection";
import ArchiveSection from "@/components/ArchiveSection";
import { Article, Newsletter } from "@shared/schema";

export default function HomePage() {
  const { data: workArticles = [] } = useQuery<Article[]>({
    queryKey: ["/api/articles?section=work"],
  });

  const { data: ideasArticles = [] } = useQuery<Article[]>({
    queryKey: ["/api/articles?section=ideas"],
  });

  const { data: stuffArticles = [] } = useQuery<Article[]>({
    queryKey: ["/api/articles?section=stuff"],
  });

  const { data: newsletters = [] } = useQuery<Newsletter[]>({
    queryKey: ["/api/newsletters"],
  });

  return (
    <>
      <NewsletterHeader />
      <FeaturedNews />
      <WorkSection articles={workArticles} />
      <IdeasSection articles={ideasArticles} />
      <StuffSection articles={stuffArticles} />
      <SubscribeSection />
      <ArchiveSection newsletters={newsletters.slice(0, 3)} />
    </>
  );
}
