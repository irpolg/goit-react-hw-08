import css from './Loader.module.css';
import {ProgressBar} from 'react-loader-spinner';

export default function Loader() {
    return (
        <div className={css.loader}>
            <ProgressBar
                visible={true}
                height='120'
                width='720'
                wrapperClass=''
                wrapperStyle= {{}}
                ariaLabel='progress-bar-loading'
                borderColor='#F4442E'
                barColor='#51E5FF'
            />
        </div>
    );
}

// =ДЗ-4 = ДЗ-5