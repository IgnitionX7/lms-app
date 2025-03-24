import getCourseBySlug from "@/sanity/lib/courses/getCourseBySlug";
import { urlFor } from "@/sanity/lib/image";
import { Metadata } from "next";

export async function getCourseMetadata(slug: string): Promise<Metadata> {
  const course = await getCourseBySlug(slug);

  return {
    title: course?.title || "Course",
    description: course?.description || "Learn with us",
    openGraph: {
      title: course?.title,
      description: course?.description,
      images: [
        {
          url: course?.image ? urlFor(course.image).url() : "",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
