//creats an H1 with the text of Hello
const h1 = document.createElement('h1');
h1.innerText = "Hello"

//selects the body in the html and appends the H1 to it
const body = document.querySelector('body');
body.append(h1);

//adds the class of textCenter to the H1
h1.classList.add("border")

//adds textCenter css class to the body
//centers all of the elements
body.classList.add('textCenter');


//function creates a random rbg color
//used to color the H1 and the buttons
function randomColor() {
    //each variable creates a random number from 0 to 255 
    const r = Math.trunc((Math.random() * 255) + 1);
    const g = Math.trunc((Math.random() * 255) + 1);
    const b = Math.trunc((Math.random() * 255) + 1);

    //returns in the form of a rgb(0,0,0) color
    return `rgb(${r},${g},${b})`;
}

//changes color of h1 when clicked
//adds a text the says what the rgb color is
h1.addEventListener('click', () => {
    //variable to hold the value of the color
    const color = randomColor();

    //adds color to the h1 style 
    h1.style.color = color;
    //changes the h1 text to include the name of the color
    h1.innerText = `Hello, ${color}`
})
const div = document.createElement('div');
body.append(div);

//dynamically creates 10 buttons
for (let i = 1; i <= 10; i++) {
    //creates a button 
    const btn = document.createElement('button');
    //appends the button to a div
    div.append(btn);
    //changes the text of the button
    btn.innerText = "Click ME"
    btn.setAttribute("id", "colorBtn");

}

//selects all buttons
const allBtn = document.querySelectorAll('#colorBtn')
for (let b of allBtn) {
    b.style.color = 'black';
    b.style.backgroundColor = 'white';

}
//loops over all buttons with an event listener
for (let b of allBtn) {

    //changes the buttons background color and text color on click
    //both will be different colors
    b.addEventListener('click', () => {
        b.style.color = randomColor();
        b.style.backgroundColor = randomColor();
    })
}


//creates a button to use to reset the header and other buttons
const reset = document.createElement('button');
//adds text to the button
reset.innerText = "Reset Color";
//turns the text to the color red
reset.style.color = 'red';
// reset.style.color = 'red';
body.append(reset);
//gives reset button an id of reset
reset.setAttribute('id', "reset");

//adds event listener to the reset button
//when clicked it resets the color and name of hello
//back to black and it resets all of the click me buttons
reset.addEventListener('click', () => {
    h1.style.color = 'black';
    h1.innerText = "Hello";
    //loops over all of the buttons to reset them
    for (let b of allBtn) {
        b.style.color = 'black';
        b.style.backgroundColor = 'white';

    }
}
)


//creates a form
const form = document.createElement('form');
//apends to the end of body - after buttons
body.append(form);

//creates an input for our form
const createInput = document.createElement('input');
//gives and id of input
createInput.setAttribute('id', "input");
//appends to the form
form.appendChild(createInput);

//creates button for the form
const formButton = document.createElement('button');
//adds text to button - Submit
formButton.innerText = "Submit";
//apends button to the form
form.append(formButton);



//creates a unordered list
const ul = document.createElement('ul');
//adds the id of name to the unordered list element
ul.setAttribute('id', "names")
//appends in the form 
const div2 = document.createElement('div');
div2.setAttribute('id', 'ulDiv');
//appends div2 to the bottom of form
form.append(div2);
//appends unordered list as a child of div
//div will be the container for the list
div2.appendChild(ul);

div2.classList.add("textCenter");
ul.classList.add('ulClass');



//adds a action to the form
form.action = "/stuff";

//event listener for when information is submitted
const h2 = document.createElement('h2');
//appends h2 to the bottom of the form
form.append(h2);
//span in the h2 turns the 'delete' word red
//h2 only shows if items are in the list
//message tells the user how to delete items in the list
h2.innerHTML = 'click on items to' + "<span style=\"color:red\">"
    + ' DELETE' + "</span> " + ' from list';
//hides the h2 until needed 
h2.style.display = 'none';
const green = document.createElement('button');
green.setAttribute("id", 'colorB');
green.innerText = 'Green';
green.style.color = 'green';
body.append(green);

const yellow = document.createElement('button');
yellow.setAttribute("id", "colorB");
yellow.innerText = 'Yellow';
yellow.style.color = 'yellow';
body.append(yellow);

const blue = document.createElement('button');
blue.setAttribute("id", 'colorB');
blue.innerText = 'Blue';
blue.style.color = 'blue';
body.append(blue);
const hideB = document.querySelectorAll('#colorB');
for (let h of hideB) {
    h.style.display = 'none';
}

form.addEventListener('submit', (e) => {
    //prevents form from going to a different page
    e.preventDefault();

    //makes the list element
    const li = document.createElement('li');
    //gives the list element an id of #list
    li.setAttribute('id', 'list')
    //adds the classes centerText and li 
    //this centers the list
    li.classList.add('centerText', 'li')
    //puts the input value into the list 
    li.innerText = input.value;
    //adds the list to the ul
    ul.append(li);
    //resets the input value to empty
    input.value = "";

    //this checks if theres any items in the list
    //if theres more then zero items in the list 
    //it will who the h2
    if (document.querySelectorAll('li').length > 0) {
        h2.style.display = 'block';
        for (let h of hideB) {
            h.style.display = 'inline-block';
        }

    }


    //selects all lists with the id of #list
    const allLi = document.querySelectorAll('li');

    green.addEventListener('click', () => {
        for (let l of allLi) {
            l.style.color = 'green';
        }
    })


    blue.addEventListener('click', () => {
        for (let l of allLi) {
            l.style.color = 'blue';
        }
    })

    yellow.addEventListener('click', () => {
        for (let l of allLi) {
            l.style.color = 'yellow';
        }
    })

    //loops over all list items
    for (let l of allLi) {
        //when you click on a list item it deletes it
        l.addEventListener('click', () => {
            //delets list item
            l.remove();
            //checks the length of the list
            //if the length is 0 it hides the h2
            if (document.querySelectorAll('li').length == 0) {
                h2.style.display = 'none';
                for (let h of hideB) {
                    h.style.display = 'none';
                }
            }
        })
    }



})
