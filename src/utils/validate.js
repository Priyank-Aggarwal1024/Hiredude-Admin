const signupValidation = (user) => {
  if (!user.name || !user.email || !user.password) {
    return "Please fill in all fields";
  }
  if (user.password.length < 6) {
    return "Password must be at least 6 characters";
  }
  if (!user.email.includes("@")) {
    return "Invalid email";
  }
};

const loginValidation = (user) => {
  if (!user.email || !user.password) {
    return "Please fill in all fields";
  }
  if (!user.email.includes("@")) {
    return "Invalid email";
  }
};
const validateForm = (jobForm) => {
  const errors = {};
  const requiredFields = [
    "companyName",
    "website",
    "companyDescription",
    "roleTitle",
    "stipendSalary",
    "experience",
    "duration",
    "location",
    "responsibilities",
  ];

  requiredFields.forEach((field) => {
    if (!jobForm[field] || jobForm[field].toString().trim() === "") {
      errors[field] = `${field} is required`;
    }
  });

  if (!jobForm.skills || jobForm.skills.length === 0) {
    errors.skills = "At least one skill is required";
  }

  return errors;
};
export { signupValidation, loginValidation, validateForm };
