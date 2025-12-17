import { ContactForm } from '../components/modules/contact/ContactForm';
import { Location } from '../components/modules/contact/Location';

export const Contact = () => {
  return (
    <div className="bg-white">
      <ContactForm />
      <Location />
    </div>
  );
};
