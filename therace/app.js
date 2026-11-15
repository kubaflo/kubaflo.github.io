const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCNsciel-NU_mgPUv48aQnF3KDjfV6Yhsk",
    authDomain: "the-race-test.firebaseapp.com",
    projectId: "the-race-test",
    storageBucket: "the-race-test.appspot.com",
    messagingSenderId: "527518903128",
    appId: "1:527518903128:web:5075c7f319fe34af1cd32d",
    measurementId: "G-6E23Q0NQ0W"
});


const db = firebaseApp.firestore();

const addTag=()=> {

    fetch("notifications.php", { method: "POST", body: {title: "Hello", body: "Test", condition: "'Formula1Article' in topics"} });
    // .then(res => res.text())
    // .then((txt) => {
    //   console.log(txt);
    // })
    // .catch((err) => { console.error(err); });

   

    var completelist= document.getElementById("tagsList");
    var tag=document.getElementById("tagInput").value;

    if(tag!="") {
        document.getElementById("tagInput").value="";
        completelist.innerHTML += "<li>" + tag + "</li>";
    }
}

const insertArticle = () => {
    var id="taest";
    var tags = [];

    document
    .getElementById("tagsList")
    .querySelectorAll('li')
    .forEach((item) => {
        tags.push(item.innerText)
    });
      
    db.collection("test").doc(id).set({
        ID:id,
        Title: document.getElementById("title").value,
        Image: document.getElementById("image").value,
        ShortContent:document.getElementById("shortContent").value,
        Url:document.getElementById("url").value,
        Date: setDate(new Date()), //YYYY.MM.DD HH:MM (UTC time zone)
        Tags: tags,
        NumberOfComments:0,
    });
}

function setDate(inputDate) {
    let date, month, year, hour, minute;
  
    date = inputDate.getUTCDate();
    month = inputDate.getUTCMonth() + 1;
    year = inputDate.getUTCFullYear();
    hour=inputDate.getUTCHours();
    minute=inputDate.getUTCMinutes();
  
      date = date
          .toString()
          .padStart(2, '0');
  
      month = month
          .toString()
          .padStart(2, '0');

     hour = hour
          .toString()
          .padStart(2, '0');

    minute = minute
          .toString()
          .padStart(2, '0');
  
    return `${year}.${month}.${date} ${hour}:${minute}`;
  }
