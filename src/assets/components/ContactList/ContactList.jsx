import css from "./ContactList.module.css"
import Contact from "../Contact/Contact"


export default function ContactList({ filteredContact, deleteContact }) {
    

    return (
        <ul>
            {filteredContact.map((contact) => (
                <li className={css.contact} key={contact.id}>
                    <Contact data={contact} deleteContact={deleteContact} />
                </li>
            ))}
        </ul>
    );
}