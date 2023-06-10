export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
export const loginRegex = /^(?:@[A-Za-z]\w*|[A-Za-z]\w*|[\w.-]+@(?:[A-Za-z]+\.[A-Za-z]+))$/;

export const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
export const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
