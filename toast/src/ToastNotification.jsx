/*import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; 

const ToastNotification = () => {
  const notify = (type) => {
    console.log(`Toast type: ${type}`); 

    switch (type) {
      case 'success':
        toast.success('🦄 Success Notification!', {
          position: "top-right",
        });
        break;
      case 'error':
        toast.error('🚨 Error Notification!', {
          position: "bottom-right",
        });
        break;
      case 'warning':
        toast.warn('⚠️ Warning Notification!', {
          position: "bottom-left",
        });
        break;
      case 'info':
        toast.info('ℹ️ Info Notification!', {
          position: "top-left",
        });
        break;
      default:
        toast('🔔 Default Notification!');
    }
  };

  return (
    <div>
      <button className="success" onClick={() => notify('success')}>
        Show Success Toast
      </button>
      <button className="error" onClick={() => notify('error')}>
        Show Error Toast
      </button>
      <button className="warning" onClick={() => notify('warning')}>
        Show Warning Toast
      </button>
      <button className="info" onClick={() => notify('info')}>
        Show Info Toast
      </button>
      <ToastContainer />
    </div>
  );
};

export default ToastNotification;*/
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; 

const ToastNotification = () => {
  const notify = (type) => {
    switch (type) {
      case 'success':
        toast.success('🦄 Success Notification!', {
          position: "top-right",
        });
        break;
      case 'error':
        toast.error('🚨 Error Notification!', {
          position: "bottom-right",
        });
        break;
      case 'warning':
        toast.warn('⚠️ Warning Notification!', {
          position: "bottom-left",
        });
        break;
      case 'info':
        toast.info('ℹ️ Info Notification!', {
          position: "top-left",
        });
        break;
      default:
        toast('🔔 Default Notification!');
    }
  };

  return (
    <div className="center-container">
      <button className="success" onClick={() => notify('success')}>
        Show Success Toast
      </button>
      <button className="error" onClick={() => notify('error')}>
        Show Error Toast
      </button>
      <button className="warning" onClick={() => notify('warning')}>
        Show Warning Toast
      </button>
      <button className="info" onClick={() => notify('info')}>
        Show Info Toast
      </button>
      <ToastContainer />
    </div>
  );
};

export default ToastNotification;

