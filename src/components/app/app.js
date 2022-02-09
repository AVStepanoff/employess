import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployessList from "../employess-list/employess-list";
import "./app.css";
import EmployersAddForm from "../employess-add-form/employess-add-form";

function App() {
    return(
        <div className='app'>
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployessList/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;