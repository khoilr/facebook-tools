let k = 0;
const closeBox = () => {
    let a = document.querySelector(".l9j0dhe7.ama3r5zh");
    a ? a.parentNode.removeChild(a) : '';
    let b = document.querySelector(".l9j0dhe7.swg4t2nn");
    b ? b.parentNode.removeChild(b) : '';
}
setInterval(() => {
    // console.log(k);
    let foo = document.querySelectorAll(".nqmvxvec.j83agx80.jnigpg78.cxgpxx05.dflh9lhu.sj5x9vvc.scb9dxdr.odw8uiq3")[k];
    foo.scrollIntoView();
    foo.childNodes[0].click();
    let wait = 0;
    const checkDropdownBoxIsExist = setInterval(() => {
        // let foo = document.querySelectorAll(".nqmvxvec.j83agx80.jnigpg78.cxgpxx05.dflh9lhu.sj5x9vvc.scb9dxdr.odw8uiq3")[k];
        // foo.scrollIntoView();
        // foo.childNodes[0].click();
        wait++;
        if (wait == 10) {
            clearInterval(checkDropdownBoxIsExist);
            k++;
        }
        let chip = document.querySelectorAll(".oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.j83agx80.p7hjln8o.kvgmc6g5.oi9244e8.oygrvhab.h676nmdw.cxgpxx05.dflh9lhu.sj5x9vvc.scb9dxdr.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.l9j0dhe7.abiwlrkh.p8dawk7l.bp9cbjyn.dwo3fsh8.btwxx1t3.pfnyh3mw.du4w35lb");
        if (chip.length != 0) {
            // console.log(chip);
            let length = chip.length;
            for (var i = 0; i < length; i++) {
                let span = chip[i].childNodes[1].childNodes[0].childNodes[0].childNodes[0];
                if (span.innerHTML == 'Remove post') {
                    span.click();
                    break;
                }
            }
            if (i == length) {
                k++;
                closeBox();
                // chip[0].parentNode.parentNode.removeChild(chip[0].parentNode);
            }
            clearInterval(checkDropdownBoxIsExist);
        }
        // else chip = null;
    }, 1000);
    if (wait != 10)
        const checkConfirmBoxIsExist = setInterval(() => {
            let blabla = document.querySelector(".oajrlxb2.s1i5eluu.gcieejh5.bn081pho.humdl8nn.izx4hr6d.rq0escxv.nhd2j8a9.j83agx80.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.tkv8g59h.qt6c0cv9.fl8dtwsd.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.l9j0dhe7.abiwlrkh.p8dawk7l.beltcj47.p86d2i9g.aot14ch1.kzx2olss.cbu4d94t.taijpn5t.ni8dbmo4.stjgntxs.k4urcfbm.tv7at329");
            if (blabla) {
                blabla.click();
                clearInterval(checkConfirmBoxIsExist);
            }
        }, 1000);
}, 5000);
