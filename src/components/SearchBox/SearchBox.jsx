import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useId } from 'react';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

export default function SearchBox() {
        const dispatch = useDispatch();    
        const filter = useSelector(selectNameFilter);

        const filterFieldId = useId();
        return (
            <div className={css.filterDiv}>
            <label htmlFor={filterFieldId}>Find contacts by name</label>
            <input
                type="text"
                id={filterFieldId}
                value={filter}
                onChange={(event) => dispatch(changeFilter(event.target.value))}
            />
            </div>
    );
}