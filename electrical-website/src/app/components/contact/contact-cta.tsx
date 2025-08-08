import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ConfirmationMessage from './elements/confirmation';
import ContactFormInputs from './elements/contactField';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from 'axios';

const ContactFormCta = () => {
  const router = useRouter(); 
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    address: '',
    serviceType: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  

  const { executeRecaptcha } = useGoogleReCaptcha();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    

    if(!executeRecaptcha) {
      console.log("not available to execute recaptcha")
      return
    }
    try {

      const gRecaptchaToken = await executeRecaptcha('inquirySubmit')
      console.log('Token:', gRecaptchaToken);

      const responseRecaptcha = await axios({
        method: "post",
        url: "/api/recaptcha-submit",
        data: {
          gRecaptchaToken
        },
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-type": "application/json",
        }
      })

      if(responseRecaptcha?.data?.success === true){
        console.log(`Success with score: ${responseRecaptcha?.data?.score}`)
      } else {
        setSubmitError('Failed reCAPTCHA verification. Please try again.');
        return;
      }

      const submitData = {
        from_name: 'Electrical Services Website',
        subject: 'New Contact Form Submission',
        fullName: formData.fullName,
        mobile: formData.mobile,
        email: formData.email,
        address: formData.address,
        serviceType: formData.serviceType,
        description: formData.description
      };
      
      const response = await fetch('/api/resend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submitData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        setShowConfirmation(true);
        // Reset form
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          address: '',
          serviceType: '',
          description: ''
        });
        
        // Hide confirmation after 5 seconds
        setTimeout(() => {
          setShowConfirmation(false);
          router.push('/thankyou');
        }, 4000);
      } else {
        setSubmitError('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      console.log(error)
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showConfirmation) {
    return (
      <ConfirmationMessage />
    );
  }

  return (
    <>
      <ContactFormInputs 
        handleSubmit={handleSubmit}
        submitError={submitError}
        formData={formData}
        handleChange={handleChange}
        isSubmitting={isSubmitting}
      />
    </>
  );
};

export default ContactFormCta;