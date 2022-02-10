import './employess-list.css';
import EmployessListItem from '../employess-list-item/employess-list-item';

const EmployessList = ({ data }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item; 
        /* деструктурируем item, вытаскивая отдельно id, 
        остальное собираем в itemProps */
        return (
            <EmployessListItem key={id} {...itemProps} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
} 

export default EmployessList;