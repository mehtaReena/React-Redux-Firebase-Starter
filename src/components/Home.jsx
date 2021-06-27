import Companies from "./Companies";
import Company from "./Company";
import Person from "./Person";
import '../styles.css'

export default function Main() {
    return (
        <div className="container">
            <div className="left">
                <Companies />
            </div>
            <div className="right">
                <div>
                    <Company />
                </div>
                <div>
                    <Person />

                </div>

            </div>
        </div>
    )
}