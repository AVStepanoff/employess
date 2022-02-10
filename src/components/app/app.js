import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployessList from "../employess-list/employess-list";
import "./app.css";
import EmployersAddForm from "../employess-add-form/employess-add-form";

function App() {

    // Эмуляция прихода данных с сервера:

    const data = [
        { name: 'John C.', salary: 800, increase: false, id: 1 },
        { name: 'Alex B.', salary: 3000, increase: true, id: 2 },
        { name: 'Micle S.', salary: 5000, increase: false, id: 3 }
    ];

    // Конец эмуляции

    return(
        <div className='app'>
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployessList data = {data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;