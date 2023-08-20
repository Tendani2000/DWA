export function initializeTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.querySelector('[data-settings-theme]').value = 'night';
      setDarkTheme();
    } else {
      document.querySelector('[data-settings-theme]').value = 'day';
      setLightTheme();
    }
  }
  
  export function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { theme } = Object.fromEntries(formData);
  
    if (theme === 'night') {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  
    document.querySelector('[data-settings-overlay]').open = false;
  }
  
  function setDarkTheme() {
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
  }
  
  function setLightTheme() {
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
  }
  