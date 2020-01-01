//id variables
categoryId = 1;
itemId = 1;


//Creating initial Category
var x = document.createElement("INPUT");
x.setAttribute("placeholder", "Category");
x.setAttribute("id", "categoryBtn" + categoryId);
x.classList.add("productButton");
x.classList.add("categoryBtn");
x.addEventListener("click", editable);
x.style.marginTop = "23px";
x.readOnly = true;

//seperator between two categories
var span = document.createElement("a");
var t = document.createTextNode("|");
span.style.fontSize = "42px";
span.style.alignItems = "center";
span.style.marginLeft = "12px";
span.style.marginRight = "12px";
span.style.color = "white";
span.style.position = "relative";
span.appendChild(t);

document.getElementById("category").append(x);
document.getElementById("category").append(span);

resized(x.id)


//Creating initial Item
var itemTextBox = document.createElement("INPUT");
itemTextBox.setAttribute("value", "Item");
itemTextBox.setAttribute("id", 'itemBtn' + itemId);
itemTextBox.classList.add("itemBtn");
itemTextBox.style.transition = "width 0.25s";
itemTextBox.style.textAlign = "center";
itemTextBox.style.padding = "20px";
// itemTextBox.style.marginRight = "18px";
itemTextBox.style.marginTop = "42px";
document.getElementById("item").appendChild(itemTextBox);
resized(itemTextBox.id)

createAddIcon()
createItemAddIcon()
noPerRow()

function createCategoryBtn() {
    categoryId++
    var addBtn = document.getElementById("addIcon")
    addBtn.parentNode.removeChild(addBtn);
    var x = document.createElement("INPUT");
    x.setAttribute("placeholder", "Category");
    x.setAttribute("id", "categoryBtn" + categoryId);
    x.classList.add("productButton");
    x.classList.add("categoryBtn");
    x.readOnly = true;
    x.addEventListener("click", editable);
    x.style.marginTop = "23px";
    document.getElementById("category").append(x);
    resized(x.id);
    lastCategoryCanEditable();
    // var itemsPerRow = wrapElements()
    // alert(itemsPerRow)



    var span = document.createElement("a");
    var t = document.createTextNode("|");
    span.style.fontSize = "42px";
    span.style.alignItems = "center";
    span.style.marginLeft = "10px";
    span.style.marginRight = "10px";
    span.style.color = "white";
    span.style.display = "inline";
    span.appendChild(t);

    document.getElementById("category").append(span);
    createAddIcon()
    noPerRow()

}

function createAddIcon() {
    var addBtn = document.createElement("INPUT");
    addBtn.setAttribute("type", "image");
    addBtn.setAttribute("src", "category names.png");
    document.getElementById("category").appendChild(addBtn);
    addBtn.style.height = "65px";
    addBtn.style.width = "41px";
    addBtn.style.textAlign = "center";
    addBtn.style.border = "0";
    addBtn.style.position = "absolute";
    addBtn.style.display = "inline";
    addBtn.style.backgroundColor = "Transparent";
    addBtn.setAttribute("id", "addIcon");
    addBtn.style.color = "white";
    addBtn.addEventListener("click", createCategoryBtn);

}

function createItemBtn() {
    itemId++
    var addItemBtn = document.getElementById("addItemIcon")
    addItemBtn.parentNode.removeChild(addItemBtn);
    var itemTextBox = document.createElement("INPUT");
    itemTextBox.setAttribute("value", "Item");
    itemTextBox.setAttribute("id", 'itemBtn' + itemId);
    itemTextBox.classList.add("itemBtn");
    itemTextBox.style.transition = "width 0.25s";
    itemTextBox.style.textAlign = "center";
    itemTextBox.style.padding = "20px";
    // itemTextBox.style.marginRight = "18px";
    itemTextBox.style.marginTop = "42px";
    document.getElementById("item").appendChild(itemTextBox);
    resized(itemTextBox.id)
    createItemAddIcon()

}


