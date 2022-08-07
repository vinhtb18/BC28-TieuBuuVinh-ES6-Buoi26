let tinhDiemTrungBinh = (...danhSachDiem) => {
    let tongDiem = 0;
    let diemTrungBinh = 0;
    for (let diem of danhSachDiem) {
        tongDiem += diem;
    }
    return diemTrungBinh = (tongDiem / (danhSachDiem.length)).toFixed(2);
}

document.querySelector('#btnKhoi1').onclick = function () {
    document.querySelector('#tbKhoi1').innerHTML = tinhDiemTrungBinh(
        +document.querySelector('#inpToan').value, +document.querySelector('#inpLy').value,
        +document.querySelector('#inpHoa').value
    )
}

document.querySelector('#btnKhoi2').onclick = function () {
    document.querySelector('#tbKhoi2').innerHTML = tinhDiemTrungBinh(
        +document.querySelector('#inpVan').value, +document.querySelector('#inpSu').value,
        +document.querySelector('#inpDia').value,
        +document.querySelector('#inpEnglish').value

    )
}