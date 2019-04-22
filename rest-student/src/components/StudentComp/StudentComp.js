import React from "react";

const StudentComp=(props)=>{
    let i=1;
    let users_list=props.users_list;
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Sr.</th>    <th>Name</th>  <th>Branch</th>
                    </tr>
                </thead>
                <tbody>
                {

                    users_list.map(item=>{
                        return(
                            <tr key={i+""+item.name}>
                                <td>{i++}</td>
                                <td>{item.name}</td>
                                <td>{item.branch}</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
export default StudentComp;