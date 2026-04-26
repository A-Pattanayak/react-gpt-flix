const Validate = (email,password,name) => {
    const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const validateName = name === null ? true : /^[a-zA-Z\s]+$/.test(name);
    if(!validateName) return "Invalid name format";
    if(!validateEmail) return "Invalid email format";
    if(!validatePassword) return "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.";
    return null;   
} 
export default Validate
