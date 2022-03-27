# **Weekend Challenge: React Gallery Project**

## **Description**

The React Gallery displays images on a web page, and allows the user to click on a ***Like*** button to like an image. The number of likes each image has is displayed underneath each image. The user can also click on an image to see a text description of the image. They can then click on the text description of the image to go back to seeing the image displayed.   

## **Problems I Ran Into**

The first problem I ran into ocurred when I was working on getting the ***Like*** button to display a new like underneath each image when it was clicked on. I got the number of likes to display, but I wasn't updating the actual gallery each time the button was clicked. To solve this, I used the gallery from the `galleryList` that I looped through, then targeted the `gallery.likes`. Another problem I ran into was trying to get the text description of the image to show up when the image was clicked on, then the image to show back up when the text was clicked on. I eventually realized that I needed to create a `useState` variable which I called `showGallery`, and call it with a `!` like this: `setShowGallery(!showGallery)`. This allowed me to use a ternary to toggle between the image and text description when the user clicks on them. 

## **Built With**

- Javascript, React, HTML, CSS, Node, and Express

## **Acknowledgment**

Credit goes to Prime Digital Academy and my instructor Dane Smith for giving me the instruction and knowledge to make this project possible.
