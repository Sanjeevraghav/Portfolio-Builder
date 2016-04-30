import React, {Component} from 'react'

class HumbergerMenu extends Component {
    toggleLeftMenu = evt => {
       let leftMenu = document.getElementById("leftmenu");
       let app = document.getElementById("app");
        if(leftMenu.style.display === "none")
        {
            leftMenu.style.display = 'block';
            app.className = 'col-md-9 col-sm-9 col-xs-9 mainContent';
        }
        else{
            leftMenu.style.display = 'none';
            app.className = 'col-md-12 col-sm-12 col-xs-12 mainContent';
        }
    };

    render() {
        let menu = {
          "width":"50px",
          "height":"40px",
            "margin":"1%"
        };
        return (
            <div style={menu} onClick={::this.toggleLeftMenu}>
                <img style={menu} src="../../Images/humburger.png" />
            </div>
        );
    }
}
export default HumbergerMenu;