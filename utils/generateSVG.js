import selectorTheme from '../themes/index.js';
import blogIcon from './blogIcon.js';
const generateSVG = async (themed,blogname,url,title,date,author,thumbnail,description)=>{
  const selectedTheme=await selectorTheme(themed);
  const { title_color, icon_color, text_color, bg_color, border_color = "ffffff" } = selectedTheme;
  const svgIcon = await blogIcon(blogname.toLowerCase(),icon_color);
    const svgCode = `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="270"
          height="320"
          viewBox="0 0 400 450"
          
        >
          <defs>
            <mask id="rounded-mask">
              <rect
                x="0"
                y="0"
                width="400"
                height="450"
                rx="20"
                ry="20"
                fill="white"
              />
            </mask>
          </defs>
          <rect
            x="0"
            y="0"
            width="400"
            height="450"
            rx="20"
            ry="20"
            fill="${bg_color}"
            stroke-width="5"
            stroke="black"
            mask="url(#rounded-mask)"
            
          />
          <style>
    #animate {
      animation: slide-in 4s ease-in 1; /* 1 iteration */
    }

    @keyframes slide-in {
      0% {
        transform: translateX(-100px); /* Start position */
        opacity: 0; /* Start opacity */
      }
      100% {
        transform: translateX(0); /* End position */
        opacity: 1; /* End opacity */
      }
    }
    </style>
          <image
            x="9.5"
            y="10"
            width="380"
            height="250"
            href="${conThumbnail}"
            mask="url(#rounded-mask)"
          />
          

          <!-- Title -->
          <foreignObject x="20" y="265" width="360" height="100">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style="
                font-family: Arial, sans-serif;
                font-size: 18;
                font-weight: bold;
                color: ${title_color};
                
              "
            >
              <H3>
                ${title}
              </H3>
            </div>
          </foreignObject>

          <!-- Date and Author -->
          <text
            x="20"
            y="330"
            font-family="Arial, sans-serif"
            font-size="16"
            font-weight="bold"
            fill="${text_color}"
            
          >
            Author: ${author}
          </text>
          <text
            x="20"
            y="355"
            font-family="Arial, sans-serif"
            font-size="14"
            fill="${text_color}"
          >
            Date: ${date}
          </text>

          ${svgIcon}
          



          <!-- Description using foreignObject -->
          <foreignObject x="20" y="360" width="360" height="100">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style="
                font-family: Arial, sans-serif;
                font-size: 13px;
                color: ${text_color};
              "
            >
              <p>
                ${description}
              </p>
            </div>
          </foreignObject>
        </svg>

`;
  return svgCode;
}

export default generateSVG;