import './app-filter.css';


const AppFilter =()=>{


    return (
        <div className="btn-group">
            <button className="btn btn-outline-light">
                все сотрудники
            </button>
            <button className="btn btn-outline-light">
                на повышение
            </button>
            <button className="btn btn-outline-light">
                с З/П больше 1000$
            </button>
        </div>

    )
}


export default AppFilter;