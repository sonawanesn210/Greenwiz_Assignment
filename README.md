
# Greenwiz_Assignment

Overview:
Write a code which will take website link as an input and download images of that.

Description:
While starting the program, supply the website name like https://www.growpital.com
Your program should scan for all links available in the page and traverse them as well.
For each page scan for available images and download them in a folder.
Create a doc,
describing the functionality of your program
what all features can be added

Constraints:
Do not download the same image twice.
Do not traverse the same link twice.
Only traverse the pages of given domain
Only download the images of given domain.


# How to start..

## Run Locally

1)Clone the project by using 
 git clone https://github.com/sonawanesn210/Greenwiz_Assignment.git

2)Go to the project directory
 cd Greenwiz_Assignment/


3)Install dependencies
  npm install
(cherio,request,node-image-downloader)

4)run the below command on terminal
  node index.js


## How to give an input(for links)
As given in question we have to use  https://www.growpital.com  this link so I had assign it in link variable.(If anyone wants to change the link then change it at link variable and also at baseUrl)


## Where to expect the output(of links)
After running command node index.js 
ImagesLink.txt file will be added and all links available in the page will be added in that file

## How to give an input(for images)
As I use 'node-image-downloader' package to download the images so we should provide the path of that images.In the given link(https://www.growpital.com) I didn't get the exact path so I added all links seperately from ImagesLink.txt file 


## Where to expect the output(of images)

Downloaded images will get add in downloads folder


## 🔗 Contact
If you want to contact me, you can reach me through below handles.

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/swapnali-sonawane-7a8886238/)
[![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sonawanesn210)
[![gmail](https://img.shields.io/badge/gmail-0A66C2?style=for-the-badge&logo=gmail&logoColor=white)](sonawanesn210@gmail.com)
