const modalData = {
    alipay: {
        title: "😘支付宝扫一扫投喂😆", //支付方式名称
        qrCode: "public/QRcode/Alipay.jpg", //收款码二维码图片
    },
    wechat: {
        title: "😘微信扫一扫投喂😆", //支付方式名称
        qrCode: "public/QRcode/WeChat.jpg", //收款码二维码图片
    }
};

function openModal(type) {
    const modal = document.getElementById("myModal");
    const title = document.getElementById("modalTitle");
    const qrCode = document.getElementById("qrCode");

    title.textContent = modalData[type].title;
    qrCode.src = modalData[type].qrCode;

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}