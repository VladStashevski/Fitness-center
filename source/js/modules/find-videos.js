export const findVideos = () => {
  let video = document.querySelector('.video');
  setupVideo(video);
};

function setupVideo(video) {
  let link = video.querySelector('.video__link');

  video.addEventListener('click', (evt) => {
    evt.preventDefault();
    let iframe = createIframe();

    link.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');

  video.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      let iframe = createIframe();

      link.remove();
      video.appendChild(iframe);
    }
  });
}

function createIframe(id) {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', generateURL(id));
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;');
  iframe.setAttribute('allowfullscreen', '');
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL() {
  let query = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';

  return query;
}
