# ITMD362-Assignment4
Your README.txt must include:

The design you implemented
Description of your JavaScript interactions
Any challenges you face
 
Design Impemented: 
The design I implemented is based off the linked Figma file. The Figma design is actually based off of the original wireframe for a website design I had previously completed.
https://www.figma.com/design/Pe76PIEDSJujPROCTucR3L/Corky-s-Home-Page-Design?node-id=0-1&t=dJADmFMC4uqCkXBo-1 

Javascript Interactions:
1. Image slider for the menu pictures. In a real website there would be a larger number of pictures. 
2. I also added a dialog popup after the form is submitted to confirm if all fields were filled out properly. 
3. A shopping cart with a dynamic product list that can be changed in the order.js javascript file. It shows total items in the cart the total price. Also lets you remove, add duplicate items and fully clear the items from the cart. 

Challenges Faced (Updated every Commit):
The current challenges I have faced is that since I exported the HTML and CSS code directly from Figma the naming conventions have been rough. I am currently treating it like a code review by going through the HTML and CSS files to check for syntax and basic structuring. 
At this point it seems like it has just about matched the amount of effort it would have taken to get to here. Most of the Figma code was already using flex-box however certain sections may work better in a grid layout so trying to reverse that feels like it is taking more time than if I would have just started with my own code.
Yea. This might be worse than just doing it myself. (INSERT HEAD EXPLOSION EMOJI HERE) This feels like cleaning up AI generated code.  I need to readd the Contact Us Section. It has become easier to just entirely scrap it since it wasn't an actual form anyways. 
Hero section is currently not stretching properly so need to add that. Will also go back and add the Contact Form in and will then begin Javascript interactivity including hamburger menu in smaller screen sizes, proper contact submission form, javascript map to find the location. 
I just created a javascript slider to scroll through the menu images. This process was fairly simple as I have made an image slider like this before so was able to look at the way I had done it before and reformatted to fit the same style of this site. GoogleAPI key isn't working for me to make an embedded map so I need to think about different javascript features I could add to this. 
Couldn't figure out why my shopping list was not working. I forgot to load the script in the html page, woops. 
Just spent 45 minutes figuring out why the button still was not working. My nav bar is not able to be clicked, nav-bar was set to position: absolute not relative. This took too long to find. :(
This is the first time that I had done anything with local storage or even used more dynamic content with javascript so I had to do a lot of tutorial videos to get something that seemed to be working right. I feel there is alot that I could add for the menu like pictuers, customizable toppings and "combo meals" that would be in something like a restaurant ordering system. Overall I felt like it was pretty challenging to try and get the shopping cart working properly but it is what I am most proud of from this assignment.  
