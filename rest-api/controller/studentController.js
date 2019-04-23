const students=require('../student');

let filterUser=(branch)=>{
	if(branch==="All Students")
	{
		return students;
	}
	return students.filter(item=>{
		if(item.branch===branch)
			return item;
	})
}

const getStudents=(query,res)=>{
	if(query.branch){
		let filteredUsers=filterUser(query.branch);
		if(filteredUsers.length) {
		res.end(JSON.stringify(filteredUsers));
	   }
	}
	else
		res.end(JSON.stringify(students));
}
module.exports={getStudents}