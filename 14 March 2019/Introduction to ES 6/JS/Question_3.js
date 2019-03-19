const song = {

    name: 'Dying to live',

    artist: 'Tupac',

    featuring: 'Biggie Smalls'

};

const markup = `
<div class="song">
    <p>${song.name} <span> - ${song.artist}</span></p>
    <p>(Featuring ${song.featuring})</p>
</div>
`;
document.getElementsByClassName('container-code')[0].innerHTML+=markup;