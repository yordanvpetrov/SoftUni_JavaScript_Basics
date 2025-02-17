function pcStore(cpu, gpu, ram, qtyRam, discount) {

    let cpuBgn = cpu * 1.57;
    let gpuBgn = gpu * 1.57;
    let ramBgn = ((ram * qtyRam) * 1.57);

    let cpuDiscount = cpuBgn - cpuBgn * discount;
    let gpuDiscount = gpuBgn - gpuBgn * discount;

    let total = cpuDiscount + gpuDiscount + ramBgn;
    
    console.log(`Money needed - ${total.toFixed(2)} leva.`);
}

pcStore(500, 200, 80, 2, 0.05)