function send()
{
    var jsten = document.getElementById("ten").value;
    var jsho = document.getElementById("ho").value;
    var jstaikhoan = document.getElementById("taikhoan").value;
    var jsmatkhau = document.getElementById("matkhau").value;
    var jsrematkhau = document.getElementById("rematkhau").value;
    if(jsten == "" || jsho == "" || jstaikhoan == "" || jsmatkhau == "" || jsrematkhau == "")
    {
        alert("Nhập thiếu kìa D**!")
    }
    else if(!isNaN(jsten))
    {
        alert("Số?????")
    }
    else if(!isNaN(jsho))
    {
        alert("Số???")
    }
    else if(jsmatkhau != jsrematkhau)
    {
        alert("Không trùng khớp")
    }
    else
    {
        alert("Đăng ký thành kong!")
    }
}