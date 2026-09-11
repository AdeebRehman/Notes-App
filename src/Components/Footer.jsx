import React from "react";
const date=new Date().getFullYear()
console.log(date)

function Footer(){
    return <footer>
        <p>
            Copyright  {date}
        </p>
    </footer>
}
export default Footer;