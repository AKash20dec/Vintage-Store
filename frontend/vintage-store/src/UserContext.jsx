import { useNavigate } from "react-router-dom";

const { createContext, useState, useContext } = require("react");



// initialize the context
const UserContext = createContext();


// create a provider
export const UserProvider = ({children}) => {

    const navigate = useNavigate();
    // get user data from session and convert to JS using 'JSON.parse()' 
    // and store in state
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );

    const [loggedIn, setLoggedIn] = useState(currentUser !==null ? true : false);

    const logout = () => {
        sessionStorage.removeItem('user');
        setCurrentUser(null);
        setLoggedIn(false);
        navigate('/login');
    }

    return <UserContext.Provider value={{loggedIn, setLoggedIn, logout,currentUser,setCurrentUser}} >
        {children}
    </UserContext.Provider>
};

const useUserContext = () => useContext(UserContext);

export default useUserContext;