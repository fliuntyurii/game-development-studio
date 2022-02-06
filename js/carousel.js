let i = 1;

const nextItemSlide = () => {
    if (i === 1) {
        document.getElementById('two').style.display = 'block';

        document.getElementById('one').style.display = 'none';
        document.getElementById('three').style.display = 'none';
        return i = 2;
    }
    if (i === 2) {
        document.getElementById('three').style.display = 'block';

        document.getElementById('two').style.display = 'none';
        document.getElementById('one').style.display = 'none';
        return i = 3;
    }
    if (i === 3) {
        document.getElementById('one').style.display = 'block';

        document.getElementById('three').style.display = 'none';
        document.getElementById('two').style.display = 'none';
        return i = 1;
    }
}

const prevItemSlide = () => {
    if (i === 1) {
        document.getElementById('two').style.display = 'none';
        document.getElementById('one').style.display = 'none';
        document.getElementById('three').style.display = 'block';
        return i = 3;
    }
    if (i === 2) {
        document.getElementById('three').style.display = 'none';
        document.getElementById('two').style.display = 'none';
        document.getElementById('one').style.display = 'block';
        return i = 1;
    }
    if (i === 3) {
        document.getElementById('one').style.display = 'none';
        document.getElementById('three').style.display = 'none';
        document.getElementById('two').style.display = 'block';
        return i = 2;
    } 
}

let n = 1;

const nextTeamSlide = () => {
    if (n === 1) {
        document.getElementById('five').style.display = 'block';
        document.getElementById('seven').style.display = 'none';
        document.getElementById('four').style.display = 'none';
        document.getElementById('six').style.display = 'none';
        return n = 2;
    }
    if (n === 2) {
        document.getElementById('six').style.display = 'block';
        document.getElementById('seven').style.display = 'none';
        document.getElementById('five').style.display = 'none';
        document.getElementById('four').style.display = 'none';
        return n = 3;
    }
    if (n === 3) {
        document.getElementById('seven').style.display = 'block';
        document.getElementById('five').style.display = 'none';
        document.getElementById('six').style.display = 'none';
        document.getElementById('five').style.display = 'none';
        return n = 4;
    }
    if (n === 4) {
        document.getElementById('four').style.display = 'block';

        document.getElementById('seven').style.display = 'none';
        document.getElementById('six').style.display = 'none';
        document.getElementById('five').style.display = 'none';
        return n = 1;
    }
}

const prevTeamSlide = () => {
    if (n === 1) {
        document.getElementById('five').style.display = 'none';
        document.getElementById('four').style.display = 'none';
        document.getElementById('six').style.display = 'none';
        document.getElementById('seven').style.display = 'block';
        return n = 4;
    }
    if (n === 2) {
        document.getElementById('seven').style.display = 'none';
        document.getElementById('six').style.display = 'none';
        document.getElementById('five').style.display = 'none';
        document.getElementById('four').style.display = 'block';
        return n = 1;
    }
    if (n === 3) {
        document.getElementById('seven').style.display = 'none';
        document.getElementById('four').style.display = 'none';
        document.getElementById('six').style.display = 'none';
        document.getElementById('five').style.display = 'block';
        return n = 2;
    } 
    if (n === 4) {
        document.getElementById('four').style.display = 'none';
        document.getElementById('seven').style.display = 'none';
        document.getElementById('six').style.display = 'block';
        document.getElementById('five').style.display = 'none';
        return n = 3;
    }
}