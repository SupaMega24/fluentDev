// app/sitemap.ts
import { MetadataRoute } from "next";
import { glossaryTerms } from "@/lib/glossary/glossary";
import { courses } from "@/lib/data";

export const revalidate = 360; // rebuild sitemap roughly hourly

const baseUrl = "https://fluentdev.vercel.app"; // TODO: switch to your canonical domain

const toSlug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/contact",
    "/glossary",
    "/courses",
    "/blog",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  // Glossary term pages
  const glossaryPages: MetadataRoute.Sitemap = glossaryTerms.map((term) => ({
    url: `${baseUrl}/glossary/${toSlug(term.term)}`,
    lastModified: new Date(),
  }));

  // Course index pages
  const coursePages: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.id}`,
    lastModified: new Date(),
  }));

  // Lesson pages (/courses/[courseId]/[lessonId])
  const lessonPages: MetadataRoute.Sitemap = courses.flatMap((course) =>
    (course.lessons || []).map((lesson) => ({
      url: `${baseUrl}/courses/${course.id}/${lesson.id}`,
      lastModified: new Date(),
    }))
  );

  return [...staticPages, ...glossaryPages, ...coursePages, ...lessonPages];
}
