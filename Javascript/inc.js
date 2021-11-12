var data=0;
        document.getElementById("root").innerHTML=data;
        function decrease(){
            if(data<=0){
                document.getElementById("root").innerHTML=0;
            }else{
                data=data-1;
                document.getElementById("root").innerHTML=data;
            }
            
        }
        function increase(){
            if(data>=10){
                document.getElementById("root").innerHTML=10;
            }else{
                data=data+1;
            document.getElementById("root").innerHTML=data;
            }
            
        }
        function red() {
            document.getElementById('black').src="images/redheadphone.png";
        }
        function black() {
            document.getElementById('black').src="images/headphone.png";
        }
        function blue() {
            document.getElementById('black').src="images/blueoheadphone.png";
        }
        function pink() {
            document.getElementById('black').src="images/pinkheadphones.png";
        }