function createItemAddIcon() {
    var addItemBtn = document.createElement("BUTTON");
    // addItemBtn.setAttribute("type", "image");
    // addItemBtn.setAttribute("src", "itemAddIcon.png");
    document.getElementById("item").appendChild(addItemBtn);
    // addItemBtn.style.height = "30px";
    // addItemBtn.style.width = "16px";
    // addItemBtn.style.textAlign = "center";
    // addItemBtn.style.border = "0";
    // addItemBtn.style.position = "absolute";
    // addItemBtn.style.display = "inline";
    addItemBtn.classList.add("btn", "fa", "fa-plus", "fa-2x");
    addItemBtn.style.backgroundColor = "Transparent";
    addItemBtn.setAttribute("id", "addItemIcon")
    addItemBtn.addEventListener("click", createItemBtn);

}

//Resizable elements code

function resizable(el, factor) {
    var int = Number(factor) || 8.7;

    function resize() {
        el.style.width = ((el.value.length + 12) * int) + 'px'
    }
    var e = 'keyup,keypress,focus,blur,change'.split(',');
    for (var i in e) el.addEventListener(e[i], resize, false);
    resize();
}

function resized(id) {

    resizable(document.getElementById(id), 7);

}


function toggle() {
    var editBtn = document.getElementById("editBtn");

    if (editBtn.style.opacity === "0.5") {
        editBtn.style.opacity = "1";

    } else
        editBtn.style.opacity = "0.5";

}

function editable() {
    var editBtn = document.getElementById("editBtn");
    var categoryButtons = document.getElementsByClassName("categoryBtn");
    if (editBtn.style.opacity === "0.5") {
        for (e of categoryButtons) {
            e.readOnly = false

        }
    } else if (editBtn.style.opacity === "1") {
        lastCategoryCanEditable()
    }

}

function lastCategoryCanEditable() {
    var categoryButtons = document.getElementsByClassName("categoryBtn");
    for (e of categoryButtons) {
        e.readOnly = true
    }
    var last = categoryButtons[categoryButtons.length - 1];
    last.readOnly = false;
}

function wrapElements() {
    // var getNoOFCategoryButtons = document.getElementsByClassName("categoryBtn").length;
    // var getFullWidth = document.getElementById("category").offsetWidth;
    // var firstRow = document.getElementById("category").rows.length;
    // var items = document.querySelectorAll('#category').offsetTop.length;

    // var rowArray = Array.prototype.filter.call(document.querySelectorAll('.categoryBtn'), function(element) {
    //     if (element.offsetTop == firstTop) return element;
    // });

    // Return the amount of items in a row.

    // return rowArray.length;

}

function noPerRow() {
    // const category = Array.from(document.querySelectorAll("#category").children);
    // const baseOffset = category[0].offsetTop;
    // const breakIndex = category.findIndex(item => item.offsetTop > baseOffset);
    // const numPerRow = (breakIndex === -1 ? category.length : breakIndex);
    // alert(numPerRow)

    //total number of element
    var numberOfElements = document.querySelectorAll('.categoryBtn').length;
    //width of an element
    var widthOfElement = parseInt(document.querySelector('.categoryBtn').offsetWidth);
    //full width of element with margin
    var marginsOfElement = document.querySelector('.categoryBtn').currentStyle || window.getComputedStyle(document.querySelector('.categoryBtn'));
    widthOfElement = widthOfElement + parseInt(marginsOfElement.marginLeft) + parseInt(marginsOfElement.marginRight);
    //width of container
    var widthOfCategory = parseInt(document.querySelector('#category').offsetWidth);
    //padding of container
    var category = document.querySelector('#category').currentStyle || window.getComputedStyle(document.querySelector('#category'));
    var paddingOfContainer = parseInt(category.paddingLeft) + parseInt(category.paddingRight);
    // element per row
    var elementsPerRow = Math.min(parseInt((widthOfCategory - paddingOfContainer) / widthOfElement), numberOfElements);
    // alert(elementsPerRow)
}