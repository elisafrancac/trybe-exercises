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
console.log(insertShift(lesson2, 'turno', 'manhã'));

const listKeys = (object) => { return Object.keys(object);}
console.log(listKeys(lesson1));

const objectSize = (object) => { return Object.keys(object).length }
console.log(objectSize(lesson3));

const listValues = (object) => { return Object.values(object);}
console.log(listValues(lesson1));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const lessons = Object.keys(allLessons);

const allStudents = () => {
  let studentsNumber = 0;
  lessons.forEach((lessonKey) => {
    const lessonItem = allLessons[lessonKey];
    studentsNumber += lessonItem.numeroEstudantes;
  })
  return studentsNumber;
}
console.log(allStudents());

const getKeyValue = (object, position) => {
  const objectKeys = Object.keys(object);
  return object[objectKeys[position]];
}
console.log(getKeyValue(lesson1, 0));

const verifyPair = (object, key, value) => {
  if (Object.keys(object).includes(key) && Object.values(object).includes(value)) {
    return true;
  }
  else {
    return false;
  }
}
console.log(verifyPair(lesson1, 'materia', 'Matemática'));

// Exercício Bônus

const mathStudents = (subject) => {
  let mathStudentsNumber = 0;
  lessons.forEach((lessonKey) => {
    const lessonItem = allLessons[lessonKey];
    if (lessonItem.materia == subject) {
      mathStudentsNumber += lessonItem.numeroEstudantes;
    }
  });
  return mathStudentsNumber;
}
console.log(mathStudents('Matemática'));
