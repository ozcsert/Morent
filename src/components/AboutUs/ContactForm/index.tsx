'use client';
import React, { useState } from 'react';
import './styles.scss';
import { Button, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import { toast } from 'react-toastify';

type ContactFormProps = {
  fullname: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [fullname, setFullname] = useState<ContactFormProps['fullname']>('');
  const [email, setEmail] = useState<ContactFormProps['email']>('');
  const [subject, setSubject] = useState<ContactFormProps['subject']>('');
  const [messageContent, setMessageContent] =
    useState<ContactFormProps['message']>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      fullname,
      email,
      subject,
      message: messageContent,
    };

    try {
      const response = await axios.post(
        'https://66ff850d2b9aac9c997f84c6.mockapi.io/api/morent/cars/',
        data
      );
      if (response.status === 200) {
        toast.success(
          response.data.message || 'Your message has been sent successfully!'
        );
        setFullname('');
        setEmail('');
        setSubject('');
        setMessageContent('');
      } else {
        toast.error(
          'There was an issue sending your message. Please try again.'
        );
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(
          error.response.data.message ||
            'There was an error sending your message. Please try again later.'
        );
      } else {
        toast.error(
          'There was an error sending your message. Please check your network and try again.'
        );
      }
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We value your feedback and love to hear from you
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="contact-label">Full Name</label>
        <Input
          className="contact-input"
          type="text"
          placeholder="Fullname"
          value={fullname}
          onChange={e => setFullname(e.target.value)}
        />
        <label className="contact-label">Email</label>
        <Input
          className="contact-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label className="contact-label">Subject</label>
        <Input
          className="contact-input"
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />
        <label className="contact-label">Message</label>
        <TextArea
          className="contact-input"
          placeholder="Message"
          value={messageContent}
          onChange={e => setMessageContent(e.target.value)}
        />
        <Button type="primary" onClick={handleSubmit}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
