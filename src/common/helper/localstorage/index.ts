export function setLocalStorage(name: string, data: any) {
  if (data !== undefined) {
    let setData = data;
    if (Object.keys(data).length > 0) {
      setData = JSON.stringify(data);
    }
    //set any token on the local storage
    localStorage.setItem(`${name}`, setData);
  }
}

function isJson(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export function getLocalStorage(name: string) {
  const item = localStorage.getItem(name) || false;
  try {
    if (item) {
      if (isJson(item)) {
        return JSON.parse(item);
      } else {
        return JSON.stringify(item);
      }
    } else {
      return item;
    }
  } catch (err) {
    return false;
  }
}

export function removeItemFromLocalStorage(name: string) {
  localStorage.removeItem(name);
}