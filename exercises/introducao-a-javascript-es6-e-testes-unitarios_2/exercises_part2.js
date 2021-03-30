const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const insertShift = (object, newKey, newValue) => {object[newKey] = newValue; return object;}
//  console.log(insertShift(lesson2, 'turno', 'manhã'));

 const listKeys = (object) => { return Object.keys(object);}
//  console.log(listKeys(lesson1));

const objectSize = (object) => { return Object.keys(object).length }
//  console.log(objectSize(lesson3));

const listValues = (object) => { return Object.values(object);}
// console.log(listValues(lesson1));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

const allStudents = () => {
  const lessons = Object.keys(allLessons);
  let studentsNumber = 0;
  lessons.forEach((lessonKey) => {
    const lessonItem = allLessons[lessonKey];
    studentsNumber += lessonItem.numeroEstudantes;
  })
  return studentsNumber;
}
console.log(allStudents());