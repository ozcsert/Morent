'use client';
import './styles.scss';
import { Button, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import { toast } from 'react-toastify';

interface FormData {
  fullname: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [form] = Form.useForm<FormData>();
  const fullname = form.getFieldValue('fullname');
  const email = form.getFieldValue('email');
  const subject = form.getFieldValue('subject');
  const message = form.getFieldValue('message');
  const handleSubmit = async () => {
    const data = {
      fullname: form.getFieldValue('fullname'),
      email: form.getFieldValue('email'),
      subject: form.getFieldValue('subject'),
      message: form.getFieldValue('message'),
    };

    try {
      const response = await axios.post(
        'https://6743173bb7464b1c2a639403.mockapi.io/morent/api/contact',
        data
      );
      if (response.status === 200 || response.status === 201) {
        toast.success('Your message has been sent successfully!');
        localStorage.setItem('contactFormData', JSON.stringify(data));
      } else {
        toast.error(
          'There was an issue sending your message. Please try again.'
        );
      }
      form.setFieldValue('fullname', '');
      form.setFieldValue('email', '');
      form.setFieldValue('subject', '');
      form.setFieldValue('message', '');
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
      <Form
        className="contact-form"
        onFinish={handleSubmit}
        form={form}
        initialValues={{ fullname: '', email: '', subject: '', message: '' }}
        layout="vertical"
      >
        <Form.Item
          className="item-input"
          name="fullname"
          label="Fullname"
          rules={[{ required: true, message: 'Please input your fullname!' }]}
        >
          <Input
            className="contact-input"
            type="text"
            placeholder="Fullname"
            value={fullname}
          />
        </Form.Item>
        <Form.Item
          className="item-input"
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input
            className="contact-input"
            type="email"
            placeholder="Email"
            value={email}
          />
        </Form.Item>
        <Form.Item
          className="item-input"
          name="subject"
          label="Subject"
          rules={[{ required: true, message: 'Please input your subject!' }]}
        >
          <Input
            className="contact-input"
            type="text"
            placeholder="Subject"
            value={subject}
          />
        </Form.Item>
        <Form.Item
          className="item-input"
          name="message"
          label="Message"
          rules={[{ required: true, message: 'Please input your message!' }]}
        >
          <TextArea
            className="contact-input"
            placeholder="Message"
            value={message}
          />
        </Form.Item>
        <Button className="contact-button" type="primary" htmlType="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
