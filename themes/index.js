import themes from "./theme.js";
const selectorTheme = async (themename)=>{
  if (!themename || !themes[themename]) {
    themename = "default";
  }
  const selectedTheme = themes[themename];
  let { title_color, icon_color, text_color, bg_color, border_color = "ffffff" } = selectedTheme;
  title_color='#'+title_color;
  text_color='#'+text_color;
  bg_color='#'+bg_color;
  icon_color='#'+icon_color;
  border_color='#'+border_color;
  return {title_color, icon_color, text_color, bg_color, border_color};
}

export default selectorTheme;
