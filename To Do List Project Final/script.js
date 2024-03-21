var ba1 = document.querySelector(".b1");

ba1.addEventListener("click", function () {

    var input1 = document.querySelector("#inp1").value;
    console.log(input1);
    console.log(input1.length);

    if (input1.length == 0) {
        alert("You Must Write Something");
    }

    else {
        var d1 = document.createElement("div");
        d1.className = "da1";
        console.log(d1);

        var d2 = document.createElement("div");
        d2.className = "da2";
        d2.style.display = "flex";

        var img1 = document.createElement("img");
        img1.className = "image1";
        img1.src = "./images/unchecked.png";
        img1.style.width = "18px";

        var pa1 = document.createElement("p");
        pa1.className = "p1";
        pa1.innerHTML = input1;

        var d3 = document.createElement("div");
        d3.className = "da3";

        var d4 = document.createElement("div");
        d4.className = "da4";

        var d5 = document.createElement("div");
        d5.className = "da5";

        var pa3 = document.createElement("p");
        pa3.className = "p3";
        pa3.innerHTML = "X";

        // var ba1=document.createElement("button");
        // ba1.className="b2";
        // ba1.innerHTML="X";

        var mb = document.querySelector(".mainbox");
        var bo2 = document.querySelector(".box2");
        mb.append(bo2);
        bo2.append(d1);
        d1.append(d2);
        d2.append(d3);
        d3.append(img1);
        d3.append(pa1);
        d2.append(d4);
        d4.append(d5);
        d5.append(pa3);

        var t1 = gsap.timeline();
        t1.from(".da2", {
            duration: 1,
            yPercent: 100,
            ease: "power4.out",
            stagger: 0.1,
            opacity: 0,
        })

        var buttonClicked = false;

        d3.addEventListener("click", e => {
            console.log(this);
            img1.style.display = "none";
            if (!buttonClicked) {
                var img2 = document.createElement("img");
                img2.className = "image2";
                img2.src = "./images/checked.png";
                img2.style.width = "18px";
                d3.append(img2);
                pa1.innerHTML = "<del>" + input1 + "</del>";
                d3.append(pa1);
                buttonClicked=true;
            }

        })

        d5.addEventListener("click", function () {
            console.log(this);
            d1.style.display = "none";
        })

    }

    var input11 = document.getElementById("inp1").value = '';
    console.log(input11);

});


