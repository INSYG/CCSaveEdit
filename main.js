function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", "item-database.json", false);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

var saveFile;
var items;

loadJSON(function (response) {
    // Parse JSON string into object
    items = JSON.parse(response);
    items = items.items;

    var invsort = [[], [], [], [], [], [], [], []];

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
        };

        invsort[cat].push(aaaa);
    }

    var itemCount = 0;
    for (var k = 0; k < invsort.length; k++) {
        var itemstr = "";
        for (var j = 0; j < invsort[k].length; j++) {
            var type = "";
            var item = invsort[k][j].i;
            if (k === 0) type = "head";
            else if (k === 1) type = "weap";
            else if (k === 2) type = "torso";
            else if (k === 3) type = "feet";
            else if (k === 4) type = "cons";
            else if (k === 5) type = "key";
            else if (k === 6) type = "trade";
            else type = "other";

            var elementId = "item" + invsort[k][j].ind;
            itemstr +=
                '<div class="zebra">' +
                    '<div class="textBoxAlignItem">' +
                        '<label for="' + elementId + '">' +
                            '<img alt="i" src="icon/' + type + item.rarity + ".png\"> " +
                            item.name.en_US +
                        '</label>' +
                        '<input id="' + elementId + '" type="text" class="textBoxAlignItem">' +
                    '</div>' +
                '</div>';
            itemCount++;
        }
        document.getElementById("itemlist" + k).innerHTML = itemstr;
    }
});

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
    try {
        return items[n].name.en_US;
    } catch (e) {
        console.warn('Item ', n, 'not found in en_US, trying de_DE...');

        try {
            return items[n].name.de_DE;
        } catch (e) {
            console.error('Item ', n, 'not found in de_DE, giving up.');
            return 'ITEM NOT FOUND';
        }
    }
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
        d = a.substr(9, a.length);
    return c.AES.decrypt(d, b).toString(c.enc.Utf8);
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
