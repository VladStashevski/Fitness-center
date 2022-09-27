export function findVideos() {
  const videos = document.querySelectorAll('.video');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  const link = video.querySelector('.video__link');
  const button = video.querySelector('.video__button');
  const id = parseMediaURL(link);

  video.addEventListener('click', () => {
    const iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function parseMediaURL(link) {
  return link.getAttribute('href').split('=').pop();
}

function createIframe(id) {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', generateURL(id));
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;');
  iframe.setAttribute('allowfullscreen', '');
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  const query = '?autoplay=1&enable_js=1';
  return `https://youtube.com/embed/${ id }${query}`;
}
