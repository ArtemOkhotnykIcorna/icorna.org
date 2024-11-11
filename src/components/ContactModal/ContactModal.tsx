import React, { useState, useEffect, useRef } from 'react';
import './contactmodal.scss';

interface ContactModalProps {
  open: boolean;
  handleClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, handleClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [isFocused, setIsFocused] = useState(false); // Стейт для отслеживания фокуса

  // Reference for the hidden checkbox
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => setCompany(event.target.value);
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => setCategory(event.target.value);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const botToken = '7556265122:AAHjj4LQG2RQWSwxP2XZRaTcOU23u6oITQg';
    const chatId = '6607369381';
    const message = `New Contact Submission:\nName: ${name}\nCompany: ${company}\nCategory: ${category}\nEmail: ${email}`;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
      console.log("Form Submitted:", { name, company, category, email });
      
      // Clear form fields after submission
      setName('');
      setCompany('');
      setCategory('');
      setEmail('');

      // Trigger the SVG animation by checking the checkbox
      if (checkboxRef.current) {
        checkboxRef.current.checked = true;
        setTimeout(() => {
          checkboxRef.current!.checked = false;
        }, 3000); // Reset after the animation duration
      }
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
    }
  };

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [open]);

  if (!open) return null;

  return (
    <div className={`modal-overlay ${open ? 'open' : ''}`}>
      <div className={`modal-content ${isFocused ? 'no-floating' : ''}`}>
        <button onClick={handleClose} className="modal-close-button">&times;</button>
        <h2>Get Free Audit</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            className="modal-input"
          />
          <input
            type="text"
            placeholder="Your Company"
            value={company}
            onChange={handleCompanyChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            className="modal-input"
          />
          <select
            value={category}
            onChange={handleCategoryChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            className="modal-select"
          >
            <option value="" disabled>Select Category</option>
            <option value="Web Development">Web Development</option>
            <option value="Blockchain/Web3">Blockchain/Web3</option>
            <option value="Design">Design</option>
            <option value="Automation">Automation</option>
          </select>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            className="modal-input"
          />
          <div className='icon-container'>
            <input type="checkbox" id="cb" ref={checkboxRef} style={{ display: 'none' }} />
            <div className="circle"></div>   
            <div className="circle-outer"></div> 
            <svg className="icon mail">
              <polyline points="119,1 119,69 1,69 1,1"></polyline>
              <polyline points="119,1 60,45 1,1 119,1"></polyline>
            </svg>
            <svg className="icon plane">
              <polyline points="119,1 1,59 106,80 119,1"></polyline>
              <polyline points="119,1 40,67 43,105 69,73"></polyline>
            </svg>
          </div>    
          <button type="submit" className="modal-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
