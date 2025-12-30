/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "inter":['"Inter"', "sans-serif"],
        "raleway": ['"Raleway"', "sans-serif"]
      },
      colors:{
        background: "#FFFFFF",
        highlight1: "#2d3142",
        highlight2: "#bfc0c0",
        object1: "#4f5d75",
        object2: "#ef8354"
      },
      fontSize:{
        xl_heading2: "26px",
        xl_heading: "34px",
        xl_content: "18px",
        xl_intro: "20px",
        xl_section: "40px",
        lg_heading2: "22px",
        lg_heading: "30px",
        lg_content: "18px",
        lg_intro: "20px",
        lg_section: "38px",
        md_heading2: "20px",
        md_heading: "26px",
        md_content: "17px",
        md_intro: "16px",
        md_section: "36px",
        sm_heading2: "20px",
        sm_heading: "24px",
        sm_content: "16px",
        sm_intro: "14px",
        sm_section: "30px",


        // content: "22px"
      },
      fontWeight: {
        light: 200,
        normal:400,
        bold: 900
      }
    },
  },
  plugins: [],
}

