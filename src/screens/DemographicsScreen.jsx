import React, { useState } from "react";
import PropTypes from "prop-types";
import "./DemographicsScreen.css";

const DemographicsScreen = ({ onDemographicsComplete }) => {
  const [formData, setFormData] = useState({
    ageRange: "",
    gender: "",
    primaryLanguage: "",
    birthCountry: "",
    currentCountry: "",
    yearsInCountry: "",
    deviceType: "",
    screenSize: "",
    lighting: ""
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.ageRange) newErrors.ageRange = "Age range is required";
    if (!formData.primaryLanguage.trim()) newErrors.primaryLanguage = "Primary language is required";
    if (!formData.currentCountry.trim()) newErrors.currentCountry = "Current country is required";
    if (!formData.deviceType) newErrors.deviceType = "Device type is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onDemographicsComplete({
        ...formData,
        timestamp: new Date().toISOString()
      });
    }
  };

  return (
    <div className="demographics-screen">
      <div className="demographics-container">
        <header className="demographics-header">
          <h2>👤 Participant Information</h2>
          <p className="info-text">
            This information helps us understand how different backgrounds affect color-animal associations
          </p>
        </header>

        <form className="demographics-form" onSubmit={handleSubmit}>
          {/* Required Demographics */}
          <div className="form-section">
            <h3>Basic Information</h3>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="ageRange">Age Range *</label>
                <select 
                  id="ageRange"
                  name="ageRange" 
                  value={formData.ageRange}
                  onChange={(e) => handleInputChange("ageRange", e.target.value)}
                  className={errors.ageRange ? "error" : ""}
                  required
                >
                  <option value="">Select age range</option>
                  <option value="18-24">18-24</option>
                  <option value="25-34">25-34</option>
                  <option value="35-44">35-44</option>
                  <option value="45-54">45-54</option>
                  <option value="55-64">55-64</option>
                  <option value="65+">65+</option>
                </select>
                {errors.ageRange && <span className="error-message">{errors.ageRange}</span>}
              </div>

              <div className="field">
                <label htmlFor="gender">Gender Identity</label>
                <select 
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                >
                  <option value="">Prefer not to say</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Cultural Background */}
          <div className="form-section">
            <h3>Cultural Background</h3>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="primaryLanguage">Primary Language *</label>
                <input 
                  id="primaryLanguage"
                  type="text" 
                  name="primaryLanguage" 
                  value={formData.primaryLanguage}
                  onChange={(e) => handleInputChange("primaryLanguage", e.target.value)}
                  placeholder="e.g., English, Spanish, Mandarin" 
                  className={errors.primaryLanguage ? "error" : ""}
                  required 
                />
                {errors.primaryLanguage && <span className="error-message">{errors.primaryLanguage}</span>}
              </div>

              <div className="field">
                <label htmlFor="birthCountry">Country of Birth</label>
                <input 
                  id="birthCountry"
                  type="text" 
                  name="birthCountry" 
                  value={formData.birthCountry}
                  onChange={(e) => handleInputChange("birthCountry", e.target.value)}
                  placeholder="e.g., United States, Mexico, China" 
                />
              </div>

              <div className="field">
                <label htmlFor="currentCountry">Current Country of Residence *</label>
                <input 
                  id="currentCountry"
                  type="text" 
                  name="currentCountry" 
                  value={formData.currentCountry}
                  onChange={(e) => handleInputChange("currentCountry", e.target.value)}
                  className={errors.currentCountry ? "error" : ""}
                  required 
                />
                {errors.currentCountry && <span className="error-message">{errors.currentCountry}</span>}
              </div>

              <div className="field">
                <label htmlFor="yearsInCountry">Years in Current Country</label>
                <select 
                  id="yearsInCountry"
                  name="yearsInCountry"
                  value={formData.yearsInCountry}
                  onChange={(e) => handleInputChange("yearsInCountry", e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-10">3-10 years</option>
                  <option value="11-20">11-20 years</option>
                  <option value="21+">21+ years</option>
                  <option value="birth">Since birth</option>
                </select>
              </div>
            </div>
          </div>

          {/* Technical Setup */}
          <div className="form-section">
            <h3>Display Setup</h3>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="deviceType">Device Type *</label>
                <select 
                  id="deviceType"
                  name="deviceType" 
                  value={formData.deviceType}
                  onChange={(e) => handleInputChange("deviceType", e.target.value)}
                  className={errors.deviceType ? "error" : ""}
                  required
                >
                  <option value="">Select device</option>
                  <option value="desktop">Desktop Computer</option>
                  <option value="laptop">Laptop</option>
                  <option value="tablet">Tablet</option>
                  <option value="phone">Smartphone</option>
                </select>
                {errors.deviceType && <span className="error-message">{errors.deviceType}</span>}
              </div>

              <div className="field">
                <label htmlFor="screenSize">Screen Size (approximate)</label>
                <select 
                  id="screenSize"
                  name="screenSize"
                  value={formData.screenSize}
                  onChange={(e) => handleInputChange("screenSize", e.target.value)}
                >
                  <option value="">Select size</option>
                  <option value="small">Small (&lt; 15")</option>
                  <option value="medium">Medium (15-24")</option>
                  <option value="large">Large (25-32")</option>
                  <option value="xlarge">Extra Large (&gt; 32")</option>
                </select>
              </div>
            </div>

            <div className="lighting-check">
              <label>Viewing Environment</label>
              <div className="radio-group">
                <label>
                  <input 
                    type="radio" 
                    name="lighting" 
                    value="bright" 
                    checked={formData.lighting === "bright"}
                    onChange={(e) => handleInputChange("lighting", e.target.value)}
                  /> 
                  Bright room
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="lighting" 
                    value="normal" 
                    checked={formData.lighting === "normal"}
                    onChange={(e) => handleInputChange("lighting", e.target.value)}
                  /> 
                  Normal lighting
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="lighting" 
                    value="dim" 
                    checked={formData.lighting === "dim"}
                    onChange={(e) => handleInputChange("lighting", e.target.value)}
                  /> 
                  Dim lighting
                </label>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="primary-button">
              Continue to Color Vision Test →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

DemographicsScreen.propTypes = {
  onDemographicsComplete: PropTypes.func.isRequired,
};

export default DemographicsScreen;
