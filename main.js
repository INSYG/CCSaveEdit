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
    alert("Save loaded.");
}

function updateFromFile() {
    var s = document.getElementById("loadtext").value;
    saveFile = JSON.parse(inc(s, "a"));
    document.getElementById("savedecrypted").value = inc(s, "a");
    document.getElementById("savespaced").value = JSON.stringify(JSON.parse(inc(s, "a")), null, 4);

    var player = saveFile.player;
    document.getElementById("level").value = player.level;
    document.getElementById("exp").value = player.exp;
    document.getElementById("hp").value = player.hp;
    document.getElementById("credits").value = player.credit;
    document.getElementById("head").value = getItemNameById(player.equip.head);
    document.getElementById("leftarm").value = getItemNameById(player.equip.leftArm);
    document.getElementById("rightarm").value = getItemNameById(player.equip.rightArm);
    document.getElementById("torso").value = getItemNameById(player.equip.torso);
    document.getElementById("feet").value = getItemNameById(player.equip.feet);
    document.getElementById("onload").click();

    for (var i = 0; i < items.length; i++) {
        if (i >= player.items.length) player.items[i] == null;
        document.getElementById("item" + i).value = player.items[i];
    }
}

function updateFromPlayer() {
    var player = saveFile.player;
    player.level = document.getElementById("level").value;
    player.exp = document.getElementById("exp").value;
    player.hp = document.getElementById("hp").value;
    player.credit = document.getElementById("credits").value;
    player.equip.head = getItemIdByName(document.getElementById("head").value);
    player.equip.leftArm = getItemIdByName(document.getElementById("leftarm").value);
    player.equip.rightArm = getItemIdByName(document.getElementById("rightarm").value);
    player.equip.torso = getItemIdByName(document.getElementById("torso").value);
    player.equip.feet = getItemIdByName(document.getElementById("feet").value);

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
    document.getElementById("loadtext").value = outc(JSON.stringify(JSON.parse(document.getElementById("savedecrypted").value)), "a");
    updateFromFile();
    alert("Save file updated.");
}

function updateFromSpaced() {
    document.getElementById("loadtext").value = outc(JSON.stringify(JSON.parse(document.getElementById("savespaced").value)), "a");
    updateFromFile();
    alert("Save file updated.");
}

function updateTextareas() {
    document.getElementById("savedecrypted").value = JSON.stringify(saveFile);
    document.getElementById("savespaced").value = JSON.stringify(saveFile, null, 4);
    document.getElementById("loadtext").value = outc(JSON.stringify(saveFile), "a");
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