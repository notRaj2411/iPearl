import { createContext, useReducer, useEffect } from "react";
import { projectAuth } from "../firebase/config";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { user: action.payload, authIsReady: true };
    case "INV":
      return { ...state, inv: action.payload };
    case "inst":
      return { ...state, inst: action.payload };
    case "time":
      return { ...state, time: action.payload };
    case "booked":
      return { ...state, booked: action.payload };
    case "DATE":
      return { ...state, DATE: action.payload };
    case "search":
      return { ...state, search: action.payload };
    case "sop":
      return { ...state, sop: action.payload };
    case "res":
      return { ...state, res: action.payload };
    case "invtype":
      return { ...state, invtype: action.payload };
    case "restype":
      return { ...state, restype: action.payload };
    case "sopsearch":
      return { ...state, sopsearch: action.payload };
    case "ressearch":
      return { ...state, ressearch: action.payload };
    case "manusers":
      return { ...state, manusers: action.payload };
    case "bookslot":
      return { ...state, bookslot: action.payload };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
    inv: false,
    inst: null,
    time: null,
    booked: false,
    DATE: null,
    search: null,
    sop: false,
    res: false,
    invtype: 'Refrigerator',
    restype: 'Chemicals',
    sopsearch: null,
    ressearch: null,
    manusers: false,
    bookslot: false
  });

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, []);

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
