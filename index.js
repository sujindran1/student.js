const students = [
  {
    name: 'Aditya',
    chemistryMarks: 80,
    biologyMarks: 90,
    dateOfBirth: '01-01-1999',
  },
  {
    name: 'karthik',
    chemistryMarks: 90,
    biologyMarks: 85,
    dateOfBirth: '03-02-1998',
  },
  {
    name: 'Abbas',
    chemistryMarks: 85,
    biologyMarks: 85,
    dateOfBirth: '01-01-1999',
  },
  {
    name: 'Sarah',
    chemistryMarks: 80,
    biologyMarks: 85,
    dateOfBirth: '01-01-1999',
  },
];

students.sort((a, b) => {
  if (a.chemistryMarks + a.biologyMarks !== b.chemistryMarks + b.biologyMarks) {
    // Sort by total marks in descending order
    return (
      b.chemistryMarks + b.biologyMarks - (a.chemistryMarks + a.biologyMarks)
    );
  }

  if (a.biologyMarks !== b.biologyMarks) {
    // Sort by biology marks in descending order
    return b.biologyMarks - a.biologyMarks;
  }

  // Sort by date of birth in ascending order
  const aDate = new Date(a.dateOfBirth.split('-').reverse().join('-'));
  const bDate = new Date(b.dateOfBirth.split('-').reverse().join('-'));
  return aDate - bDate;
});

console.log(students);
