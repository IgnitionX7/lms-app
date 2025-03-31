import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import getCourseById from "@/sanity/lib/courses/getCourseById";

import { getLessonCompletions } from "@/sanity/lib/lessons/getLessonCompletions";
import Sidebar from "@/components/Sidebar";
import { checkCourseAccess } from "@/lib/auth";
import { getStudentByClerkId } from "@/sanity/lib/student/getStudentByClerkId";

interface DashboardViewProps {
  children: React.ReactNode;
  params: Promise<{
    courseId: string;
  }>;
}

export default async function DashboardView({
  children,
  params,
}: DashboardViewProps) {
  const user = await currentUser();
  const { courseId } = await params;

  if (!user?.id) {
    return redirect("/");
  }

  const authResult = await checkCourseAccess(user?.id || null, courseId);
  if (!authResult.isAuthorized || !user?.id) {
    return redirect(authResult.redirect!);
  }

  // const [course, progress] = await Promise.all([
  //   getCourseById(courseId),
  //   getLessonCompletions(user.id, courseId),
  // ]);

  // THE BELOW CODE IS IMPORTANT AS I NEED TO PASS IN THE SANITY STUDENT ._id in the getLessonCompletions QUERY AND NOT THE ClerkId so i'm fetching the sanity ._id using the clerkId
  const student = await getStudentByClerkId(user.id);
  if (!student?._id) {
    return redirect("/");
  }

  const [course, progress] = await Promise.all([
    getCourseById(courseId),
    getLessonCompletions(student._id, courseId), // Use the Sanity student _id!
  ]);

  if (!course) {
    return redirect("/my-courses");
  }
  // console.log("course id:", courseId);
  // console.log("user id:", user.id);
  // console.log("Sidebar completedLessons prop:", progress.completedLessons);
  // console.log("Sidebar courseProgress prop:", progress.courseProgress);

  return (
    <div className="h-full">
      <Sidebar
        course={course}
        completedLessons={progress.completedLessons}
        progress={progress.courseProgress}
      />
      <main className="h-full lg:pt-[64px] pl-20 lg:pl-96">{children}</main>
    </div>
  );
}
