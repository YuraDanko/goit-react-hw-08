import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactsPage = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
