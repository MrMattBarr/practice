Template.footer.viewmodel({
  madeWithIcon: function ()
  {
    const icons = [
      "coffee",
      "heart",
      "beer",
      "laptop",
      "magic",
      "music",
      "rocket",
      "umbrella",
      "cloud"
    ]

    let icon = "fa-" + icons[Math.floor(Math.random()*icons.length)];
    if(Math.floor(Math.random(Iron.Location.get().path)*25) == 10) icon += " fa-spin";
    return icon;
  }

});
