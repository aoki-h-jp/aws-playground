function prom (count) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(count);    
            count += 2;
            resolve(count);
        }, 1000);
    });
}

prom(0).then(c => {
    return prom(c);
}).then(c => {
    return prom(c);
}).then(c => {
    return prom(c);
}).catch(e => {
    console.error(e);
}).finally(() => {});