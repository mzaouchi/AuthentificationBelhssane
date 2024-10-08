import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
const ErrorsAla = () => {
    const ala = useSelector(state=> state.ErrorsReducers)
  return (
    <div>
        {
            ala.map((el,i,t)=>
                <Alert variant="danger">
                    {el.msg}
                </Alert>
          )
        }
    </div>
  )
}

export default ErrorsAla