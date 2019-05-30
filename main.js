var saveFile;
var items = itemj.items;
var invsort = [[],[],[],[],[],[],[],[]];

document.getElementById("default").click();
document.getElementById("defaultinv").click();

for (var i = 0; i < items.length; i++) {
    var cat;
    
    if (items[i].icon === "item-helm") cat = 0;
    else if (items[i].icon === "item-sword") cat = 1;
    else if (items[i].icon === "item-belt") cat = 2;
    else if (items[i].icon === "item-shoe") cat = 3;
    else if (items[i].icon === "item-items") cat = 4;
    else if (items[i].icon === "item-key") cat = 5;
    else if (items[i].icon === "item-trade") cat = 6;
    else cat = 7;

    var aaaa = {
        "ind": i,
        "i": items[i]
    }
    
    invsort[cat].push(aaaa);
}

var itemCount = 0;
for (var i = 0; i < invsort.length; i++) {
    var itemstr = "";
    for (var j = 0; j < invsort[i].length; j++) {
        var type = "";
        var item = invsort[i][j].i;
        if (i === 0) type = "head";
        else if (i === 1) type = "weap";
        else if (i === 2) type = "torso";
        else if (i === 3) type = "feet";
        else if (i === 4) type = "cons";
        else if (i === 5) type = "key";
        else if (i === 6) type = "trade";
        else type = "other";
        itemstr += '<div class="textBoxAlignItem"><img src="icon/' + type + item.rarity + '.png"> ' + item.name.en_US + '<input id="item' + invsort[i][j].ind + '" type="text" class="textBoxAlignItem"></div>';
        itemCount++;
    }
    document.getElementById("itemlist" + i).innerHTML = itemstr;
}


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

    for (var i = 0; i < player.itemFavs.length && i < 12; i++) {
        gEle("favlist" + i).value = getItemNameById(player.itemFavs[i]);
    }

    /*var flags = saveFile.vars.storage.maps;
    gEle("bossCold1").checked = flags["coldDng/b3/room7"].bossKilled;
    gEle("bossCold2").checked = flags["coldDng/g/boss"].bossKill;
    gEle("bossHeat1").checked = flags["heatDng/f1/midboss"].midbossDefeated;
    gEle("bossHeat2").checked = flags["heatDng/f4/boss"].bossKill;
    gEle("bossWave").checked = flags["waveDng/b1/boss"].bossDefeated;
    gEle("bossShock").checked = flags["shockDng/f3/roomBoss"].bossDefeated;
    gEle("bossGrand1").checked = flags["treeDng/f2/room-01"].apeDefeated;
    gEle("bossGrand2").checked = flags["treeDng/f4/boss"].apeDefeated;*/

    for (var i = 0; i < items.length; i++) {
        if (i >= player.items.length) player.items[i] == null;
        gEle("item" + i).value = player.items[i];
    }
}

function updateFromPlayer() {
    var player = saveFile.player;
    player.level = strToNum(gVal("level"));
    player.exp = strToNum(gVal("exp"));
    player.hp = strToNum(gVal("hp"));
    player.credit = strToNum(gVal("credits"));
    player.spLevel = strToNum(gVal("sp"));
    player.skillPoints[0] = strToNum(gVal("skillneutral"));
    player.skillPoints[1] = strToNum(gVal("skillheat"));
    player.skillPoints[2] = strToNum(gVal("skillcold"));
    player.skillPoints[3] = strToNum(gVal("skillshock"));
    player.skillPoints[4] = strToNum(gVal("skillwave"));
    player.equip.head = getItemIdByName(gVal("head"));
    player.equip.leftArm = getItemIdByName(gVal("leftarm"));
    player.equip.rightArm = getItemIdByName(gVal("rightarm"));
    player.equip.torso = getItemIdByName(gVal("torso"));
    player.equip.feet = getItemIdByName(gVal("feet"));

    var favs = [];
    for (var i = 0; i < 12; i++) if (getItemIdByName(gVal("favlist" + i)) != -1) favs[i] = getItemIdByName(gVal("favlist" + i));
    player.itemFavs = favs;

    saveFile.player = player;
    updateTextareas();
    alert("Player data updated.");
}

function updateFromInventory() {
    var inv = saveFile.player.items;
    for (var i = 0; i < items.length; i++) inv[i] = strToNum(gVal("item" + i));
    saveFile.player.items = inv;
    updateTextareas();
    alert("Inventory updated.");
}

/*function updateFromFlags() {
    var flags = saveFile.vars.storage.maps;
    if (gEle("bossCold1").checked) flags["coldDng/b3/room7"] = {};
    if (gEle("bossCold2").checked) flags["coldDng/g/boss"] = {};
    if (gEle("bossCold2").checked) flags["coldDng/g/boss"] = {};
    if (gEle("bossHeat1").checked) flags["heatDng/f1/midboss"] = {};
    if (gEle("bossHeat2").checked) flags["heatDng/f4/boss"] = {};
    if (gEle("bossWave").checked) flags["waveDng/b1/boss"] = {};
    if (gEle("bossShock").checked) flags["shockDng/f3/roomBoss"] = {};
    if (gEle("bossGrand1").checked) flags["treeDng/f2/room-01"] = {};
    if (gEle("bossGrand2").checked) flags["treeDng/f4/boss"] = {};

    saveFile.vars.storage.maps = flags;
    saveFile.stats.combat["killjungle.whale-boss"] = 0;
    saveFile.stats.combat["killjungle.ape-boss"] = 1;
    saveFile.vars.storage.dungeons.tree.beaten = false;
    flags["treeDng/f4/boss"] = {};
    updateTextareas();
    alert("Flags updated.");
}*/

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

function strToNum(s) {
    if (s.length === 0 || isNaN(s)) return null;
    else return Number(s);
}

//tab stuff
function changeTab(evt, cl, tab) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName(cl);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    gEle(tab).style.display = "block";
    evt.currentTarget.className += " active";
}
