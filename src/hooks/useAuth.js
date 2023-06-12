import { useContext } from "react"
import { AuthContext } from "../context/ProvideAuth"

export const useAuth = () => {
    return useContext(AuthContext);
}