function Carousel(config) {
    this.container = (typeof config.container === 'string') ?
    document.querySelector(config.container) : config.container;

    // Get slideshow figure tags 
    this.items = (typeof config.items === 'string') ?
    this.container.querySelectorAll(config.items) : config.items;

    this.btnPrev = (typeof config.btnPrev === 'string') ?
    this.container.querySelector(config.btnPrev) : config.items;

    this.btnNext = (typeof config.items === 'string') ?
    this.container.querySelector(config.btnNext) : config.items;

    var _this = this;
    var _currentSlide = 0;
    var _lastSlide = this.items.length - 1;

    // Init carousel
    init();

    function init() {
        var _show = _this.container.querySelectorAll('.show');

        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('show');
        });
        _this.items[0].classList.add('show');
        _this.btnNext.removeAttribute('style');
        _this.btnPrev.removeAttribute('style');

        addListeners();
    }

    function addListeners() {
        _this.btnNext.addEventListener('click', showNextSlide);
        _this.btnPrev.addEventListener('click', showPrevSlide);
    }

    function showNextSlide() {
        if (isCurrentSlideTheLastSlide()) {
            _currentSlide = 0;
        } else {
            _currentSlide++;
        }
        showSlide();
    }

    function showPrevSlide() {
        if (isCurrentSlideTheFirstSlide()) {
            _currentSlide = _lastSlide;
        } else {
            _currentSlide--;
        }
        showSlide();
    }

    function showSlide() {
        //var slidesQty = _this.items.length;
        //var slide = _currentSlide % slidesQty;
        //slide = Math.abs(slide);

        _this.container.querySelector('.show').classList.remove('show');
        _this.items[_currentSlide].classList.add('show');
    }

    function isCurrentSlideTheLastSlide() {
        return _currentSlide == _lastSlide;
    }

    function isCurrentSlideTheFirstSlide() {
        return _currentSlide == 0;
    }
}