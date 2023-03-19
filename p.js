createPath('scratch');
  function createPath(type){

    let id=["v1","v2","v3"];

    let t1=["t1","t2","t3"];

    let scratchsrc=["fb1.png","ap.png","swt.jpg"];

    let jssrc=["nnnnn.png","unnamed.png","ttt.png"];

    let mtdsrc=["bms.png","MakeMyTrip-Logo.png","fk.png"];

    let aid=["link1","link2","link3"];
   
    if(type=="scratch"){
      console.log("scratch");
      let names=["Fibonacci sequence ","Arithmetic progression ","Stop watch"]
      let arr=["https://scratch.mit.edu/projects/719638954","https://scratch.mit.edu/projects/716443578","https://scratch.mit.edu/projects/717399838"];
      for(let t=0;t<3;t++){ 
        document.getElementById(id[t]).style.backgroundImage="url('"+scratchsrc[t]+"')";
        document.getElementById(t1[t]).innerText=names[t];
        let path=document.getElementById(aid[t]);
        path.href=arr[t];
      }
    }
    else if(type=="js"){
      console.log("js")
      let names=["Classic nim","Number conversion","Tic Tac Toe"];
      let arr=["https://project-submission.karuppasamyr.repl.co","https://number-convertion.karuppasamyr.repl.co","https://tic-tac-toe.karuppasamyr.repl.co"]; 
      for(let t=0;t<3;t++){
       document.getElementById(id[t]).style.backgroundImage="url('"+jssrc[t]+"')";
       document.getElementById("name"+(t+1)).style.background="#F9F9F9";
       document.getElementById(t1[t]).innerText=names[t];
       let path=document.getElementById(aid[t]);
       path.href=arr[t];
      }
    }
    else if(type=="mtd"){
      console.log("emtered manual")
      let names=["Book my show","Make my trip","Flipcart"];
      let arr=["https://sheet.zoho.com/sheet/open/s0tmbc39b29c89985427fbb56f2f07d143232?sheetid=0&range=A1","https://sheet.zoho.com/sheet/open/5gu9yf9ae4377d3184383ac20dadfade79fc9?sheetid=0&range=A1","https://sheet.zoho.com/sheet/open/5gu9yfbc532fad33247848920b2e528586218?sheetid=0&range=C20"]
      for(let t=0;t<3;t++){
        document.getElementById(id[t]).style.backgroundImage="url('"+mtdsrc[t]+"')";
        document.getElementById("name"+(t+1)).style.background="#F9F9F9";
        document.getElementById(t1[t]).innerText=names[t];
        let path=document.getElementById(aid[t]);
        path.href=arr[t];
       }
    }
    else if(type=="ide"){
      console.log(1234);
      let idesrc=["LBB.png","fk.png","mz.png"];
      let names=["Fashoin Website","Flipcart","Maruti Suzuki"];
      let arr=["https://workdrive.zoho.com/file/5gu9y7a8f59b5331744c4b88279bb0e97b8eb","https://workdrive.zoho.com/file/5gu9ya3912433fdff4bd0a03fb41f296884c6","https://workdrive.zoho.com/file/5gu9y9212d8b441e0499e9ce4580d6be6416a"]
      for(let t=0;t<3;t++){
        document.getElementById(id[t]).style.backgroundImage="url('"+idesrc[t]+"')";
        document.getElementById("name"+(t+1)).style.background="#F9F9F9";
        document.getElementById(t1[t]).innerText=names[t];
        let path=document.getElementById(aid[t]);
        path.href=arr[t];
       }

    }
    else if(type=="wd"){
      console.log("entered webdriver")
      let wdsrc=["am1.jpg","insta.jpg","ibaco1.png"];
      let names=["Amazon","Instagram","Ibaco"];
      let arr=["https://workdrive.zoho.com/file/5gu9y0a30e053240f49b591396878707cca8c","https://workdrive.zoho.com/file/5gu9y2f2043973b3c414a92ec1f9673c336e7","https://workdrive.zoho.com/file/5gu9ye74b8f076ff44c3580f1d44c3f8a7432"];
      for(let t=0;t<3;t++){
        document.getElementById(id[t]).style.backgroundImage="url('"+wdsrc[t]+"')";
        document.getElementById("name"+(t+1)).style.background="#F9F9F9";
        document.getElementById(t1[t]).innerText=names[t];
        let path=document.getElementById(aid[t]);
        path.href=arr[t];
       }

    }
    else if(type="ng"){
      let names=["Google sites","Google classroom and forms","Youtube"];
      let ysrc=["gs1.png","ggs.png","yt.png"];
      let arr=["https://workdrive.zoho.com/file/sfmkwc9c27027de754bd3b8c02c0f2329c8c8","https://workdrive.zoho.com/file/sfmkw2cb16155634b4a85a9165ba92a9697a0","https://workdrive.zoho.com/file/sfmkw232db35d4fe947d1a3d608a8196c29ee"];
      for(let t=0;t<3;t++){
        document.getElementById(id[t]).style.backgroundImage="url('"+ysrc[t]+"')";
        document.getElementById("name"+(t+1)).style.background="#F9F9F9";
        document.getElementById(t1[t]).innerText=names[t];
        let path=document.getElementById(aid[t]);
        path.href=arr[t];
        
       }

    }
  }

  

  function sendEmail() {
    /* // Get the email address from the input box */
  
    /* // Send the email using EmailJS */
    emailjs.init("odndy7Lh8npREBqqY");
    var params = {
        name: document.getElementById("username").value,
        mailid:document.getElementById("usermailid").value,
        msg:document.getElementById("messege").value
    };
    emailjs.send("service_cwpfwmh", "template_sz1q9zw", params)
        .then(function(response) {
            console.log("Email sent", response);
        }, function(error) {
            console.log("Error sending email", error);
        });
        console.log(email, params);
  }
  