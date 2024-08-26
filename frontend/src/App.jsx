import { useEffect } from "react";
import GlobalStyle from "./GlobalStyles"
import Router from "./routes/Router";
import { useDispatch, useSelector } from "react-redux";
import { alertNotification } from "./redux/slices/socketSlices/notificationSlices/notificationSlices";

function App() {
  const statusNofitication = useSelector( state => state.notificationSlices.status );
  const { userReceptor } = useSelector(state => state.notificationSlices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(alertNotification());
  }, [ statusNofitication, userReceptor ]);
  
  return (
    <>
     <Router/>
     <GlobalStyle/>
    </>
  )
}

export default App
