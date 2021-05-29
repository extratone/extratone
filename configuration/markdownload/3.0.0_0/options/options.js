// these are the default options
const defaultOptions = {
  headingStyle: "atx",
  hr: "___",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  fence: "```",
  emDelimiter: "_",
  strongDelimiter: "**",
  linkStyle: "inlined",
  linkReferenceStyle: "full",
  imageStyle: "markdown",
  frontmatter: "---\ncreated: {date:YYYY-MM-DDTHH:mm:ss} (UTC {date:Z})\ntags: [{keywords}]\nsource: {baseURI}\nauthor: {byline}\n---\n\n# {pageTitle}\n\n> ## Excerpt\n> {excerpt}\n\n---",
  backmatter: "",
  title: "{title}",
  includeTemplate: false,
  saveAs: false,
  downloadImages: false,
  imagePrefix: '{title}/',
  mdClipsFolder: null,
  disallowedChars: '[]#^',
  downloadMode: 'downloadsApi',
  turndownEscape: true,
  // obsidianVault: null,
  // obsidianPathType: 'name'
}

let options = defaultOptions;
let keyupTimeout = null;


const saveOptions = e => {
    e.preventDefault();

    options = {
        frontmatter: document.querySelector("[name='frontmatter']").value,
        backmatter: document.querySelector("[name='backmatter']").value,
        title: document.querySelector("[name='title']").value,
        disallowedChars: document.querySelector("[name='disallowedChars']").value,
        includeTemplate: document.querySelector("[name='includeTemplate']").checked,
        saveAs: document.querySelector("[name='saveAs']").checked,
        downloadImages: document.querySelector("[name='downloadImages']").checked,
        imagePrefix: document.querySelector("[name='imagePrefix']").value,
        mdClipsFolder: document.querySelector("[name='mdClipsFolder']").value,
        turndownEscape: document.querySelector("[name='turndownEscape']").checked,
        // obsidianVault: document.querySelector("[name='obsidianVault']").value,

        headingStyle: getCheckedValue(document.querySelectorAll("input[name='headingStyle']")),
        hr: getCheckedValue(document.querySelectorAll("input[name='hr']")),
        bulletListMarker: getCheckedValue(document.querySelectorAll("input[name='bulletListMarker']")),
        codeBlockStyle: getCheckedValue(document.querySelectorAll("input[name='codeBlockStyle']")),
        fence: getCheckedValue(document.querySelectorAll("input[name='fence']")),
        emDelimiter: getCheckedValue(document.querySelectorAll("input[name='emDelimiter']")),
        strongDelimiter: getCheckedValue(document.querySelectorAll("input[name='strongDelimiter']")),
        linkStyle: getCheckedValue(document.querySelectorAll("input[name='linkStyle']")),
        linkReferenceStyle: getCheckedValue(document.querySelectorAll("input[name='linkReferenceStyle']")),
        imageStyle: getCheckedValue(document.querySelectorAll("input[name='imageStyle']")),
        downloadMode: getCheckedValue(document.querySelectorAll("input[name='downloadMode']")),
        // obsidianPathType: getCheckedValue(document.querySelectorAll("input[name='obsidianPathType']")),
    }

    save();
}

const save = () => {
    const spinner = document.getElementById("spinner");
    spinner.style.display = "block";
    browser.storage.sync.set(options)
        .then(() => {
            browser.contextMenus.update("toggle-includeTemplate", {
                checked: options.includeTemplate
            });
            try {
                browser.contextMenus.update("tabtoggle-includeTemplate", {
                    checked: options.includeTemplate
                });
            } catch { }
        })
        .then(() => {
            spinner.style.display = "none";
        })
        .catch(err => {
            document.querySelectorAll(".status").forEach(statusEl => {
                statusEl.textContent = err;
                statusEl.classList.remove('success');
                statusEl.classList.add('error');
            });
            spinner.style.display = "none";
        });
}

