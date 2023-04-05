import styles from './Contact.module.scss';
import EmailIcon from '@mui/icons-material/Email';
import { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import HandshakeIcon from '@mui/icons-material/Handshake';

const Contact = () => {

  const [state, handleSubmit] = useForm("mjvdaagk");
  const [send, setSend] = useState(false)

  useEffect(() => {
    setSend(true)
    setTimeout(() => {
      setSend(false)
         }, 5000);
  }, [state.submitting])

  return (
    <div className={styles.contact} id="contact">
      <div className={styles.header}>
        <img
          className={styles.icon}
          src={`${process.env.PUBLIC_URL}/images/sun.svg`} 
          alt="Main image"
        />
        <h1>Get in touch</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.left_wrapper}>
            <div className={styles.contact_box}>
              <EmailIcon className={styles.icon}/>
              <div>
                <h1>Message Me</h1>
                <a href="mailto:hello@marcindev.com">hello@marcindev.com</a>
              </div>
            </div>
            <div className={styles.contact_box}>
              <EmailIcon className={styles.icon}/>
              <div>
                <h1>Let's talk</h1>
                <span>(+48) 694 943 167</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>

          {send
          
          ? 

          <div className={styles.success}>
            <HandshakeIcon className={styles.icon}/>
            <h1>Message sent!</h1>
            <span>Thank You for reaching out!</span>
          </div>

          :

          <form onSubmit={handleSubmit}>
            <div className={styles.form_field}>
              <label htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email" 
                name="email"
              />
            </div>
            <div className={styles.form_field}>
              <label htmlFor="email">
                Message
              </label>
              <textarea
                id="message"
                name="message"
              />
            </div>
            <button type="submit" disabled={state.submitting}>
              Send              
            </button>
          </form>

          } 
          
        </div>
          
      </div>

      

    </div>
  )
}

export default Contact
