import { Link } from "react-router-dom";
import "./GoBack.css"

export default function GoBack(){

    return (
        <Link className="go-back" to=".." relative="path">Go Back</Link>
    )
}