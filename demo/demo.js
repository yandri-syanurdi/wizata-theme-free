$("#colpick").spectrum({
  color: "#1BA0E2",
  showPalette: true,
  showButtons: true,
  change: function (color) {
    $("#colpick").text("change called: " + color.toHexString());
  },
  palette: [
    ["#85B200", "#66B032"],
    ["#A7194B", "#FE2712"],
    ["#FF007F", "#FF55AA"],
    ["#0391CE", "#0247FE"],
    ["#3D01A4", "#8601AF"],
    ["#FD5308", "#FB9902"],
    ["#1BA0E2"],
  ],
});
$("#colpick").change(function () {
  var color_scheme = jQuery("#colpick").val();
  $("a, h1, h2, h3, h4, h5, .t1, .ui-widget-content a").css(
    "color",
    color_scheme
  );
  $(
    ".button-primary, .form-submit input, button, .b1, .b2:hover, #naviwrap, #headback, .blogsearch button:hover, .tourc button:hover, #footerwrap, .navigation li a, .navigation li a:hover, .navigation li.active a, .navigation li.disabled, .tabdetail .ui-state-default, .tabdetail .ui-widget-content .ui-state-default, .tabdetail .ui-widget-header .ui-state-default"
  ).css("background", color_scheme);
  $(
    "#headback h1, #headback h2, #headback a, #footerwrap a, #footerwrap h4, #footerwrap h5,.naviku a"
  ).css("color", "#FFF");
});
$("#layout").change(function () {
  var wide = jQuery("#layout :selected").val();
  if ($("#layout :selected").val() == "box") {
    $("#mainwrap").css("max-width", "1160px");
  } else {
    $("#mainwrap").css("max-width", "100%");
  }
});
$("#fontz").change(function () {
  var font = jQuery("#fontz :selected").val();
  $("body").css("font-family", font);
});
$(".opendemo").click(function () {
  $(".demo").animate({ right: "0" });
  $(".opendemo").hide();
  $(".closedemo").show();
});
$(".closedemo").click(function () {
  $(".demo").animate({ right: "-251px" });
  $(".opendemo").show();
  $(".closedemo").hide();
});
