import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item'




const EmployessList =({data,onDelite}) =>{

    const newEmployees = data.map(item=>{
        const{id,...itemProps}=item;
        return(
            
            <EmployeesListItem {...itemProps}
            key={id}
            onDelite={()=>onDelite(id)}/>
        )
        
        
    })
    return (
        <ul className="list-group app-list">
             {newEmployees}
        </ul>
    )
}

export default EmployessList;