function urlInfo(url) {
    url = url.split("");
    colonIndex = url.indexOf(":");
    let protocol = url.slice(0, colonIndex).join("");
    let domainIndex = url.indexOf("/", colonIndex + 3);
    let domain = url.slice(colonIndex + 3, domainIndex).join("");
    let path = url.slice(domainIndex).join("");
    return [protocol, domain, path];
}

function urlMain() {
    let url = prompt("Enter URL");
    let info = urlInfo(url);
    alert(`протокол: ${info[0]}, домен: ${info[1]}, путь: ${info[2]}`);
}

urlMain();