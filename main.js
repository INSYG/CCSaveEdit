var saveFile;
var items = itemj.items;

document.getElementById("default").click();

var itemstr = "";
for (var i = 0; i < items.length; i++) {
    itemstr += '<div class="textBoxAlignItem">' + items[i].name.en_US + '<input id="item' + i + '" type="text" class="textBoxAlignItem"></div>';
}
document.getElementById("itemlist").innerHTML = itemstr;

function load() {
    updateFromFile();
    document.getElementById("onload").click();
    alert("Save loaded.");
}

function updateFromFile() {
    var s = gVal("loadtext");
    saveFile = JSON.parse(inc(s, "a"));
    gEle("savedecrypted").value = inc(s, "a");
    gEle("savespaced").value = JSON.stringify(JSON.parse(inc(s, "a")), null, 4);

    var player = saveFile.player;
    gEle("level").value = player.level;
    gEle("exp").value = player.exp;
    gEle("hp").value = player.hp;
    gEle("credits").value = player.credit;
    gEle("sp").value = player.spLevel;
    gEle("skillneutral").value = player.skillPoints[0];
    gEle("skillheat").value = player.skillPoints[1];
    gEle("skillcold").value = player.skillPoints[2];
    gEle("skillshock").value = player.skillPoints[3];
    gEle("skillwave").value = player.skillPoints[4];
    gEle("head").value = getItemNameById(player.equip.head);
    gEle("leftarm").value = getItemNameById(player.equip.leftArm);
    gEle("rightarm").value = getItemNameById(player.equip.rightArm);
    gEle("torso").value = getItemNameById(player.equip.torso);
    gEle("feet").value = getItemNameById(player.equip.feet);

    for (var i = 0; i < items.length; i++) {
        if (i >= player.items.length) player.items[i] == null;
        gEle("item" + i).value = player.items[i];
    }
}

function updateFromPlayer() {
    var player = saveFile.player;
    player.level = gVal("level");
    player.exp = gVal("exp");
    player.hp = gVal("hp");
    player.credit = gVal("credits");
    player.spLevel = gVal("sp");
    player.skillPoints[0] = gVal("skillneutral");
    player.skillPoints[1] = gVal("skillheat");
    player.skillPoints[2] = gVal("skillcold");
    player.skillPoints[3] = gVal("skillshock");
    player.skillPoints[4] = gVal("skillwave");
    player.equip.head = getItemIdByName(gVal("head"));
    player.equip.leftArm = getItemIdByName(gVal("leftarm"));
    player.equip.rightArm = getItemIdByName(gVal("rightarm"));
    player.equip.torso = getItemIdByName(gVal("torso"));
    player.equip.feet = getItemIdByName(gVal("feet"));

    saveFile.player = player;
    updateTextareas();
    alert("Player data updated.");
}

function updateFromInventory() {
    var inv = saveFile.player.items;
    for (var i = 0; i < items.length; i++) {
        inv[i] = document.getElementById("item" + i).value;
    }
    saveFile.player.items = inv;
    updateTextareas();
    alert("Inventory updated.");
}

function updateFromDecrypted() {
    gEle("loadtext").value = outc(JSON.stringify(JSON.parse(gVal("savedecrypted"))), "a");
    updateFromFile();
    alert("Save file updated.");
}

function updateFromSpaced() {
    gEle("loadtext").value = outc(JSON.stringify(JSON.parse(gVal("savespaced"))), "a");
    updateFromFile();
    alert("Save file updated.");
}

function updateTextareas() {
    gEle("savedecrypted").value = JSON.stringify(saveFile);
    gEle("savespaced").value = JSON.stringify(saveFile, null, 4);
    gEle("loadtext").value = outc(JSON.stringify(saveFile), "a");
}

function getItemNameById(n) {
    return items[n].name.en_US;
}

function getItemIdByName(s) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].name.en_US == s) {
            return i;
        }
    }
    return -1;
}

function gVal(i) { return document.getElementById(i).value; }
function gEle(i) { return document.getElementById(i); }

function inc(a, b) {
    if (b = 75 * b + "0") b = ":_." + b;
    var c = window.CryptoJS,
        a = a.substr(9, a.length);
    return c.AES.decrypt(a, b).toString(c.enc.Utf8);
}


function outc(a, b) {
    var c;
    if (b = 75 * b + "0") b = ":_." + b;
    c = window.CryptoJS.AES.encrypt(a, b).toString();
    return "[-!_0_!-]" + c;
}

//tab stuff
function changeTab(evt, tab) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}