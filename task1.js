
const courses = [
    { title: 'Introduction to Web Development', price: 29.99 },
    { title: 'HTML', price: 49.99 },
 { title: 'CSS', price: 69.99 },
 { title: 'JavaScript', price: 99.99 },
{ title: 'Python', price: 89.99 },
{ title: 'JAVA', price: 99.99 },
{ title: 'Full Stack Development course', price: 199.99 },
   
];


function displayCourses() {
    const courseList = document.querySelector('.course-list');
    courseList.innerHTML = '';
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.innerHTML = `
            <h2>${course.title}</h2>
            <p>Price: $${course.price}</p>
            <button>Subscribe</button>
        `;
        
        courseList.appendChild(courseCard);
    });
}


window.addEventListener('load', () => {
    displayCourses();
});