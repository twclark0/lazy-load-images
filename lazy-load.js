  document.addEventListener('DOMContentLoaded', () => {
      const lazyImages = Array.from(document.querySelectorAll('img.lazy'))
      if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
          let lazyImageObserver = new IntersectionObserver((entries, observer) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      let lazyImage = entry.target
                      lazyImage.src = lazyImage.dataset.src
                      lazyImage.srcset = lazyImage.dataset.srcset
                      lazyImage.classList.remove('lazy')
                      lazyImageObserver.unobserve(lazyImage)
                  }
              })
          })
          lazyImages.forEach(lazyImage => {
              lazyImageObserver.observe(lazyImage)
          })
      } else {

      }
  })