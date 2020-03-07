function bayar() {
    var uang = 50000;
    var bayaran = 23500;
    var stock = [0, 0, 0, 0, 0, 0, 0];
    var name = [50000, 20000, 10000, 5000, 2000, 1000, 500];
    var total_kembalian = 0;
    var temp_kembalian = 0;
    total_kembalian = uang - total;
    temp_kembalian = total_kembalian;
    while (temp_kembalian != 0) {
        if (temp_kembalian >= 50000) {
            temp_kembalian = temp_kembalian - 50000;
            stock[0] += 1;
        } else if (temp_kembalian >= 20000) {
            temp_kembalian = temp_kembalian - 20000;
            stock[1] += 1;
        } else if (temp_kembalian >= 10000) {
            temp_kembalian = temp_kembalian - 10000;
            stock[2] += 1;
        } else if (temp_kembalian >= 5000) {
            temp_kembalian = temp_kembalian - 5000;
            stock[3] += 1;
        } else if (temp_kembalian >= 2000) {
            temp_kembalian = temp_kembalian - 2000;
            stock[4] += 1;
        } else if (temp_kembalian >= 1000) {
            temp_kembalian = temp_kembalian - 1000;
            stock[5] += 1;
        } else if (temp_kembalian >= 500) {
            temp_kembalian = temp_kembalian - 500;
            stock[6] += 1;
        }

        for (var i = 0; i < stock.length; i++) {
            if (stock[i] > 0) {
                //Console.WriteLine(stock[i] + " x " + name[i]);
                document.write(stock[i] + " x " + name[i]);
            }

        }
    }
}
console.log(bayar);