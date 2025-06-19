export const CoursesList = () => {

    const courses = ["React", "Next.js", "TypeScript"];

    return (
        <div>
        <h1>Courses List</h1>
        <ul>
            {courses.map((course) => (<li key={course}>{course}</li>))}
        </ul>
        </div>
    );
}