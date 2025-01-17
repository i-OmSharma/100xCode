import { useNavigate } from "react-router-dom"

export default function Appbar() {
    const navigate = useNavigate();

    return <div>
        <button onClick={() => {
            navigate("/landing")
        }}>Landing</button>
        <button onClick={() => {
            navigate("/dashboard")
        }}>Dashboard</button>
    </div>
}