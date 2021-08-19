const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
 export default (fields) => {
    let errors = {};
  
    for(let field in fields) {
      const currentField = fields[field];
  
      if(currentField.required && currentField.value === '') {
        errors[field] = 'This field is required!';
      }
  
      if(currentField.required && currentField.file && !currentField.value.name) {
        errors[field] = 'This field is required!';
      }
  
      if(!errors[field] && currentField.email && !validateEmail(currentField.value)) {
        errors[field] = 'Invalid email address';
      }
  
      if(!errors[field] && currentField.minLength && currentField.value.trim().length < currentField.minLength) {
        errors[field] = `This field must have at least ${currentField.minLength} characters`;
      }
  
    }
  
    return errors;
  }