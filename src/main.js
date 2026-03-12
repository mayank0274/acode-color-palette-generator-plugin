import plugin from "../plugin.json";
const toast = acode.require("toast");
import { Vibrant } from "node-vibrant/browser";

const helpers = acode.require("helpers");
const fs = acode.require("fs");
const alert = acode.require("alert");
const loader = acode.require("loader");
import copy from "copy-to-clipboard";
const fileBrowser = acode.require("fileBrowser");

const COLOR_ARR_LS_KEY = "color-palette-color-arr";
const SWATCH_REF_LS_KEY = "color-palette-swatch-ref";

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
    this.$main.style.backgroundColor = "#161616";
    this.$main.style.padding = "16px 12px";
    this.$main.style.boxSizing = "border-box";

    this.$heading = tag("h1", {
      textContent: "Colour Palette Generator",
    });

    this.$main.append(this.$heading);
    this.$heading.style.margin = "16px 8px 20px";
    this.$heading.style.fontSize = "22px";
    this.$heading.style.fontWeight = "700";
    this.$heading.style.letterSpacing = "0.5px";
    this.$heading.style.color = "#f0e6d3";
    this.$heading.style.textAlign = "center";

    this.$uploadBtn = tag("button", {
      className: "uploadBtn",
      textContent: "Upload Image",
    });

    this.$uploadBtn.style.width = "80%";
    this.$uploadBtn.style.marginBottom = "16px";
    this.$uploadBtn.style.marginTop = "10px";
    this.$uploadBtn.style.marginLeft = "auto";
    this.$uploadBtn.style.marginRight = "auto";
    this.$uploadBtn.style.border = "none";
    this.$uploadBtn.style.backgroundColor = "#e2a93b";
    this.$uploadBtn.style.color = "#1a1a1a";
    this.$uploadBtn.style.padding = "14px 24px";
    this.$uploadBtn.style.borderRadius = "10px";
    this.$uploadBtn.style.cursor = "pointer";
    this.$uploadBtn.style.fontSize = "15px";
    this.$uploadBtn.style.fontWeight = "600";
    this.$uploadBtn.style.letterSpacing = "1px";
    this.$uploadBtn.style.textTransform = "uppercase";
    this.$uploadBtn.style.boxShadow = "0 2px 10px rgba(226, 169, 59, 0.25)";
    this.$uploadBtn.style.transition = "opacity 0.2s ease";

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
    this.$colors.style.margin = "10px 7px";
    this.$colors.style.fontSize = "18px";
    this.$colors.style.height = "85%";
    this.$colors.style.width = "100%";
    this.$colors.style.padding = "12px";
    this.$colors.style.borderRadius = "12px";
    this.$colors.style.backgroundColor = "#1e1e1e";
    this.$colors.style.border = "1px solid #2a2a2a";
    this.$colors.style.overflowY = "auto";
    this.$colors.style.boxSizing = "border-box";
    this.$colors.style.color = "#b0b0b0";

    // -- button container --
    this.$btnContainer = tag("div", {
      className: "btnContainer",
    });
    this.$btnContainer.style.display = "flex";
    this.$btnContainer.style.flexDirection = "row";
    this.$btnContainer.style.gap = "12px";
    this.$btnContainer.style.marginTop = "12px";
    this.$btnContainer.style.marginBottom = "12px";
    this.$main.append(this.$btnContainer);

    this.$btn = tag("button", {
      id: "btn",
      textContent: "Save Pallete",
    });

    this.$btn.style.width = "auto";
    this.$btn.style.padding = "10px 28px";
    this.$btn.style.textAlign = "center";
    this.$btn.style.fontSize = "14px";
    this.$btn.style.fontWeight = "600";
    this.$btn.style.letterSpacing = "0.5px";
    this.$btn.style.backgroundColor = "transparent";
    this.$btn.style.color = "#e2a93b";
    this.$btn.style.borderRadius = "20px";
    this.$btn.style.border = "1.5px solid #e2a93b";
    this.$btn.style.cursor = "pointer";
    this.$btn.style.transition = "background-color 0.2s ease, color 0.2s ease";
    this.$btnContainer.append(this.$btn);

    this.$exportBtn = tag("button", {
      id: "exportBtn",
      textContent: "Export",
    });

    this.$exportBtn.style.width = "auto";
    this.$exportBtn.style.padding = "10px 28px";
    this.$exportBtn.style.textAlign = "center";
    this.$exportBtn.style.fontSize = "14px";
    this.$exportBtn.style.fontWeight = "600";
    this.$exportBtn.style.letterSpacing = "0.5px";
    this.$exportBtn.style.backgroundColor = "#e2a93b";
    this.$exportBtn.style.color = "#1a1a1a";
    this.$exportBtn.style.borderRadius = "20px";
    this.$exportBtn.style.border = "1.5px solid #e2a93b";
    this.$exportBtn.style.cursor = "pointer";
    this.$exportBtn.style.transition = "opacity 0.2s ease";
    this.$btnContainer.append(this.$exportBtn);

    this.$canvas = tag("canvas", {
      id: "canvas",
      height: "600",
      width: "350",
    });

    this.$canvas.style.display = "none";
    this.$main.append(this.$canvas);

    this.myColor = [];
    this.swatchRef = [];
    this.fileChangeHandler = null;

    this.$uploadBtn.addEventListener("click", () => {
      this.$file.click();
    });

    this.$btn.addEventListener("click", async () => {
      this.savePallete();

      const myfile = await fileBrowser(
        "folder",
        "Select location to save pallete",
        true,
      );
      const url = myfile.url;

      this.$canvas.toBlob(async (blob) => {
        try {
          if (!blob) {
            alert("Error: Failed to create image blob");
            return;
          }

          const imgName = `Colour pallete - ${new Date().getMilliseconds()}.png`;
          const file = await fs(url).createFile(imgName, blob);
          if (file) {
            alert("Colour Palette Saved Successfully");
          } else {
            alert("Error in saving pallete");
          }
        } catch (err) {
          alert("Error saving file: " + err.message);
        }
      }, "image/png");

      this.$canvas.style.backgroundColor = "#161616";
    });

    this.$exportBtn.addEventListener("click", () => {
      if (!this.swatchRef || !this.swatchRef.length) {
        toast("No colors to export", 1500);
        return;
      }

      try {
        let exportText = ":root {\n";
        this.swatchRef.forEach((el) => {
          if (el.swatch && el.swatch.hex) {
            const color = el.swatch.hex;
            exportText += `  --color-${el.label}: ${color};\n`;
          }
        });
        exportText += "}";

        copy(exportText);
        toast("Palette copied to clipboard", 1500);
      } catch (err) {
        toast("Error copying to clipboard: " + err.message, 1500);
      }
    });
  }

  async run() {
    this.$page.show();

    this.$canvas.style.display = "none";
    this.$btn.style.display = "none";
    this.$exportBtn.style.display = "none";

    // load last generated color from local storage
    this.getPrevColors();

    // remove old event listener before adding new one to prevent duplicates
    if (this.fileChangeHandler) {
      this.$file.removeEventListener("change", this.fileChangeHandler);
    }

    // process image
    this.fileChangeHandler = () => {
      // clear canvas
      const context = this.$canvas.getContext("2d");
      context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);

      // clear previous colors
      this.myColor.length = 0;

      const file = this.$file.files[0];
      if (!file) {
        toast("Please select an image", 1500);
        return;
      }

      //  Validate file type
      const validImageTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
      ];
      if (!validImageTypes.includes(file.type)) {
        toast("Please select a valid image file (JPEG, PNG, GIF, WebP)", 1500);
        return;
      }

      loader.create("loading", "Generating Colour");

      const img = new Image();
      img.src = URL.createObjectURL(file);
      let loadTimeout = null;

      // add timeout to prevent hanging
      loadTimeout = setTimeout(() => {
        loader.destroy();
        toast("Image loading timeout", 1500);
      }, 10000); // 10 second timeout

      img.onload = async () => {
        clearTimeout(loadTimeout);
        try {
          const res = this.$colors;
          this.$btn.style.display = "block";
          this.$exportBtn.style.display = "block";
          res.innerHTML = "";

          // Extract palette
          const palette = await Vibrant.from(img).getPalette();

          // Pick up to 6 good colors in priority order
          const swatchMap = [
            { swatch: palette.Vibrant, label: "primary" },
            { swatch: palette.Muted, label: "secondary" },
            { swatch: palette.DarkVibrant, label: "accent" },
            { swatch: palette.DarkMuted, label: "background" },
            { swatch: palette.LightVibrant, label: "highlight" },
            { swatch: palette.LightMuted, label: "surface" },
          ];

          this.swatchRef = swatchMap;

          const colorArr = swatchMap
            .filter((item) => item.swatch)
            .map((item) => {
              const s = item.swatch;
              return {
                color: s.hex,
                label: item.label,
              };
            })
            .slice(0, 6);

          if (!colorArr.length) {
            res.innerHTML =
              '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px;color:#b0a08a;font-size:14px;font-weight:500;text-align:center;padding:20px"><span style="font-size:28px">⚠️</span>No colors found or failed to extract colors</div>';
            loader.destroy();
            return;
          }

          // Save to localStorage
          localStorage.setItem(COLOR_ARR_LS_KEY, JSON.stringify(colorArr));
          localStorage.setItem(
            SWATCH_REF_LS_KEY,
            JSON.stringify(this.swatchRef),
          );

          colorArr.forEach((color) => {
            this.insert(color);
            this.myColor.push(color);
          });

          // remove old listeners before adding new ones
          const colourOut = Array.from(document.querySelectorAll(".card"));
          colourOut.forEach((e) => {
            const clickHandler = e._clickHandler ? e._clickHandler : null;
            if (clickHandler) {
              e.removeEventListener("click", clickHandler);
            }

            const color = e.dataset.hex;
            e._clickHandler = async () => {
              try {
                await navigator.clipboard.writeText(color);
                toast(`${color} copied to clipboard`, 1500);
              } catch (err) {
                toast("Failed to copy to clipboard", 1500);
              }
            };
            e.addEventListener("click", e._clickHandler);
          });

          loader.destroy();
          URL.revokeObjectURL(img.src); // Cleanup object URL
        } catch (err) {
          toast(err.message, 1500);
          loader.destroy();
        }
      };

      // add image error handler
      img.onerror = () => {
        clearTimeout(loadTimeout);
        toast("Failed to load image", 1500);
        loader.destroy();
      };

      // add abort handler for interrupted loads
      img.onabort = () => {
        clearTimeout(loadTimeout);
        toast("Image loading aborted", 1500);
        loader.destroy();
      };
    };

    this.$file.addEventListener("change", this.fileChangeHandler);
  }

  insert(src) {
    const colorBox = this.$colors;
    const hex = src.color;
    const label = src.label || "";

    const card = document.createElement("div");

    const html = `
    <div style="background:${hex};width:100%;border-radius:10px 10px 0 0;flex:1;min-height:70px"></div>
    <div style="padding:5px 6px 6px;display:flex;flex-direction:column;align-items:center;gap:2px;width:100%;box-sizing:border-box;flex-shrink:0">
      <span style="font-size:9px;font-weight:700;color:#e2a93b;text-transform:uppercase;letter-spacing:1px;background:rgba(226,169,59,0.12);padding:2px 8px;border-radius:6px;line-height:1.2">${label}</span>
      <span class="colorName" style="font-size:11px;font-weight:600;color:#f0e6d3;letter-spacing:0.3px;text-transform:uppercase;line-height:1.3" data-hex="${hex}">${hex}</span>
    </div>
   `;
    card.classList.add("card");
    card.dataset.hex = hex;
    card.style.backgroundColor = "#1e1e1e";
    card.style.border = "1px solid #2a2a2a";
    card.style.height = "135px";
    card.style.width = "115px";
    card.style.textAlign = "center";
    card.style.margin = "8px";
    card.style.borderRadius = "10px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "center";
    card.style.overflow = "hidden";
    card.style.cursor = "pointer";
    card.style.transition = "transform 0.15s ease, border-color 0.15s ease";
    card.insertAdjacentHTML("afterbegin", html);
    colorBox.appendChild(card);
  }

  // function for getting colors
  getPrevColors() {
    // proper localStorage error handling with try-catch
    let storedColors = [];
    let swatchRefData = [];

    try {
      const parsed = localStorage.getItem(COLOR_ARR_LS_KEY);
      storedColors = parsed ? JSON.parse(parsed) : [];
    } catch (err) {
      console.error("Failed to parse stored colors:", err);
      localStorage.removeItem(COLOR_ARR_LS_KEY);
      storedColors = [];
    }

    try {
      const parsed = localStorage.getItem(SWATCH_REF_LS_KEY);
      swatchRefData = parsed ? JSON.parse(parsed) : [];
    } catch (err) {
      console.error("Failed to parse swatch ref:", err);
      localStorage.removeItem(SWATCH_REF_LS_KEY);
      swatchRefData = [];
    }

    const lastGenColor = Array.from(storedColors);
    this.swatchRef = swatchRefData;

    const colorBox = this.$colors;

    if (!lastGenColor.length) {
      colorBox.innerHTML =
        '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px;color:#b0a08a;font-size:14px;font-weight:500;text-align:center;padding:20px"><span style="font-size:28px">🎨</span>Upload an image to generate a colour palette</div>';
      return;
    }

    // Show buttons since we have colors
    this.$btn.style.display = "block";
    this.$exportBtn.style.display = "block";

    for (let i = 0; i < lastGenColor.length; i++) {
      const item = lastGenColor[i];
      this.insert(item);
      this.myColor.push(item);
    }

    // FIX: Remove old listeners before adding new ones
    const colourOut = Array.from(document.querySelectorAll(".card"));
    colourOut.forEach((e) => {
      const clickHandler = e._clickHandler;
      if (clickHandler) {
        e.removeEventListener("click", clickHandler);
      }

      const color = e.dataset.hex;
      e._clickHandler = async () => {
        try {
          await navigator.clipboard.writeText(color);
          toast(`${color} copied to clipboard`, 1500);
        } catch (err) {
          toast("Failed to copy to clipboard", 1500);
        }
      };
      e.addEventListener("click", e._clickHandler);
    });
  }

  // save pallete
  savePallete() {
    var canvas = this.$canvas;
    var context = canvas.getContext("2d");

    var cw = canvas.width;
    var ch = canvas.height;

    // -- dark background --
    context.fillStyle = "#161616";
    context.fillRect(0, 0, cw, ch);

    // -- title --
    context.font = "bold 20px Arial, sans-serif";
    context.textAlign = "center";
    context.fillStyle = "#f0e6d3";
    context.fillText("Colour Palette", cw / 2, 40);

    // -- accent underline --
    context.fillStyle = "#e2a93b";
    var lineW = 60;
    context.fillRect((cw - lineW) / 2, 50, lineW, 3);

    // -- grid of swatches: 3 cols × 2 rows --
    var cols = 3;
    var swatchW = 90;
    var swatchH = 90;
    var gapX = 15;
    var gapY = 55;
    var totalGridW = cols * swatchW + (cols - 1) * gapX;
    var startX = (cw - totalGridW) / 2;
    var startY = 75;
    var radius = 12;

    // helper: rounded rect
    function roundRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
      ctx.fill();
    }

    for (var i = 0; i < this.myColor.length && i < 6; i++) {
      var col = i % cols;
      var row = Math.floor(i / cols);
      var x = startX + col * (swatchW + gapX);
      var y = startY + row * (swatchH + gapY);

      // swatch
      context.fillStyle = this.myColor[i].color;
      roundRect(context, x, y, swatchW, swatchH, radius);

      // label tag above hex
      context.font = "bold 9px Arial, sans-serif";
      context.textAlign = "center";
      context.fillStyle = "#e2a93b";
      context.fillText(
        this.myColor[i].label.toUpperCase(),
        x + swatchW / 2,
        y + swatchH + 15,
      );

      // hex label below label
      context.font = "bold 11px Arial, sans-serif";
      context.fillStyle = "#b0b0b0";
      context.fillText(
        this.myColor[i].color.toUpperCase(),
        x + swatchW / 2,
        y + swatchH + 30,
      );
    }

    // -- footer --
    context.font = "11px Arial, sans-serif";
    context.textAlign = "center";
    context.fillStyle = "#555555";
    context.fillText(
      "Generated with Colour Palette Generator",
      cw / 2,
      ch - 15,
    );
  }

  async destroy() {
    // clean up event listeners to prevent memory leaks
    if (this.fileChangeHandler) {
      this.$file.removeEventListener("change", this.fileChangeHandler);
    }

    const colourOut = Array.from(document.querySelectorAll(".card"));
    colourOut.forEach((e) => {
      if (e._clickHandler) {
        e.removeEventListener("click", e._clickHandler);
      }
    });

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
    },
  );
  acode.setPluginUnmount(plugin.id, () => {
    acodePlugin.destroy();
  });
}
