const $siteList = $('.siteList');
const $lastLi = $siteList.find('li.last');
const x = localStorage.getItem('x')
const xObject = JSON.parse()
const hashMap = xObject || [
    { logo: 'A', logotype: 'text', url: 'https://www.bilibili.com' },
    { logo: './images/timg.jpg', logotype: 'image', url: 'https://www.zhihu.com' },
];

const render = () => {
    $siteList.find('li:not(.last').remove()
    hashMap.forEach(node => {
        const $li = $(`<li>
    <a href="${node.url}">
    <div class="site">
        <div class="logo">${node.logo[0]}</div>
        <div class="link">${node.url}</div>
    </div>
</a>
</li>`).insertBefore($lastLi);
    });
}
render()

$('.addButton')
    .on('click', () => {
        let url = window.prompt('输入你要去的网址')
        if (url.indexOf('http') !== 0) {
            url = 'https://' + url
        }
        hashMap.push({
            logo: url[0],
            logotype: 'text',
            url: url
        });

        render()
    });

window.onbeforeunload = () => {
    console.log('页面要关了')
    const string = JSON.stringify(hashMap)
    localStorage.setItem('x', string)
}