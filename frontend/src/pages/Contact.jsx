import ContactForm from '../components/ContactForm';
export default function Contact() {
  return (
    <>
    <div className="px-7 py-7 bg-white dark:bg-gray-800">
        <h1 className="flex items-center gap-x-2 text-lg font-medium ">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          Contact
        </h1>
      </div>
    <div className='flex items-center justify-center py-6'>
     <ContactForm />
    </div>
    </>
  );
}
