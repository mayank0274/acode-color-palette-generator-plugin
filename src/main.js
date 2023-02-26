import plugin from "../plugin.json";

const helpers = acode.require("helpers");
const fs = acode.require("fs");
const alert = acode.require("alert");
const loader = acode.require("loader");
import copy from "copy-to-clipboard";
const fileBrowser = acode.require("fileBrowser");

class colorpalette {
  async init($page) {
    let command = {
      name: "Color Palette",
      description: " Color Palette",
      exec: this.run.bind(this),
    };
    editorManager.editor.commands.addCommand(command);

    $page.id = "acode-plugin-colorpalette";
    $page.settitle("Colour Palette Generator");
    this.$page = $page;

    this.$main = tag("main", {
      className: "main",
    });

    this.$page.append(this.$main);

    this.$main.style.height = "100%";
    this.$main.style.display = "flex";
    this.$main.style.flexDirection = "column";
    //  this.$main.style.justifyContent="center"
    this.$main.style.alignItems = "center";
    // this.$main.style.overflowY = "scroll"

    this.$heading = tag("h1", {
      textContent: "Colour Palette Generator",
    });

    this.$main.append(this.$heading);
    this.$heading.style.margin = "8px";
    
    this.$uploadBtn = tag("img",{
      className : "uploadBtn",
      src :"https://drive.google.com/uc?export=view&id=1FfVgzQNSHVa2C1imI8F6lnuTqGp-h9jp"
    })
    
    this.$uploadBtn.style.width = "80%";
    this.$uploadBtn.style.marginBottom = "10px";
    
    this.$main.append(this.$uploadBtn);

    this.$form = tag("form", {
      className: "form",
      enctype: "multipart/form-data",
    });

    this.$main.append(this.$form);
    this.$form.style.justifyContent = "flexStart";

    this.$file = tag("input", {
      type: "file",
      className: "file",
      name: "file",
      id: "file",
    });

    this.$file.style.width = "90%";
    this.$file.style.padding = "8px";
    this.$file.style.display = "none";
    this.$form.append(this.$file);

    this.$colors = tag("div", {
      className: "colorBox",
      textContent: "",
    });
    this.$main.append(this.$colors);
    this.$colors.style.display = "flex";
    this.$colors.style.flexDirection = "row";
    this.$colors.style.flexWrap = "wrap";
    this.$colors.style.justifyContent = "center";
    //  this.$colors.style.alignItems = "center";
    this.$colors.style.margin = "7px";
    this.$colors.style.fontSize = "19px";
    this.$colors.style.height = "85%";
    this.$colors.style.width = "100%";

    this.$colors.style.overflowY = "scroll";

    this.$btn = tag("button", {
      id: "btn",
      textContent: "Save Pallete",
    });

    this.$btn.style.width = "35%";
    this.$btn.style.padding = "5px";
    this.$btn.style.textAlign = "center";
    this.$btn.style.fontSize = "16px";
    this.$btn.style.backgroundColor = "#ffffff";
    this.$btn.style.color = "#000000";
    this.$btn.style.borderRadius = "5px";
    this.$btn.style.border = "1px solid #ffffff";
    this.$main.append(this.$btn);

    this.$canvas = tag("canvas", {
      id: "canvas",
      height: "600",
      width: "350",
    });

    this.$canvas.style.display = "none";
    this.$main.append(this.$canvas);
  }

