const users=require('../users');
let findUsers=(name)=>{
	return users.filter(item =>{
		if(item.name.startsWith(name)){
			return item;
		}
	})
}

//get the filtered users and send it to the client
const getUsers=(query,res)=>{
	if(query.name){
      let filteredUsers=findUsers(query.name);
       res.end(JSON.stringify(filteredUsers));

	} else{
		res.end(JSON.stringify(users));
	}
}
module.exports={getUsers}