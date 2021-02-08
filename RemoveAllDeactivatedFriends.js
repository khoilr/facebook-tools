let count = 0;
const remove = async (i) => {
    let list = document.querySelectorAll(".bp9cbjyn.ue3kfks5.pw54ja7n.uo3d90p7.l82x9zwi.n1f8r23x.rq0escxv.j83agx80.bi6gxh9e.discj3wi.hv4rvrfc.ihqw7lf3.dati1w0a.gfomwglr");
    let length = list.length;
    // console.log(length);
    // console.log(i);
    if (i < length) {
        let current = list[i];
        let bodyRect = document.body.getBoundingClientRect();
        let currentReact = current.getBoundingClientRect();
        let currentOffset = currentReact.top - bodyRect.top;
        window.scroll({
            top: currentOffset - 200,
            behavior: 'smooth'
        })
        // current.scrollIntoView();
        let button = current.querySelector(".d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.rrkovp55.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d3f4x2em.fe6kdd0r.mau55g9w.c8b282yb.iv3no6db.gfeo3gy3.a3bd9o3v.lrazzd5p.oo9gr5id").childNodes[0];
        button.click();
        // i++;
        var confirm = false;
        let name;
        const optionsBox = () => {
            return new Promise((resolve, reject) => {
                let chooseOption = setInterval(() => {
                    let dropdownBox = document.querySelectorAll(".oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.j83agx80.p7hjln8o.kvgmc6g5.oi9244e8.oygrvhab.h676nmdw.cxgpxx05.dflh9lhu.sj5x9vvc.scb9dxdr.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.l9j0dhe7.abiwlrkh.p8dawk7l.bp9cbjyn.dwo3fsh8.btwxx1t3.pfnyh3mw.du4w35lb");
                    // console.log("Options: " + dropdownBox.length);
                    if (dropdownBox.length == 1) {    
                        name = current.querySelector(".d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.rrkovp55.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d3f4x2em.fe6kdd0r.mau55g9w.c8b282yb.mdeji52x.jagab5yi.g1cxx5fr.lrazzd5p.oo9gr5id").innerHTML;
                        let unfriend = dropdownBox[0].querySelector('.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.rrkovp55.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d3f4x2em.fe6kdd0r.mau55g9w.c8b282yb.iv3no6db.gfeo3gy3.a3bd9o3v.ekzkrbhg.oo9gr5id.hzawbc8m');
                        unfriend.innerHTML == 'Unfriend' ? unfriend.click() : '';
                        confirm = true;
                        resolve();
                        clearInterval(chooseOption);
                    }
                    else if (dropdownBox.length > 1) {
                        let box = document.querySelectorAll(".q5bimw55.rpm2j7zs.k7i0oixp.gvuykj2m.j83agx80.cbu4d94t.ni8dbmo4.eg9m0zos.l9j0dhe7.du4w35lb.ofs802cu.pohlnb88.dkue75c7.mb9wzai9.l56l04vs.r57mb794.kh7kg01d.c3g1iek1.gs1a9yip.rq0escxv.cxgpxx05.rz4wbd8a.sj5x9vvc.a8nywdso.geg40m2u");
                        let lengthBox = box.length;
                        for (j = 0; j < lengthBox; j++)
                            box[j].parentNode.parentNode.removeChild(box[j].parentNode);
                        resolve();
                        clearInterval(chooseOption);
                    }
                }, 1000);
            })
        }
        await optionsBox();
        if (confirm) {
            const confirmClick = () => {
                return new Promise((resolve, reject) => {
                    let click = setInterval(() => {
                        let confirmButton = document.querySelector(".oajrlxb2.s1i5eluu.gcieejh5.bn081pho.humdl8nn.izx4hr6d.rq0escxv.nhd2j8a9.j83agx80.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.d1544ag0.qt6c0cv9.tw6a2znq.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.l9j0dhe7.abiwlrkh.p8dawk7l.beltcj47.p86d2i9g.aot14ch1.kzx2olss.cbu4d94t.taijpn5t.ni8dbmo4.stjgntxs.k4urcfbm.tv7at329");
                        // console.log("pending");
                        if (confirmButton) {
                            confirmButton.click();
                            console.log(name + " is removed")
                            console.log(++count + " friends are removed");
                            console.log("-------------------------");
                            resolve();
                            clearInterval(click);
                        }
                    }, 1000);
                })
            };
            await confirmClick();
        }
    }
    // await delay(1000);
    remove(++i);
}
remove(0);
