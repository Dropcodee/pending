$(document).ready(() => {
  $(".sidenav").sidenav();

  // MEMBER REGISTRATION PANEL CHANGES
  $("#myTab a").on("click", e => {
    e.preventDefault();
    $(this).tab("show");
  });
});
