function showALlProducts(){
    let content='';
    for(let i=0; i<moneyBooks.length;i++){
        content+=
           ` <tr>
                <td>${moneyBooks[i].bookId}</td>
                <td>${moneyBooks[i].type}</td>
                <td>${moneyBooks[i].name}</td>
                <td>${moneyBooks[i].userId}</td>
                <td>${moneyBooks[i].date}</td>
                <td>${moneyBooks[i].money}</td>
                <td><button onClick="editByIndex(${i})">Sửa</button></td>
                <td><button onClick="deleteByIndex(${i})">Xóa</button></td>
        </tr>`
    }
    document.getElementById("bodyTable").innerHTML=content
                }
                showALlProducts();
function deleteByIndex(id) {
    if (confirm("xác nhận xóa")) {
    moneyBooks.splice(id, 1);
  showALlProducts();}
}
function addNewProduct() {
    let bookId= document.getElementById("bookId").value;
    for(let i=0; i<moneyBooks.length;i++){
        if(moneyBooks[i].bookId==bookId){
            alert("lỗi trùng Mã sổ")
        }
    }
    let type= document.getElementById("type").value;
    let name= document.getElementById("name").value;
    let userId= document.getElementById("userId").value;
    let date= document.getElementById("date").value;
    let money = document.getElementById("money").value;
    moneyBooks.push({bookId:bookId,type:type,name:name,userId:userId,date:date,money:money});
    showALlProducts();
}
function editByIndex(id) {
    text =  `<fieldset>
     <legend>Sửa thông tin</legend>
     Mã sổ <input value='${moneyBooks[id].bookId}' id ="bookId1"><br><br>
     Loại tiết kiệm<input value='${moneyBooks[id].type}' id ="type1"><br><br>
     Họ và tên  <input value='${moneyBooks[id].name}' id ="name1"><br><br>
     Chứng minh nhân dân <input value='${moneyBooks[id].userId}' id ="userId1"><br><br>
     Ngày mở sổ <input value='${moneyBooks[id].date}' id ="date1"><br><br>
     Số tiền gửi  <input value='${moneyBooks[id].money}' id ="money1"><br><br>
     <button onclick="ok(${id})">OK</button>
     <button type="reset" onclick="reset()">Hủy</button>
    </fieldset>`
    document.getElementById("bodyTable2").innerHTML = text;


}
function ok(index) {
    let bookId1= document.getElementById("bookId1").value;
    let type1= document.getElementById("type1").value;
    let name1= document.getElementById("name1").value;
    let userId1= document.getElementById("userId1").value;
    let date1= document.getElementById("date1").value;
    let money1= document.getElementById("money1").value;
    let newProduct = new MoneyBook(bookId1,type1,name1,userId1,date1,money1);
    moneyBooks[index]=newProduct;
    showALlProducts();
    reset()
}
function reset() {
    document.getElementById("bodyTable2").innerHTML = "";

}