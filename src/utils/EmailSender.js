import nodemailer from 'nodemailer';
import config from '../config/config.js';
import logger from './Loggers.js';

const transporter = nodemailer.createTransport({
      service: config.EMAIL_SERVICE,
      port: 587,
      auth: {
            user: config.EMAIL,
            pass: config.EMAIL_PASS,
      },
});

const enviarMail = async (subject, html) => {
      const opts = {
            from: config.EMAIL,
            to: config.EMAIL_DESTINATARIO,
            subject: subject,
            html: html,
      };

      try {
            const result = await transporter.sendMail(opts);
      } catch (error) {
            logger.error('error', error);
            throw new Error(error.message);
      }
};
export default enviarMail;
