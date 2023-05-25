function countBy(x, n) {
    const r = [];
    let times = n
    for (let i = x; times > 0 ; i+= x) {
        r.push(i);
        times --;
    }
    return r;
}