export default function getListStudentIds(studentsArray){
	if (Array.isArray(studentsArray) == false)
		return [];
	const ids = studentsArray.map((list) => list['id']);
	return ids;
}
