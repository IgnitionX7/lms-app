// import { redirect } from "next/navigation";
// import { searchCourses } from "@/sanity/lib/courses/searchCourses";

// type SearchParamsProps = {
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// };

// export default async function SearchPage({ searchParams }: SearchParamsProps) {
//   const term = await (await searchParams).term;

//   if (!term || typeof term !== "string") {
//     return redirect("/");
//   }

//   const courses = await searchCourses(term);
//   console.log(courses);
//   return <div>Searched for {term}</div>;
// }
import { redirect } from "next/navigation";
import { searchCourses } from "@/sanity/lib/courses/searchCourses";
import CourseCard from "@/components/CourseCard";
import { Search } from "lucide-react";

type SearchParamsProps = {
  searchParams: Promise<{ term: string }>;
};

export default async function SearchPage({ searchParams }: SearchParamsProps) {
  const { term } = await searchParams;

  if (!term || typeof term !== "string") {
    return redirect("/");
  }

  const decodedTerm = decodeURIComponent(term); // incase there is like a 20% sign due to spaces

  const courses = await searchCourses(decodedTerm);
  // console.log(courses);
  return (
    <div className="h-full pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Search className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Search Results</h1>
            <p className="text-muted-foreground">
              Found {courses.length} result{courses.length === 1 ? "" : "s"} for
              &quot;{decodedTerm}&quot;
            </p>
          </div>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">No courses found</h2>
            <p className="text-muted-foreground mb-8">
              Try searching with different keywords
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard
                key={course._id}
                course={course}
                href={`/courses/${course.slug}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
