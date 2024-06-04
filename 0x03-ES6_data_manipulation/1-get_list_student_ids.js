export default function getListStudentIds(studentsArray){
	if (Array.isArray(studentsArray) == false)
		return [];
	 return students.map(student => student.id);
}