  async run() {
    this.$page.show();

    const canvas = document.querySelector("#canvas");
    canvas.style.display = "none";

    const btn = document.querySelector("#btn");
    btn.style.display = "none";

    const fileData = document.querySelector(".file");
    
     const uploadBtn = document.querySelector(".uploadBtn")
     
     uploadBtn.addEventListener("click",()=>{
       fileData.click();
     })

    // array for drawing rectangle colors
    const myColor = new Array();

    // insert color box
    function insert(src) {
      const colorBox = document.querySelector(".colorBox");

      const card = document.createElement("div");

      const html = `
      <div style="background:${src};width:120px;border:1px solid ${src};border-radius:8px;height:100px;padding-bottom:3px"></div>
      <div class="colorName" style="padding:2px;aligin-self:flex-end">${src}</div>
     `;
      card.classList.add("card");
      card.style.border = `1px solid ${src}`;
      card.style.height = "120px";
      card.style.width = "120px";
      card.style.textAlign = "center";
      card.style.margin = "5px";
      card.style.borderRadius = "7px";
      card.style.display = "flex";
      card.style.flexDirection = "column";
      card.style.alignItems = "center";
      card.insertAdjacentHTML("afterbegin", html);
      colorBox.appendChild(card);
    }

    // load last generated color from local storage
    getPrevColors();

    // post image
    fileData.addEventListener("change", () => {
      //clear canvas for next turn
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      // clear array for drawing next colors
      myColor.length = 0;

      const file = fileData.files;
      const data = new FormData();
      // alert(file[0])
      data.append("file", file[0]);

      loader.create("loading", "Generating Colour");

      fetch("https://image-color-extractor-rnue.onrender.com/getColor", {
        method: "POST",
        body: data,
      })
        .then((r) => r.json())
        .then((data) => {
          loader.destroy();

          const res = document.querySelector(".colorBox");
          const btn = document.querySelector("#btn");
          btn.style.display = "block";
          const colorArr = Array.from(data);
          // add colors in local storage
          localStorage.setItem("colors", JSON.stringify(colorArr));
          res.innerText = " ";
          for (let i = 0; i < colorArr.length; i++) {
            // alert(colorArr[i])
            insert(colorArr[i]);
            // make color array for drawing
            myColor.push(colorArr[i]);
          }
          // copy colors
          const colourOut = Array.from(document.querySelectorAll(".card"));

          // alert(colourOut);

          colourOut.forEach((e) => {
            const color = e.innerText;
            e.addEventListener("click", (event) => {
              copy(color);
              alert("Colour copied to clipboard");
            });
          });
        });
    });

    // function for getting colors
    function getPrevColors() {
      let storedColors = !JSON.parse(localStorage.getItem("colors"))
        ? []
        : JSON.parse(localStorage.getItem("colors"));
      const lastGenColor = Array.from(storedColors);
      const colorBox = document.querySelector(".colorBox");

      if (!lastGenColor.length) {
        colorBox.innerText = "Nothing to show";
      }

      for (let i = 0; i < lastGenColor.length; i++) {
        insert(lastGenColor[i]);
      }
    }

    // create canvas shape

    function Shape(x, y, w, h, fill) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.fill = fill;
    }

    // save pallete

    function savePallete() {
      // alert("ok");
      // alert(myColor.length);
      var canvas = document.getElementById("canvas");
      var context = canvas.getContext("2d");
      context.font = "bold 14px Arial";
      context.textAlign = "center";
      context.fillStyle = "#ffffff";
      context.fillText("Color Palette Generator", 160, 30);
      context.fillText(myColor[0], 30, 80);
      context.fillText(myColor[1], 100, 80);
      context.fillText(myColor[2], 170, 80);
      context.fillText(myColor[3], 240, 80);
      context.fillText(myColor[4], 310, 80);

      if (canvas.getContext) {
        var myColorRect = [];

        myColorRect.push(new Shape(200, 120, 125, 125, myColor[0]));
        myColorRect.push(new Shape(10, 120, 125, 125, myColor[1]));

        myColorRect.push(new Shape(10, 270, 125, 125, myColor[2]));
        myColorRect.push(new Shape(200, 270, 125, 125, myColor[3]));
        myColorRect.push(new Shape(100, 420, 125, 125, myColor[4]));

        for (var i in myColorRect) {
          let Rect = myColorRect[i];
          context.fillStyle = Rect.fill;
          context.fillRect(Rect.x, Rect.y, Rect.w, Rect.h);
        }
      }
    }

    // save btn
    btn.addEventListener("click", async () => {
      savePallete();

      const canvas = document.getElementById("canvas");

      const myfile = await fileBrowser(
        "folder",
        "Select location to save pallete",
        true
      );
      const url = myfile.url;

      canvas.toBlob(async function (blob) {
        const imgName = `Colour pallete - ${new Date().getMilliseconds()}.png`;
        const file = await fs(url).createFile(imgName, blob);
        //alert(file)
        if (file) {
          alert("Colour Palette Saved Successfully");
        } else {
          alert("Error in saving pallete");
        }
      }, "image/png");

      canvas.style.backgroundColor = "#ffffff";
    });

    this.$page.onhide = () => {
      const colorBox = document.querySelector(".colorBox");
      colorBox.innerHTML = " ";
    };
  }

  async destroy() {
    let command = {
      name: "Color Palette",
      description: "Color Palette",
      exec: this.run.bind(this),
    };
    editorManager.editor.commands.removeCommand(command);
  }
}

if (window.acode) {
  const acodePlugin = new colorpalette();
  acode.setPluginInit(
    plugin.id,
    (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
      if (!baseUrl.endsWith("/")) {
        baseUrl += "/";
      }
      acodePlugin.baseUrl = baseUrl;
      acodePlugin.init($page, cacheFile, cacheFileUrl);
    }
  );
  acode.setPluginUnmount(plugin.id, () => {
    acodePlugin.destroy();
  });
}
