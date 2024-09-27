import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }: any) {
    const context = useContext(AuthContext)?.token;

    if (!context) return <Navigate to="/login" replace />;

    return children;
}
