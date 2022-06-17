var hostname = location.hostname;
var pathname= location.pathname;
var mailAddress = pathname.match(/\/users\/(\S*)/)[1];
window.open(`https://${hostname}/g/schedule/index.csp?type_search=user&search_text=${mailAddress}&gid=search`);
