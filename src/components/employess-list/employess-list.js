import './employess-list.css';
import EmployessListItem from '../employess-list-item/employess-list-item';

const EmployessList = () => {
    return (
        <ul className="app-list list-group">
            <EmployessListItem />
            <EmployessListItem />
            <EmployessListItem />
        </ul>
    )
}

export default EmployessList;