import { useAuth } from "../../context/AuthProvider/useAuth"


export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth();

    if (!auth.email) {
        return <h1 style={{ color: "green" }}>Não foi</h1>
    }

    return children;
}