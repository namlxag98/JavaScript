var DienThoai = {
    name: 'Iphone',
    color: 'White',
    guarantee: '2020',
    intro: function() {
        console.log(this.guarantee);
    }
};

var HocSinh = {
    name: 'Nam',
    year: '1998',
    GPA: 4.0,
    intro: function(){
        console.log('GPA cua ',this.name, ' la: ',this.GPA);
    }
};

console.log(DienThoai.name);
console.log(HocSinh.intro());