// app/cursos/[id]/page.tsx

import CourseDetail from "../components/CourseDetail";
import {courseData} from "@/app/cursos/types/course";


export default function CoursePage({params}: { params: { id: string } }) {
    // In the future, fetch course data based on params.id
    return <CourseDetail data={courseData}/>
}
