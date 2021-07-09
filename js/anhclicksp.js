function show(id)
{
    let imagepath = document.getElementById(id).getAttribute('src');
    document.getElementById('show').setAttribute('src',imagepath);
}

