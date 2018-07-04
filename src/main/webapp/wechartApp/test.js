const axios = require('axios');
const fs = require('fs');
let json = '';
let arr = [];
function getHtmlImg() {
    for (let i = 0, j = 30; i < j; i += 1) {
        const url = 'https://q.gree.com/qr/prod/getAll';
        const getById = 'https://q.gree.com/qr/prod/getById';
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQbGF0Zm9ybVR5cGUiOjAsImV4cCI6MTUzMDY4NDgwNCwib3JpZ19pYXQiOjE1MzA2NzQwMDQsInVzZXJpZCI6MTUyNzIxMjU0MzEzNX0.FzFcYsSgxUwlGUkcbX-tJGbymQ1e2lMKUnj4mOF7YQo';
        axios.get(url, {
            headers: {
                Authorization: token,
            },
            params: {
                page: i,
                size: 20
            }
        }).then(res => {
            const prodInfo = res.data.prodInfo;
            for (let i = 0, j = prodInfo.length; i < j; i += 1) {
                const Id = prodInfo[i].Id;
                axios.get(getById, {
                    params: {
                        id: Id
                    },
                    headers: {
                        Authorization: token,
                    }
                }).then(res => {
                    const ad = res.data.ad;
                    const basic = res.data.basic;
                    if (ad.length > 0) {
                        console.log(ad[0].AdSaveUrl);
                        const AdSaveUrl = ad[0].AdSaveUrl;
                        const Xh = basic.Xh;
                        const Name = basic.Name;
                        const AdName = ad[0].AdName;
                        const AdRealName = ad[0].AdRealName;
                        const ProdId = ad[0].ProdId;
                        const AdId = ad[0].AdId;
                        const obj = {
                            AdSaveUrl,
                            Xh,
                            Name,
                            AdName,
                            ProdId,
                            AdId,
                            AdRealName
                        }
                        arr.push(obj);
                    }

                }).catch(err => {
                    console.log(err);
                })
            }
        }).catch((e) => {
            console.log('Nerror:' + e)
        })
    }
}

getHtmlImg();

setTimeout(() => {
    const json = JSON.stringify(arr);
    fs.writeFile('./prod.json', json, function (err) {
        if (err) {
            throw err;
        }
        // 写入成功后读取测试
        fs.readFile('./prod.json', 'utf-8', function (err, data) {
            if (err) {
                throw err;
            }
            console.log(data);
        });
    });
}, 30000);