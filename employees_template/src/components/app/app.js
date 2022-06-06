import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployessList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


class App extends Component{

    constructor(props){
        super(props);
        this.state={
            data:[
                {name:'Suleiman H.',salary:800 ,id:1  },
                {name:'Hurrem H.',salary:1200 ,id:2 },
                {name:'Ibrahim P.',salary:1500 ,id:3 },
                {name:'Tanya V..',salary:1500 ,id:4 }
            ]
        }
    }
    

    deliteItem=(id)=>{
        this.setState(({data})=>{
            // const index = data.findIndex(elem=>elem.id===id) /**Помещение в переменную все id которые не павны id на котором произошел клик */
            return{
                data: data.filter(item=>item.id!==id)
            }
            
        })
    }
    render(){
        
        return (
            <div className="app">
               <AppInfo/>
               <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                </div>
               <EmployessList data={this.state.data} 
               onDelite={this.deliteItem}
               />
               <EmployeesAddForm/>
            
            </div>
          
        );
    }
    
}

export default App;