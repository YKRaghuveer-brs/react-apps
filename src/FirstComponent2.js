// FirstComponent2.jsx
import React, { useState } from 'react';
import './FirstComponent2.css'; // You can create a CSS file for styling

const FirstComponent2 = () => {
  const [formValues, setFormValues] = useState({
    plan: '',
    sel_opt: 'a', // Default selected option
  });
  const [errors, setErrors] = useState({ error1: '', error2: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (e) => {
    e.preventDefault();
    const { plan, sel_opt } = formValues;
    let error1 = '', error2 = '';

    if (!plan) {
      error1 = 'Please select anyone';
    }

    if (sel_opt === 'Select an Option') {
      error2 = 'Please select anyone';
    }

    setErrors({ error1, error2 });

    if (!error1 && !error2) {
      // Proceed with form submission logic
      alert('Form submitted successfully!'); // Replace with your logic
    }
  };

  return (
    <div className="wrapper h-100">
      <div className="Grid Grid--full Grid--center h-100">
        <div className="Grid-cell h-80 OuterFormBlock">
          <div className="Grid Grid--gutters Grid--cols-2 h-100">
            <div className="Grid-cell h-100">
              <div className="Grid Grid--full Grid--center h-100 overflow">
                <div className="Grid-cell">
                  <div className="formMiddleBlock">
                    <div className="brandSection">
                      
                      <h1>Tell us about your career goal</h1>
                      <p>
                        We've got some great lessons waiting for you, we wish
                        you the right choice.
                      </p>
                    </div>
                    <form name="myform" onSubmit={validate}>
                      <div className="plans">
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

                        <label className="plan complete-plan" htmlFor="jrDev">
                          <input
                            type="radio"
                            id="jrDev"
                            value="d"
                            name="plan"
                            checked={formValues.plan === 'd'}
                            onChange={handleChange}
                          />
                          <div className="plan-content">
                            <div className="plan-details">
                              <span>Jr. Web Developer</span>
                            </div>
                          </div>
                        </label>
                        <label className="plan complete-plan" htmlFor="jrDevMobile">
                          <input
                            type="radio"
                            id="jrDevMobile"
                            value="e"
                            name="plan"
                            checked={formValues.plan === 'e'}
                            onChange={handleChange}
                          />
                          <div className="plan-content">
                            <div className="plan-details">
                              <span>
                                Jr. Web <br />& <br />
                                Mobile Developer
                              </span>
                            </div>
                          </div>
                        </label>

                        <div>
                          <p id="error1" style={{ color: 'red' }}>{errors.error1}</p>
                        </div>
                      </div>

                      <label>Who are you?</label>
                      <div>
                        <select
                          id="sel_opt"
                          name="sel_opt"
                          value={formValues.sel_opt}
                          onChange={handleChange}
                        >
                          <option value="a">Student</option>
                          <option value="b">Graduate</option>
                          <option value="c">Post Graduate</option>
                        </select>
                      </div>
                      <div>
                        <p id="error2" style={{ color: 'red' }}>{errors.error2}</p>
                      </div>

                      <div>
                        <button type="submit">Continue</button>
                      </div>
                    </form>
                    <div>
                      <ul>
                        <li></li>
                        <li className="active"></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Grid-cell rightBlock h-100">
              <div className="Grid Grid--full Grid--bottom h-100">
                <div className="Grid-cell">
                  <div className="brandSection brandSectionRight">
                    <img src="assets/images/logo_large_v.png" className="brandLogo" alt="Large Logo" />
                    <h1>Manifest in an Empowering Software Career</h1>
                    <p>
                      Experience how BRS with Nyros shall help you to BUILD a
                      strong career foundation that allows you to RISE & SHINE
                      as a real-life ‘world-class’ professional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstComponent2;
