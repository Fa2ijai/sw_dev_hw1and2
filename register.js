console.log("Hello")
function checkValid(){
    let name = document.getElementById("name");
    let size = document.getElementById("size");
    let wantTable = document.forms["register"]["table"];
    let amount = document.getElementById("amount");
    let person = document.getElementById("person");
    let phone = document.getElementById("phone");
    if(name.value==''){
        alert("โปรดระบุ ชื่อบริษัท")
    }
    else if(size.value==''){
        alert("โปรดเลือก ขนาดบูธ")
    }
    else if(amount.value>10||amount.value<1){
        amount.value ='';
        alert("โปรดระบุจำนวน(1-10)")
    }
    else if(person.value=='' ){
        alert("โปรดระบุ ชื่อผู้ติดต่อ")
    }
    else if(phone.value== ''){
        alert("โปรดระบุ เบอร์ผู้ติดต่อ")
    }
    console.log(name.value,size.value,wantTable.value,amount.value,person.value,phone.value);
}