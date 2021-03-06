export const FlashMessageType = (messageType) => {
  let alertType = 'success';
  switch(messageType) {
    case 'notice':
      alertType = 'success';
      break;
    case 'alert':
      alertType = 'danger';
      break;
    case 'info':
      alertType = 'info';
      break;
    case 'warning':
      alertType = 'warning';
      break;
    default:
      return alertType;
  }

  return alertType;
};


export const isEmpty = (obj) => {

  // null and undefined are "empty"
  if (obj === null) return true;

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0)    return false;
  if (obj.length === 0)  return true;

  // If it isn't an object at this point
  // it is empty, but it can't be anything *but* empty
  // Is it empty?  Depends on your application.
  if (typeof obj !== "object") return true;

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
  }

  return true;
};

export const getParams = (query) => {
  if (!query) {
    return {};
  }

  return (/^[?#]/.test(query) ? query.slice(1) : query)
    .split("&")
    .reduce((params, param) => {
      let [key, value] = param.split("=");
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, " ")) : "";
      return params;
    }, {});
};