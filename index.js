class MoneyBook{
    constructor(bookId,type,name,userId,date,money){
        this.bookId=bookId;
        this.type=type;
        this.date=date;
        this.name=name;
        this.userId=userId;
        this.money=money;
    }
}
let moneyBooks= [
    new MoneyBook("NVT01","DS1100","Nguyen Van A",26022022, 2016-2-13, 100000000),
    new MoneyBook("NVT03","TK0232","Nguyen Thi A",98022011, 2019-3-3,200000000),
    new MoneyBook("NVT02","TK0992","Le Van C", 11023304, 2022-9-12,300000000),
]


