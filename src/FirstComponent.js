import React, { useState } from 'react';
import { Input, Button, Radio, message, DatePicker } from 'antd';
import './FirstComponent.css';
import dayjs from 'dayjs';

const FirstComponent = () => {
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    gender: '',
    plan: '',
    sel_opt: '',
    date: null,
  });
  const [passwordStrength, setPasswordStrength] = useState('');
  const [currentSection, setCurrentSection] = useState('section1');
  const [errors, setErrors] = useState({ error1: '', error2: '' });
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  const handleGenderChange = (e) => {
    setFormValues({ ...formValues, gender: e.target.value });
  };

  const checkPasswordStrength = (password) => {
    const strengthCriteria = {
      length: password.length >= 5,
      letters: /[A-Za-z]+/.test(password),
      numbers: /[0-9]+/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    const strength = Object.values(strengthCriteria).filter(Boolean).length;
    setPasswordStrength(strength);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password, gender, plan, sel_opt, date } = formValues;

    // Validation for section1
    if (!firstname || !lastname || !email || !password || !gender) {
      message.error('Please fill in all fields.');
      return;
    }

    // Validation for section2
    if (!plan) {
      setErrors((prev) => ({ ...prev, error1: 'Please select anyone' }));
      return;
    }

    if (sel_opt === 'Select an Option') {
      setErrors((prev) => ({ ...prev, error2: 'Please select anyone' }));
      return;
    }

    // Validation for section3
    if (!date) {
      message.error('Please select a date and time.');
      return;
    }

    // All validations passed, show thank you message
    setFormSubmitted(true);
    message.success(`Thank you! We've sent an email to ${email}`);
  };

  const handleSectionChange = (e) => {
    setCurrentSection(e.target.value);
  };

  return (
    <div className="wrapper">
      <div className="formMiddleBlock">
        <div className="brandSection">
          <h1 className='h1-section'>Manifest in an Empowering Software Career</h1>
        </div>
        {!formSubmitted ? (
          <form onSubmit={handleSubmit}>
            <p className="p1-form">
              Experience how BRS with Nyros helps you to BUILD a strong career
              foundation that allows you to RISE & SHINE as a real-life
              ‘world-class’ professional.
            </p>
            {currentSection === 'section1' && (
              <>
                <Input
                  name="firstname"
                  placeholder="First Name"
                  value={formValues.firstname}
                  onChange={handleChange}
                  className="input-field"
                />
                <Input
                  name="lastname"
                  placeholder="Last Name"
                  value={formValues.lastname}
                  onChange={handleChange}
                  className="input-field"
                />
                <div className="radioGroup">
                  <label>Gender</label>
                  <Radio.Group onChange={handleGenderChange} value={formValues.gender}>
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                  </Radio.Group>
                </div>
                <Input
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="input-field"
                />
                <Input.Password
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                  className="input-field"
                />
                <div className="passwordStrength">
                  {passwordStrength > 0 && (
                    <span className={`strength-bar strength-${passwordStrength}`}>
                      Strength:{' '}
                      {['Very Weak', 'Weak', 'Good', 'Strong'][passwordStrength - 1]}
                    </span>
                  )}
                </div>
              </>
            )}
            {currentSection === 'section2' && (
              <>
                <h1 className='h1-section2'>Tell us about your career goal</h1>
                <p>We've got some great lessons waiting for you, we wish you the right choice.</p>
                <div className="plans">
                  {/* Plan options and error messages */}
                  <label className="plan basic-plan" htmlFor="basic">
                    <input
                      type="radio"
                      name="plan"
                      id="basic"
                      value="a"
                      checked={formValues.plan === 'a'}
                      onChange={handleChange}
                    />
                    <div className="plan-content">
                      <div className="plan-details">
                        <span>Try for 1 Week</span>
                      </div>
                    </div>
                  </label>
                  <label className="plan complete-plan" htmlFor="gettingStarted">
                    <input
                      type="radio"
                      id="gettingStarted"
                      value="b"
                      name="plan"
                      checked={formValues.plan === 'b'}
                      onChange={handleChange}
                    />
                    <div className="plan-content">
                      <div className="plan-details">
                        <span>Getting Started</span>
                      </div>
                    </div>
                  </label>
                  <label className="plan complete-plan" htmlFor="jobReady">
                    <input
                      type="radio"
                      id="jobReady"
                      value="c"
                      name="plan"
                      checked={formValues.plan === 'c'}
                      onChange={handleChange}
                    />
                    <div className="plan-content">
                      <div className="plan-details">
                        <span>Job Ready</span>
                      </div>
                    </div>
                  </label>
                  <div>
                    <p id="error1" style={{ color: 'red' }}>{errors.error1}</p>
                  </div>
                </div>
                <label>Who are you?</label>
                <select
                  id="sel_opt"
                  name="sel_opt"
                  value={formValues.sel_opt}
                  onChange={handleChange}
                >
                  <option value="">Select an Option</option>
                  <option value="a">Student</option>
                  <option value="b">Graduate</option>
                  <option value="c">Post Graduate</option>
                </select>
                <div>
                  <p id="error2" style={{ color: 'red' }}>{errors.error2}</p>
                </div>
                
              </>
            )}
            {currentSection === 'section3' && (
              <>
                <h1 className='h1-section3'>When can we contact you?</h1>
                <p>Book a time and date slot with one of our team.</p>
                <div className='calender'>
                  <DatePicker
                    showTime
                    onChange={(date) => setFormValues({ ...formValues, date })}
                    disabledDate={(current) => current && current < dayjs().startOf('day')}
                    className="input-field"
                  />
                </div>
                <div>
                  <Button className='submit-final' type="primary" htmlType="submit">SUBMIT</Button>
                </div>
              </>
            )}
            <div className="radio-section">
              <Radio.Group
                onChange={handleSectionChange}
                value={currentSection}
                className="horizontal-radio"
              >
                <Radio.Button value="section1">Section 1</Radio.Button>
                <Radio.Button value="section2">Section 2</Radio.Button>
                <Radio.Button value="section3">Section 3</Radio.Button>
              </Radio.Group>
            </div>
          </form>
        ) : (
          <div className="thank-you-message">
            <p>We've sent an email to {formValues.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FirstComponent;
