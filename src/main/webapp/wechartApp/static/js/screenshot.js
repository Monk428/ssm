
import html2canvas from 'html2canvas';

function DPR() {
    if (window.devicePixelRatio && window.devicePixelRatio > 1) {
        return window.devicePixelRatio;
    }
    return 1;
}

function parseValue(value) {
    return parseInt(value, 10);
}

export default function getBase64(el, callback) {
    const dom = el;
    const box = window.getComputedStyle(dom);
    const width = parseValue(box.width);
    const height = parseValue(box.height);
    const scaleBy = DPR();
    const canvas = document.createElement('canvas');
    canvas.width = width * scaleBy;
    canvas.height = height * scaleBy;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const context = canvas.getContext('2d');
    context.scale(scaleBy, scaleBy);
    html2canvas(dom, {
        canvas,
    }).then(c => {
        // 把canvas转位base64
        callback(c.toDataURL('image/png') || '');
    });
}
