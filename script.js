$(document).ready(function() {
      var path = new URL(window.location);
      var liffId = path.searchParams.get('line://app/2000548624-ARoabQ9p?linkurl=https://aliyahaunjo.github.io/webapp/?apps=https://script.google.com/macros/s/AKfycbxwZ-Yw4R3W2lG7rWrmivKxstwGG04DhmU0W3klFnOLxu4l7uekYnlOMrQAy39Zy7ddow/exec');
        liff.init({
          liffId: "2000548624-ARoabQ9p" //วางLiffId ตรงนี้
        })
        .then(() => {
          if (liff.isInClient()) {
            if (liff.getOS() == "ios") {
              window.location.replace(""+liffId);              
            } else if (liff.getOS() == "android") {
              window.location.replace(""+liffId);
            }

            setTimeout(function(){ liff.closeWindow(); }, 3000); //เปลี่ยนเวลาที่ต้องการ Redirect
          }
        })
        .catch((err) => {
        });
      });

  // Check if LIFF is initialized
if (liff.isInClient()) {
    // Add a click event listener to the close button
    document.getElementById("closeButton").addEventListener("click", function() {
        // Close the LIFF app when the button is clicked
        liff.closeWindow();
    });
} else {
    // Handle the case when the app is not running in the LINE app
    console.log("This app is not running in the LINE app.");
}
