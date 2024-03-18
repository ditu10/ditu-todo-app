import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SortButton = ({handleSorting, fieldName}) =>{
    
    return(
        <span className='ms-2'>
        <FontAwesomeIcon onClick={() => handleSorting(true, fieldName)} className='me-1' icon={faArrowUp} />
        <FontAwesomeIcon onClick={() => handleSorting(false, fieldName)} icon={faArrowDown} />
        </span>
    )
}