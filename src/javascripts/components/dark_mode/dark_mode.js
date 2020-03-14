const toggleDarkMode = () => {
  if ($('#dark-mode-checkbox').hasClass('unchecked')) {
    $('#dark-mode-checkbox').toggleClass('checked');
    $('#dark-mode-checkbox').removeClass('unchecked');
    $('body').toggleClass('dark-mode');
    $('#navbar').addClass('navbar-dark bg-dark');
    $('#navbar').removeClass('navbar-light bg-light');
  } else if ($('#dark-mode-checkbox').hasClass('checked')) {
    $('#dark-mode-checkbox').toggleClass('unchecked');
    $('#dark-mode-checkbox').removeClass('checked');
    $('body').removeClass('dark-mode');
    $('#navbar').removeClass('navbar-dark bg-dark');
    $('#navbar').addClass('navbar-light bg-light');
  }
};

export default { toggleDarkMode };