const restoreOptions = () => {
    const setCurrentChoice = result => {
        options = result;

        // if browser doesn't support the download api (i.e. Safari)
        // we have to use contentLink download mode
        if (!browser.downloads) {
            options.downloadMode = 'contentLink';
            document.querySelectorAll("[name='downloadMode']").forEach(el => el.disabled = true)
            document.querySelector('#downloadMode p').innerText = "The Downloas API is unavailable in this browser."
        }

        const downloadImages = options.downloadImages && options.downloadMode == 'downloadsApi';

        if(!downloadImages && (options.imageStyle == 'markdown' || options.imageStyle.startsWith('obsidian'))) {
            options.imageStyle = 'originalSource';
        }

        document.querySelector("[name='frontmatter']").value = options.frontmatter;
        textareaInput.bind(document.querySelector("[name='frontmatter']"))();
        document.querySelector("[name='backmatter']").value = options.backmatter;
        textareaInput.bind(document.querySelector("[name='backmatter']"))();
        document.querySelector("[name='title']").value = options.title;
        document.querySelector("[name='disallowedChars']").value = options.disallowedChars;
        document.querySelector("[name='includeTemplate']").checked = options.includeTemplate;
        document.querySelector("[name='saveAs']").checked = options.saveAs;
        document.querySelector("[name='downloadImages']").checked = options.downloadImages;
        document.querySelector("[name='imagePrefix']").value = options.imagePrefix;
        document.querySelector("[name='mdClipsFolder']").value = result.mdClipsFolder;
        document.querySelector("[name='turndownEscape']").checked = options.turndownEscape;
        // document.querySelector("[name='obsidianVault']").value = options.obsidianVault;

        setCheckedValue(document.querySelectorAll("[name='headingStyle']"), options.headingStyle);
        setCheckedValue(document.querySelectorAll("[name='hr']"), options.hr);
        setCheckedValue(document.querySelectorAll("[name='bulletListMarker']"), options.bulletListMarker);
        setCheckedValue(document.querySelectorAll("[name='codeBlockStyle']"), options.codeBlockStyle);
        setCheckedValue(document.querySelectorAll("[name='fence']"), options.fence);
        setCheckedValue(document.querySelectorAll("[name='emDelimiter']"), options.emDelimiter);
        setCheckedValue(document.querySelectorAll("[name='strongDelimiter']"), options.strongDelimiter);
        setCheckedValue(document.querySelectorAll("[name='linkStyle']"), options.linkStyle);
        setCheckedValue(document.querySelectorAll("[name='linkReferenceStyle']"), options.linkReferenceStyle);
        setCheckedValue(document.querySelectorAll("[name='imageStyle']"), options.imageStyle);
        setCheckedValue(document.querySelectorAll("[name='downloadMode']"), options.downloadMode);
        // setCheckedValue(document.querySelectorAll("[name='obsidianPathType']"), options.obsidianPathType);

        refereshElements();
    }

    const onError = error => {
        console.error(error);
    }

    browser.storage.sync.get(defaultOptions).then(setCurrentChoice, onError);
}

function textareaInput(){
    this.parentNode.dataset.value = this.value;
}

const show = (el, show) => {
    el.style.height = show ? el.dataset.height + 'px' : "0";
    el.style.opacity = show ? "1" : "0";
}

const refereshElements = () => {
    document.getElementById("downloadModeGroup").querySelectorAll('.radio-container,.checkbox-container,.textbox-container').forEach(container => {
        show(container, options.downloadMode == 'downloadsApi')
    });

    // document.getElementById("obsidianUriGroup").querySelectorAll('.radio-container,.checkbox-container,.textbox-container').forEach(container => {
    //     show(container, options.downloadMode == 'obsidianUri')
    // });
    show(document.getElementById("mdClipsFolder"), options.downloadMode == 'downloadsApi');

    show(document.getElementById("linkReferenceStyle"), (options.linkStyle == "referenced"));

    show(document.getElementById("fence"), (options.codeBlockStyle == "fenced"));

    const downloadImages = options.downloadImages && options.downloadMode == 'downloadsApi';

    show(document.getElementById("imagePrefix"), downloadImages);

    document.getElementById('markdown').disabled = !downloadImages;
    document.getElementById('obsidian').disabled = !downloadImages;
    document.getElementById('obsidian-nofolder').disabled = !downloadImages;

    
}

const inputChange = e => {
    console.log('inputChange');

    if (e) {
        let key = e.target.name;
        let value = e.target.value;
        if (e.target.type == "checkbox") value = e.target.checked;
        options[key] = value;
    }
    
    save();

    refereshElements();
}

const inputKeyup = (e) => {
    if (keyupTimeout) clearTimeout(keyupTimeout);
    keyupTimeout = setTimeout(inputChange, 500, e);
}

const loaded = () => {
    document.querySelectorAll('.radio-container,.checkbox-container,.textbox-container').forEach(container => {
        container.dataset.height = container.clientHeight;
    });

    restoreOptions();

    document.querySelectorAll('input,textarea').forEach(input => {
        if (input.tagName == "TEXTAREA" || input.type == "text") {
            input.addEventListener('keyup', inputKeyup);
        }
        else input.addEventListener('change', inputChange);
    })
}

document.addEventListener("DOMContentLoaded", loaded);
document.querySelectorAll(".save").forEach(el => el.addEventListener("click", saveOptions));
document.querySelectorAll(".input-sizer > textarea").forEach(el => el.addEventListener("input", textareaInput));

/// https://www.somacon.com/p143.php
// return the value of the radio button that is checked
// return an empty string if none are checked, or
// there are no radio buttons
function getCheckedValue(radioObj) {
    if (!radioObj)
        return "";
    var radioLength = radioObj.length;
    if (radioLength == undefined)
        if (radioObj.checked)
            return radioObj.value;
        else
            return "";
    for (var i = 0; i < radioLength; i++) {
        if (radioObj[i].checked) {
            return radioObj[i].value;
        }
    }
    return "";
}

// set the radio button with the given value as being checked
// do nothing if there are no radio buttons
// if the given value does not exist, all the radio buttons
// are reset to unchecked
function setCheckedValue(radioObj, newValue) {
    if (!radioObj)
        return;
    var radioLength = radioObj.length;
    if (radioLength == undefined) {
        radioObj.checked = (radioObj.value == newValue.toString());
        return;
    }
    for (var i = 0; i < radioLength; i++) {
        radioObj[i].checked = false;
        if (radioObj[i].value == newValue.toString()) {
            radioObj[i].checked = true;
        }
    }
}