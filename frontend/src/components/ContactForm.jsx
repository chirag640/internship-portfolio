import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://internship-portfolio-server-chirag-chaudharys-projects.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="w-10/12 my-10 p-5 border rounded-lg shadow-md bg-white dark:bg-gray-800 dark:text-white">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">Name</label>
          <input
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
          <input
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="subject">Subject</label>
          <input
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="message">Message</label>
          <textarea
            className="mt-1 block w-full px-3 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary-color dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <button
          className="relative overflow-hidden border border-primary-color bg-primary-color text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center"
          type="submit"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-red-500 dark:text-red-400">{status}</p>}
    </div>
  );
}
